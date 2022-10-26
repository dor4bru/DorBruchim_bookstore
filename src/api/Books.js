import axios from 'axios';
const url = 'https://logical-calf-89.hasura.app/api/rest/books';

// get books data
export const getBooksData = async () => {
    try {
        const d = await axios.get(url)
        return d.data.books;
    } catch (error) {
        console.log(error)
    }
}