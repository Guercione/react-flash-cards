import inicialData from "../../contants/inicialData";

const initialState = {
  cards: inicialData,
  selectedCard: undefined
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_SELECTED_CARD":
      return {
        ...state,
        selectedCard: action.cardNumber
      };

    default: {
      return {
        ...state
      };
    }
  }
};

export default list;
