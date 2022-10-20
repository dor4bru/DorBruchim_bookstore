import axios from 'axios';
const url = 'https://logical-calf-89.hasura.app/api/rest/books/';

export const getBookData = async (bookId) => {
    try{
        console.log(url+bookId)
     const d = await axios.get(url+bookId)
        return d.data.books;
    }catch(error){
        console.log(error)
    }
}