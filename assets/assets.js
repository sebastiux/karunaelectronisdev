import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import cart_icon from "./cart_icon.svg";
import add_icon from "./add_icon.svg";
import order_icon from "./order_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import box_icon from "./box_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import menu_icon from "./menu_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import decrease_arrow from "./decrease_arrow.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import my_location_image from "./my_location_image.svg";
import arrow_icon_white from "./arrow_icon_white.svg";
import heart_icon from "./heart_icon.svg";
import star_icon from "./star_icon.svg";
import redirect_icon from "./redirect_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import header_headphone_image from "./header_headphone_image.png";
import header_playstation_image from "./header_playstation_image.png";
import header_macbook_image from "./header_macbook_image.png";
import macbook_image from "./macbook_image.png";
import bose_headphone_image from "./bose_headphone_image.png";
import apple_earphone_image from "./apple_earphone_image.png";
import samsung_s23phone_image from "./samsung_s23phone_image.png";
import venu_watch_image from "./venu_watch_image.png";
import upload_area from "./upload_area.png";
import cannon_camera_image from "./cannon_camera_image.png";
import sony_airbuds_image from "./sony_airbuds_image.png";
import asus_laptop_image from "./asus_laptop_image.png";
import projector_image from "./projector_image.png";
import playstation_image from "./playstation_image.png";
import girl_with_headphone_image from "./girl_with_headphone_image.png";
import girl_with_earphone_image from "./girl_with_earphone_image.png";
import md_controller_image from "./md_controller_image.png";
import sm_controller_image from "./sm_controller_image.png";
import jbl_soundbox_image from "./jbl_soundbox_image.png";
import boy_with_laptop_image from "./boy_with_laptop_image.png";
import checkmark from "./checkmark.png";
import product_details_page_apple_earphone_image1 from "./product_details_page_apple_earphone_image1.png";
import product_details_page_apple_earphone_image2 from "./product_details_page_apple_earphone_image2.png";
import product_details_page_apple_earphone_image3 from "./product_details_page_apple_earphone_image3.png";
import product_details_page_apple_earphone_image4 from "./product_details_page_apple_earphone_image4.png";
import product_details_page_apple_earphone_image5 from "./product_details_page_apple_earphone_image5.png";

// Imágenes específicas de electrónicos para Karuna
import instrumentationfluke from './instrumentationfluke.jpg';
import transistor from './transistor.png';
import capacitor from './capacitor.png';
import fluketools from './fluketools.jpg';
import flukenicebanner from './flukenicebanner.png';
import pcbdesign from './pcbdesign.jpg';
import components from './components.jpg';

export const assets = {
  logo,
  search_icon,
  user_icon,
  // Imágenes de electrónicos principales
  instrumentationfluke,
  transistor,
  capacitor,
  flukenicebanner,
  pcbdesign,
  components,
  fluketools,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  // Header images adaptadas para electrónicos
  header_arduino_image: instrumentationfluke, // Reutilizamos para Arduino
  header_fluke_image: fluketools, // Para instrumentos Fluke
  header_pcb_image: pcbdesign, // Para diseño PCB
  header_headphone_image,
  header_playstation_image,
  header_macbook_image,
  macbook_image,
  bose_headphone_image,
  apple_earphone_image,
  samsung_s23phone_image,
  venu_watch_image,
  upload_area,
  cannon_camera_image,
  sony_airbuds_image,
  asus_laptop_image,
  projector_image,
  playstation_image,
  girl_with_headphone_image,
  girl_with_earphone_image,
  md_controller_image,
  sm_controller_image,
  jbl_soundbox_image,
  boy_with_laptop_image,
  product_details_page_apple_earphone_image1,
  product_details_page_apple_earphone_image2,
  product_details_page_apple_earphone_image3,
  product_details_page_apple_earphone_image4,
  product_details_page_apple_earphone_image5,
  checkmark
};

export const BagIcon = () => {
  return (
    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
    </svg>
  )
}

export const CartIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>
  )
}

export const BoxIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

export const HomeIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
  </svg>
);

// Productos dummy para Karuna Electronics
export const productsDummyData = [
  // Microcontroladores
  {
    "_id": "mc001",
    "name": "Arduino UNO R3 - Microcontrolador ATmega328P",
    "partNumber": "A000066",
    "description": "Placa de desarrollo basada en ATmega328P, ideal para proyectos educativos e industriales. Compatible con shields y amplia comunidad de soporte técnico.",
    "price": 650.00,
    "offerPrice": 520.00,
    "keySpecs": "ATmega328P, 14 I/O digitales, 6 entradas analógicas, USB",
    "image": [
      instrumentationfluke,
      components,
      pcbdesign
    ],
    "category": "Microcontroladores",
    "datasheet": "https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf",
    "inStock": true,
    "quantity": 45,
    "date": Date.now()
  },
  {
    "_id": "mc002",
    "name": "ESP32 DevKit V1 - WiFi y Bluetooth Integrado",
    "partNumber": "ESP32-DEVKITV1",
    "description": "Módulo de desarrollo con WiFi y Bluetooth dual-band, perfecto para aplicaciones IoT y conectividad inalámbrica avanzada.",
    "price": 280.00,
    "offerPrice": 245.00,
    "keySpecs": "WiFi 802.11, Bluetooth 4.2, 34 GPIO, Dual Core",
    "image": [
      components,
      pcbdesign
    ],
    "category": "Microcontroladores",
    "datasheet": "https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf",
    "inStock": true,
    "quantity": 78,
    "date": Date.now()
  },
  {
    "_id": "mc003",
    "name": "Raspberry Pi 4 Model B - Computadora de Placa Única",
    "partNumber": "RPI4-MODBP-4GB",
    "description": "Computadora completa de tamaño reducido con 4GB RAM, ideal para proyectos avanzados, servidores y aplicaciones educativas.",
    "price": 1850.00,
    "offerPrice": 1650.00,
    "keySpecs": "ARM Cortex-A72, 4GB RAM, WiFi, Bluetooth, 4K video",
    "image": [
      macbook_image,
      components
    ],
    "category": "Microcontroladores",
    "datasheet": "https://datasheets.raspberrypi.com/rpi4/raspberry-pi-4-datasheet.pdf",
    "inStock": true,
    "quantity": 23,
    "date": Date.now()
  },

  // Amplificadores Operacionales
  {
    "_id": "op001",
    "name": "LM358 - Amplificador Operacional Dual de Propósito General",
    "partNumber": "LM358N",
    "description": "OpAmp dual de bajo consumo, alimentación simple, ideal para aplicaciones de acondicionamiento de señales y filtros activos básicos.",
    "price": 15.00,
    "offerPrice": 12.00,
    "keySpecs": "Dual, Single Supply, 1MHz GBW, DIP-8",
    "image": [
      components,
      transistor
    ],
    "category": "OpAmps",
    "datasheet": "https://www.ti.com/lit/ds/symlink/lm358.pdf",
    "inStock": true,
    "quantity": 150,
    "date": Date.now()
  },
  {
    "_id": "op002",
    "name": "TL074 - Amplificador Operacional Cuádruple JFET",
    "partNumber": "TL074CN",
    "description": "OpAmp cuádruple con entrada JFET, baja corriente de bias, excelente para aplicaciones de audio e instrumentación de precisión.",
    "price": 35.00,
    "offerPrice": 28.00,
    "keySpecs": "Quad, JFET Input, 3MHz GBW, Low Bias Current",
    "image": [
      components,
      transistor
    ],
    "category": "OpAmps",
    "datasheet": "https://www.ti.com/lit/ds/symlink/tl074.pdf",
    "inStock": true,
    "quantity": 89,
    "date": Date.now()
  },

  // Transistores
  {
    "_id": "tr001",
    "name": "2N2222A - Transistor NPN de Propósito General",
    "partNumber": "2N2222A",
    "description": "Transistor bipolar NPN clásico para conmutación y amplificación de señales pequeñas, muy versátil y confiable para prototipos.",
    "price": 8.00,
    "offerPrice": 6.50,
    "keySpecs": "NPN, 40V, 800mA, 250MHz, TO-92",
    "image": [
      transistor,
      components
    ],
    "category": "Transistores",
    "datasheet": "https://www.onsemi.com/pdf/datasheet/p2n2222a-d.pdf",
    "inStock": true,
    "quantity": 200,
    "date": Date.now()
  },
  {
    "_id": "tr002",
    "name": "IRF540N - MOSFET de Potencia Canal N",
    "partNumber": "IRF540N",
    "description": "MOSFET de potencia para conmutación de altas corrientes, ideal para control de motores y fuentes de alimentación switching.",
    "price": 25.00,
    "offerPrice": 22.00,
    "keySpecs": "N-Channel, 100V, 33A, 44mΩ RDS(on), TO-220",
    "image": [
      transistor,
      components
    ],
    "category": "Transistores",
    "datasheet": "https://www.infineon.com/dgdl/irf540n.pdf",
    "inStock": true,
    "quantity": 67,
    "date": Date.now()
  },

  // Instrumentos Fluke
  {
    "_id": "fl001",
    "name": "Fluke 87V - Multímetro Digital Industrial True RMS",
    "partNumber": "FLUKE-87V",
    "description": "Multímetro industrial de alta precisión con medición True RMS, ideal para mantenimiento industrial y laboratorio de calibración.",
    "price": 8950.00,
    "offerPrice": 8200.00,
    "keySpecs": "True RMS, 4000 counts, CAT III 1000V, CAT IV 600V",
    "image": [
      fluketools,
      instrumentationfluke
    ],
    "category": "Instrumentos Fluke",
    "datasheet": "https://dam-assets.fluke.com/s3fs-public/6004508_EN_w.pdf",
    "inStock": true,
    "quantity": 5,
    "date": Date.now()
  },
  {
    "_id": "fl002",
    "name": "Fluke 117 - Multímetro para Electricistas",
    "partNumber": "FLUKE-117",
    "description": "Multímetro compacto ideal para electricistas, con detección de voltaje sin contacto y mediciones seguras en instalaciones.",
    "price": 4850.00,
    "offerPrice": 4450.00,
    "keySpecs": "VoltAlert, AutoV/LoZ, 6000 counts, CAT III 600V",
    "image": [
      fluketools,
      instrumentationfluke
    ],
    "category": "Instrumentos Fluke",
    "datasheet": "https://dam-assets.fluke.com/s3fs-public/6002852_EN_w.pdf",
    "inStock": true,
    "quantity": 8,
    "date": Date.now()
  },

  // Componentes Pasivos
  {
    "_id": "cp001",
    "name": "Resistencias de Precisión 1% - Kit 600 piezas",
    "partNumber": "RES-KIT-600",
    "description": "Kit completo de resistencias de metal film 1/4W con tolerancia del 1%, valores estándar E24 de 10Ω a 1MΩ para laboratorio.",
    "price": 320.00,
    "offerPrice": 280.00,
    "keySpecs": "1/4W, ±1%, Metal Film, E24 series, 600 piezas",
    "image": [
      components,
      capacitor
    ],
    "category": "Componentes Pasivos",
    "datasheet": "https://www.vishay.com/docs/28705/mf0204.pdf",
    "inStock": true,
    "quantity": 25,
    "date": Date.now()
  },
  {
    "_id": "cp002",
    "name": "Capacitores Electrolíticos - Kit Variado",
    "partNumber": "CAP-ELEC-KIT",
    "description": "Surtido de capacitores electrolíticos de aluminio, valores desde 1µF hasta 1000µF, voltajes de 16V a 50V para filtrado.",
    "price": 180.00,
    "offerPrice": 150.00,
    "keySpecs": "1µF-1000µF, 16V-50V, Radial, 120 piezas",
    "image": [
      capacitor,
      components
    ],
    "category": "Componentes Pasivos",
    "datasheet": "https://industrial.panasonic.com/cdbs/www-data/pdf/RDF0000/ABA0000C1215.pdf",
    "inStock": true,
    "quantity": 42,
    "date": Date.now()
  }
];

// Usuario dummy para México
export const userDummyData = {
  "_id": "user_karuna_mx_001",
  "name": "Ing. Carlos González",
  "email": "carlos.gonzalez@universidad.mx",
  "imageUrl": "https://img.clerk.com/default-user.jpg",
  "cartItems": {},
  "__v": 0
}

// Órdenes dummy para México
export const orderDummyData = [
  {
    "_id": "ord_mx_001",
    "userId": "user_karuna_mx_001",
    "items": [
      {
        "product": {
          "_id": "mc001",
          "name": "Arduino UNO R3 - Microcontrolador ATmega328P",
          "partNumber": "A000066",
          "description": "Placa de desarrollo basada en ATmega328P, ideal para proyectos educativos e industriales.",
          "price": 650.00,
          "offerPrice": 520.00,
          "image": [instrumentationfluke],
          "category": "Microcontroladores"
        },
        "quantity": 2,
        "_id": "ord_mx_001_item1"
      },
      {
        "product": {
          "_id": "op001",
          "name": "LM358 - Amplificador Operacional Dual",
          "partNumber": "LM358N",
          "description": "OpAmp dual de bajo consumo, alimentación simple.",
          "price": 15.00,
          "offerPrice": 12.00,
          "image": [components],
          "category": "OpAmps"
        },
        "quantity": 10,
        "_id": "ord_mx_001_item2"
      }
    ],
    "amount": 1160.00,
    "address": {
      "_id": "addr_mx_001",
      "userId": "user_karuna_mx_001",
      "fullName": "Ing. Carlos González",
      "phoneNumber": "+52 55 1234 5678",
      "pincode": "01210",
      "area": "Av. Universidad 1234, Col. Del Valle",
      "city": "Ciudad de México",
      "state": "CDMX",
      "__v": 0
    },
    "status": "Procesando",
    "date": Date.now(),
    "__v": 0
  }
];

// Direcciones dummy para México
export const addressDummyData = [
  {
    "_id": "addr_mx_001",
    "userId": "user_karuna_mx_001",
    "fullName": "Ing. Carlos González",
    "phoneNumber": "+52 55 1234 5678",
    "pincode": "01210",
    "area": "Av. Universidad 1234, Col. Del Valle",
    "city": "Ciudad de México",
    "state": "CDMX",
    "__v": 0
  }
]