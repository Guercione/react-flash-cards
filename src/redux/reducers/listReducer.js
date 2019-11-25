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

    case "SET_LIST_NEW_CARD":
      return {
        ...state,
        selectedCard: undefined,
        cards: [
          ...state.cards,
          {
            title: action.card.title || "",
            image: action.card.imageUrl || "",
            description: action.card.description || "",
            items: action.card.items.map(item => [item.word1, item.word2])
          }
        ]
      };

    case "SET_LIST_EDIT_CARD":
      return {
        ...state,
        selectedCard: undefined,
        cards: [
          ...state.cards.filter((item, key) => key !== action.card.id),
          {
            title: action.card.title || "",
            image: action.card.imageUrl || "",
            description: action.card.description || "",
            items: action.card.items.map(item => [item.word1, item.word2])
          }
        ]
      };

    case "SET_LIST_DELETE_CARD":
      return {
        ...state,
        selectedCard: undefined,
        cards:
          action.id !== undefined
            ? [...state.cards.filter((item, key) => key !== action.id)]
            : [...state.cards]
      };

    default: {
      return {
        ...state
      };
    }
  }
};

export default list;
