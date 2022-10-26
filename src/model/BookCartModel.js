let instance;

class BookCartModel {

    // For stores
    static BOOK_CART_KEY = "booksCart";

    constructor() {
        if (instance) {
            throw new Error("You can only create one BookStoresModel instance!");
        }
        instance = this;
        instance.theBookCart = instance.getBooksFromCart();
    }

    getInstance() {
        return this;
    }

    getBooksFromCart() {
        return JSON.parse(localStorage.getItem(BookCartModel.BOOK_CART_KEY) || "{}");
    }

    addBookToCart(book) {
        if (instance.theBookCart[book.id]) {
            instance.theBookCart[book.id].count += 1;
            instance.theBookCart[book.id].totalPrice = instance.theBookCart[book.id].count * book.price;
        } else {
            instance.theBookCart[book.id] = {
                data: book,
                count: 1,
                totalPrice: book.price
            }
        }
        localStorage.setItem(BookCartModel.BOOK_CART_KEY, JSON.stringify(instance.theBookCart));
        console.log("Final Num of books in cart: " + instance.getTotalBookCount());
        return instance.theBookCart;
    }

    deleteBookFromCart(id) {
        if(!instance.theBookCart[id]) return;

        if (instance.theBookCart[id].count > 1) {
            instance.theBookCart[id].count--;
            //set the total price
            instance.theBookCart[id].totalPrice = instance.theBookCart[id].count * instance.theBookCart[id].data.price;
        } else if (instance.theBookCart[id].count === 1) {
            delete instance.theBookCart[id];
        }
        localStorage.setItem(BookCartModel.BOOK_CART_KEY, JSON.stringify(instance.theBookCart));
        instance.theBookCart = instance.getBooksFromCart();
        return instance.theBookCart;
    }

    getTotalBookCount() {
        return Object.keys(instance.theBookCart).reduce((prev, bookId) => {
            return instance.theBookCart[bookId].count + prev;
        }, 0);

    }

    getTotalPrice() {
        return Object.keys(instance.theBookCart).reduce((prev, bookId) => {
            return instance.theBookCart[bookId].totalPrice + prev;
        }, 0);
    }

    clearCart() {
        localStorage.setItem(BookCartModel.BOOK_CART_KEY, "{}");
        instance.theBookCart = {};
    }

    getPrintableBooks() {
        const printList = {};
        instance.theBookCart = instance.getBooksFromCart();
        for (const [key, value] of Object.entries(instance.theBookCart)) {
            printList[key] = JSON.parse(JSON.stringify(value));
            delete printList[key].data.description;
        }
        return printList;
    }

    getBookCart() {
        return instance.theBookCart;
    }
}

const singletonBookCart = new BookCartModel();
export default singletonBookCart;
