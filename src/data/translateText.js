import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        ProductTitle: "Product details",
        StarDiv: "ratings)",
        language: "language",
        paperback:"paperback",
        price: "price",
        productDescription1: "As an alternative, pre-order the Kindle",
        productDescription2: "eBook insteat to automatiaclly receive on day of release",
        buttonProduct: "Add to Cart",
      }
    },
    sp: {
      translation: {
        ProductTitle: "Detalles de producto",
        StarDiv: "calificaciones)",
        language: "idioma",
        paperback:"libro de bolsillo",
        price: "Precio",
        productDescription1: "Como alternativa, pre-ordene el Kindle",
        productDescription2: "eBook en lugar de recibir automáticamente el día del lanzamiento",
        buttonProduct: "Añadir al carrito",
      }
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;