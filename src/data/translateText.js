import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Product: "Product",
        Deatlies: "deatlies",
        ratings: "ratings",
        publisher: "publisher",
        language: "language",
        paperback:"paperback",
        price: "price",
        As: "As",
        an: "an",
        alternative: "alternative",
        pre: "pre",
        order: "order",
        the: "the",
        Kindle: "Kindle",
        eBook: "eBook",
        insteat: "insteat",
        to: "to",
        automatiaclly: "automatiaclly",
        receive: "receive",
        on: "on",
        day: "day",
        of: "of",
        release: "release",
        buttonProduct: "Add to Cart",
        Buy:"Buy",
        Add: "Add",
        cart: "cart",
        Congrats: "Congrats",
        Your: "Your",
        ID: "ID",
        is:"is",
        BookStore: "BookStore",
        Bookshop: "Bookshop",
        will: "will",
        hope: "hope",
        see: "see",
        you: "you",
        again: "again",
        Back:"Back",
        Home: "Home",
        Page: "Page",
        Next: "Next",
        Finalize: "Finalize",
        first: "first",
        name: "name",
        last: "last",
        address: "address",
        phone: "phone",
        number: "number",
        Loading: "Loading"
      }
    },
    sp: {
      translation: {
        Product: "Detalles ",
        Deatlies: "de producto",
        ratings: "calificaciones",
        publisher: "editor",
        language: "idioma",
        paperback:"libro de bolsillo",
        price: "Precio",
        As: "como",
        an: "un",
        alternative: "alternativa",
        pre: "pre",
        order: "ordenar",
        the: "la",
        Kindle: "Encender",
        eBook: "eBook en",
        insteat: "lugar",
        to: "de",
        automatiaclly: "automáticamente",
        receive: "recibir",
        on: "el",
        day: "día",
        of: "del",
        release: "lanzamiento",
        buttonProduct: "Añadir al carrito",
        Buy: "Comprar",
        Add: "Agregar",
        cart: "carro",
        Congrats: "Felicitaciones",
        Your: "su",
        ID: "identificación",
        is:"es",
        BookStore: "librería",
        Bookshop: "librería",
        will: "voluntad",
        hope: "esperar",
        see: "ver",
        you: "tú",
        again: "otra vez",
        Back:"espalda",
        Home: "hogar",
        Page: "página",
        Next: "Próximo",
        Finalize: "Finalizar",
        first: "primero",
        name: "nombre",
        last: "Último",
        address: "Dirección",
        phone: "teléfono",
        number: "número",
        Loading: "Cargando"
      }
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;