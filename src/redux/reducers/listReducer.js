import inicialData from "../../contants/inicialData";

const initialState = {
  cards: inicialData
};

const list = (state = initialState, action) => {
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

    default: {
      return {
        ...state
      };
    }
  }
};

export default list;
