import { USER_SERVER, INITIAL_GET, USER_PUT, INITIAL_GETALL } from './../actions/action_types';
const INITIAL_STATE = [{}];

export default function Users(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        case USER_SERVER:
            return { data: action.payload.data };
        case INITIAL_GET:
            return { data: action.payload };
        case INITIAL_GETALL:
            return { users: action.payload };
        case USER_PUT:
            return { data: action.payload };
        default:
            return state;
    }
}