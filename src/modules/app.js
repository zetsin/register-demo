export const NOTIFY = 'app/notify';

const initialState = {
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFY:
      return {
        ...state,
        message: action.preload
      };

    default:
      return state;
  }
};

export const notify = message => {
  return dispatch => {
    dispatch({
      type: NOTIFY,
      preload: message
    });

    setTimeout(() => {
      dispatch({
        type: NOTIFY,
        preload: ''
      });
    }, 3000);
  };
};
