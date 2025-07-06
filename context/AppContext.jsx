'use client'
import { productsDummyData, userDummyData } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
// Add Clerk imports
import { useAuth, useUser } from '@clerk/nextjs';

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY
    const router = useRouter()

    // Clerk authentication
    const { isSignedIn, userId } = useAuth();
    const { user } = useUser();

    const [products, setProducts] = useState([])
    const [userData, setUserData] = useState(false)
    const [isSeller, setIsSeller] = useState(false) // Changed default to false
    const [cartItems, setCartItems] = useState({})

    // Update isSeller based on authenticated user - FOR NOW, ANY SIGNED IN USER CAN ACCESS ADMIN
    useEffect(() => {
        if (isSignedIn && user) {
            // For development: Give admin access to any signed-in user
            setIsSeller(true);
            
            // Update userData with actual Clerk user data
            setUserData({
                _id: user.id,
                name: `${user.firstName} ${user.lastName}`,
                email: user.emailAddresses[0]?.emailAddress,
                role: 'seller', // For now, everyone is a seller
                firstName: user.firstName,
                lastName: user.lastName,
                createdAt: user.createdAt,
                imageUrl: user.imageUrl
            });
        } else {
            // User not signed in
            setIsSeller(false);
            setUserData(false);
        }
    }, [isSignedIn, user]);

    const fetchProductData = async () => {
        setProducts(productsDummyData)
    }

    const fetchUserData = async () => {
        // If user is authenticated, use Clerk data, otherwise use dummy data
        if (isSignedIn && user) {
            // Data is already set in the useEffect above
            return;
        } else {
            setUserData(userDummyData)
        }
    }

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    const updateCartQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    // Helper function to check if user is admin - FOR DEVELOPMENT: ALL SIGNED-IN USERS ARE ADMIN
    const isAdmin = () => {
        return isSignedIn && user; // Any signed-in user is admin for now
    }

    // Helper function to check if user is seller or admin - FOR DEVELOPMENT: ALL SIGNED-IN USERS CAN ACCESS
    const canAccessAdminPanel = () => {
        return isSignedIn && user; // Any signed-in user can access admin panel for now
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    useEffect(() => {
        fetchUserData()
    }, [isSignedIn, user]) // Added dependencies to refetch when auth state changes

    const value = {
        currency, router,
        // Authentication state
        isSignedIn, userId, user,
        isSeller, setIsSeller,
        isAdmin, canAccessAdminPanel,
        // User data
        userData, fetchUserData,
        // Products
        products, fetchProductData,
        // Cart functionality
        cartItems, setCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}