import {environment} from '../../environments/environment';

export const baseUrl = environment.production ? 'https://api.shipping.com' : 'http://localhost:8080';
export const productsUrl = baseUrl + '/products';
export const usersUrl = baseUrl + '/users';
export const userUrl = usersUrl + '/:id';
export const registerUrl = baseUrl + '/register';
export const loginUrl = baseUrl + '/login';





