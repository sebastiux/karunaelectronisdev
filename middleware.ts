import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/cart',
  '/my-orders',
  '/order-placed',
  '/add-address',
  '/seller(.*)',
])

// Define seller-only routes
const isSellerRoute = createRouteMatcher([
  '/seller(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth()
  
  // If accessing protected route and not signed in, redirect to sign-in
  if (isProtectedRoute(req) && !userId) {
    return auth().redirectToSignIn()
  }
  
  // If accessing seller route, check if user has seller role
  if (isSellerRoute(req) && userId) {
    const userRole = sessionClaims?.metadata?.role
    if (userRole !== 'seller') {
      return Response.redirect(new URL('/', req.url))
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}