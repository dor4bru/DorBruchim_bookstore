import axios from 'axios';
const url = 'https://logical-calf-89.hasura.app/api/rest/books/';

// get book data
export const getBookData = async (bookId) => {
    try {
        const d = await axios.get(url + bookId)
        return d.data.books;
    } catch (error) {
        console.log(error)
    }
}