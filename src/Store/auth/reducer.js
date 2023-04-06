import { getUser } from '../../helper/auth';
import { GETME_TODO, LOADING_TODO } from './constant';

const initState = {
  me: getUser() || null,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case GETME_TODO:
      return {
        ...state,
        me: action.payload,
      };
    case LOADING_TODO:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      throw new Error('INvalid Action');
  }
}

export { initState };
export default reducer;
