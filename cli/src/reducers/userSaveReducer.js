import { USER_SAVE} from '../actions/action_types';
export default function UsersSave(state=[], action) {
    switch (action.type) {
        case USER_SAVE:
            return {data: action.payload.data };
        default:
            return state;
    }
}