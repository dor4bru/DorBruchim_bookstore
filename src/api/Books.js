import axios from 'axios';
const url = 'https://logical-calf-89.hasura.app/api/rest/books';

export const getBookData = async () => {
    try{
     const d = await axios.get(url)
     console.log(d.data.books)
        return d.data.books;
    }catch(error){
        console.log(error)
    }
}