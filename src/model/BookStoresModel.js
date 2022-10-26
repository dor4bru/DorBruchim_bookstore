import { getBooksData } from '../api/Books'
import { getStoresData } from '../api/Store'

let instance;
class BookStoresModel {

    // For books
    static BOOK_MAX_TTL_SEC = 60;
    static BOOKS_FETCH_TIME_SEC = "BOOKS_STORE_TTL_KEY";

    // For stores
    static STORES_MAX_TTL_SEC = 120;
    static STORE_FETCH_TIME_SEC = "STORE_TTL_KEY";

    constructor() {
        if (instance) {
            throw new Error("You can only create one BookStoresModel instance!");
        }
        instance = this;
        instance.books = {};
        instance.stores = {};
    }

    getInstance() {
        return this;
    }

    // create store
    async createStores() {
        const stores = await getStoresData();
        stores.forEach((store) => {
            instance.stores[store.id] = store;
        });
        localStorage.setItem(BookStoresModel.STORE_FETCH_TIME_SEC, (Date.now() / 1000).toString());
        return instance.stores;
    }

    async createBookByStores() {
        /*
            instance.books will look like:
            {
                "store-id-1": {
                    "book-id-1-1": {},
                    "book-id-1-2": {},
                },
                "store-id-2": {
                    "book-id-2-1": {},
                    "book-id-2-2": {},
                }
            }
         */
        const books = await getBooksData();
        books.forEach((book) => {
            if(!instance.books[book.store_id]) {
                instance.books[book.store_id] = { [book.id]: book }
            } else {
                instance.books[book.store_id][book.id] = book;
            }
        });
        localStorage.setItem(BookStoresModel.BOOKS_FETCH_TIME_SEC, (Date.now() / 1000).toString());
        return instance.books;
    }

    // get books data from api or from memory by check the time
    async getBooksData(storeId = null) {
        const now = (Date.now() / 1000);
        const fetchTime = localStorage.getItem(BookStoresModel.BOOKS_FETCH_TIME_SEC);
        const fetchTimeSec = parseInt(fetchTime);
        let result;
        if (!fetchTime || (now - fetchTimeSec) > BookStoresModel.BOOK_MAX_TTL_SEC || Object.keys(instance.books).length === 0) {
            result = await instance.createBookByStores();
        } else {
            result = instance.books;
        }
        return storeId? result[storeId] : result;
    }

    // get stores
    async getStores(storeId = null) {
        const now = (Date.now() / 1000);
        const fetchTime = localStorage.getItem(BookStoresModel.STORE_FETCH_TIME_SEC);
        const fetchTimeSec = parseInt(fetchTime);
        let result = (!fetchTime || (now - fetchTimeSec) > BookStoresModel.STORES_MAX_TTL_SEC || Object.keys(instance.stores).length === 0)?
            (await instance.createStores()) : instance.stores;
        return storeId? result[storeId] : result;
    }
}

const singletonBookStores = new BookStoresModel();
export default singletonBookStores;
