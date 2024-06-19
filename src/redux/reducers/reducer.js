const INITE_STATE = {
  carts: [],
};

export const cartReducer = (state = INITE_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const IteamIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "REMOVE_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

      case "RMV_ONE":
        const IteamIndex_dec = state.carts.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (IteamIndex_dec >= 0) {
          if (state.carts[IteamIndex_dec].qnty > 1) {
            state.carts[IteamIndex_dec].qnty -= 1;
            return {
              ...state,
              carts: [...state.carts],
            };
          } else if (state.carts[IteamIndex_dec].qnty === 1) {
            const data = state.carts.filter((el) => el.id !== action.payload.id);
            return {
              ...state,
              carts: data,
            };
          }
        }
        return state;
    default:
      return state;
  }
};
