import axios from 'axios';
const url = 'https://logical-calf-89.hasura.app/api/rest/stores';

export const getStoresData = async () => {
    try{
     const d = await axios.get(url)
        return d.data.stores;
    }catch(error){
        console.log(error)
    }
}

export const getImageStoreData = async () => {
    try{
        let data = require('../data/StoreImageMap.json');
        return data.Store
    }catch(error){
        console.log(error)
    }
}


// // fnac_store_books.json
// {
//     "bok-123-123": "http://image from internte/"
//      "http://"
// }
// "defult-book":