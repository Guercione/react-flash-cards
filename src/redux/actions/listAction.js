export const setListSelectedCard = cardNumber => ({
  type: "SET_LIST_SELECTED_CARD",
  cardNumber
});

export const setListNewCard = card => ({
  type: "SET_LIST_NEW_CARD",
  card
});

export const setListEditCard = card => ({
  type: "SET_LIST_EDIT_CARD",
  card
});

export const setListDeleteCard = id => ({
  type: "SET_LIST_DELETE_CARD",
  id
});
