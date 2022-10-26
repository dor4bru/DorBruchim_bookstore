import axios from 'axios';
const url = 'https://logical-calf-89.hasura.app/api/rest/stores';

// get store data
export const getStoresData = async () => {
    try {
        const d = await axios.get(url)
        return d.data.stores;
    } catch (error) {
        console.log(error)
    }
}