import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000,
});


export const getProdutos = async () => {
    const response = await api.get('/products');
    console.log('Resposta da API:', response.data.products);
    return response.data.products;
};