import { createContext, useReducer } from "react";
import { productsData } from "../Data/SampleData";

export const InventoryContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "MOVE_STOCK":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, stock: item.stock + action.payload.qty }
          : item
      );
       case "ADD_PRODUCT":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const InventoryProvider = ({ children }) => {
  const [inventory, dispatch] = useReducer(reducer, productsData);

  return (
    <InventoryContext.Provider value={{ inventory, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};
