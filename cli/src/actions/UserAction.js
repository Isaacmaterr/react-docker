import { USER_SERVER, USER_SAVE, INITIAL_GET, USER_PUT, INITIAL_GETALL } from './action_types';
import Axios from 'axios'

export function userServer(data) {
    return {
        type: USER_SERVER,
        payload: { data: data }
    }
}

export function userSaveServer(data=[]) {
    return {
        type: USER_SAVE,
        payload: { data: data }
    }
}


export function userGet(data=[{}]) {
    return {
        type: INITIAL_GET,
        payload: data
    }
}


export function userGetAll(data=[{}]) {
    return {
        type: INITIAL_GETALL,
        payload: data
    }
}

export function userEdit(data = {edit:false}) {
    return {
        type: USER_PUT,
        payload: data
    }
}


export function usersThunck() {
    return async (dispatch) => {

        try {
            let token = localStorage.getItem('token');
            const { data } = await Axios.get('http://127.0.0.1:8000/api/user', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            //localStorage.setItem('token',config.headers.Authorization.replace('Bearer ',''));
            console.log(data);
            dispatch(userGetAll(data));
        } catch (error) {
            dispatch(userGetAll([{}]));
        }

    }
}


export function usersEditThunck(id) {
    return async (dispatch) => {

        try {
            let token = localStorage.getItem('token');
            const { data } = await Axios.get('http://127.0.0.1:8000/api/user/'+id, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            //localStorage.setItem('token',config.headers.Authorization.replace('Bearer ',''));
            console.log(data);
            dispatch(userGet(data));
        } catch (error) {
            dispatch(userGet());
        }

    }
}



export function userSaveThunck(user) {
    return async (dispatch) => {

        try {
            let token = localStorage.getItem('token');
            const { data } = await Axios.post('http://127.0.0.1:8000/api/user', user, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            console.log(data);
            dispatch(userSaveServer({ save: true }));
        } catch (error) {
            dispatch(userSaveServer({ save: false }));
        }

    }
}



export function usersPercisteEditThunck(user) {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem('token');
            const { data } = await Axios.put('http://127.0.0.1:8000/api/user/'+user.id,user,{
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });
            //localStorage.setItem('token',config.headers.Authorization.replace('Bearer ',''));
            console.log(data);
            dispatch(userEdit({edit:true}));
        } catch (error) {
            dispatch(userEdit());
        }

    }
}



