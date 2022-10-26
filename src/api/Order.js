import axios from 'axios';
const url = 'https://logical-calf-89.hasura.app/api/rest/orders';

// post order id
export const postOrder = async (body) => {
    try {
        const d = await axios.post(url, body);
        return d.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}