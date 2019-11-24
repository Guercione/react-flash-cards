const initialState = {
  snackBar: {
    type: undefined,
    active: false,
    message: undefined
  }
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        snackBar: {
          type: "error",
          active: true,
          message: action.message
        }
      };

    case "REQUEST_FAILED":
      return {
        ...state,
        snackBar: {
          type: "error",
          active: true,
          message: action.message
        }
      };

    case "REQUEST_SUCCESS":
      return {
        ...state,
        snackBar: {
          type: "success",
          active: true,
          message: action.message
        }
      };

    case "REQUEST_WARNING":
      return {
        ...state,
        snackBar: {
          type: "warning",
          active: true,
          message: action.message
        }
      };

    case "CLEAR_MESSAGE":
      return {
        ...state,
        snackBar: {
          type: state.snackBar.type,
          active: false,
          message: undefined
        }
      };

    default: {
      return {
        ...state
      };
    }
  }
};

export default error;
