let instance;

// book cart class
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

    // get instance
    getInstance() {
        return this;
    }

    // get books from cart
    getBooksFromCart() {
        return JSON.parse(localStorage.getItem(BookCartModel.BOOK_CART_KEY) || "{}");
    }

    // add the book to the cart
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
        return instance.theBookCart;
    }

    // delete book from cart and calculate the price and total price again
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

    // get total book count
    getTotalBookCount() {
        return Object.keys(instance.theBookCart).reduce((prev, bookId) => {
            return instance.theBookCart[bookId].count + prev;
        }, 0);

    }

    // get total price
    getTotalPrice() {
        return Object.keys(instance.theBookCart).reduce((prev, bookId) => {
            return instance.theBookCart[bookId].totalPrice + prev;
        }, 0);
    }

    // clear cart
    clearCart() {
        localStorage.setItem(BookCartModel.BOOK_CART_KEY, "{}");
        instance.theBookCart = {};
    }

    // print table book
    getPrintableBooks() {
        const printList = {};
        instance.theBookCart = instance.getBooksFromCart();
        for (const [key, value] of Object.entries(instance.theBookCart)) {
            printList[key] = JSON.parse(JSON.stringify(value));
            delete printList[key].data.description;
        }
        return printList;
    }

    // get book cart
    getBookCart() {
        return instance.theBookCart;
    }
}

const singletonBookCart = new BookCartModel();
export default singletonBookCart;
