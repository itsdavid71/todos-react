import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, title: "Buy Milk", date: "2022-21-06", completed: false },
  { id: 1, title: "Buy Bread", date: "2022-21-06", completed: true },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => [...state, action.payload],
    deleteItem: (state, action) =>
      state.filter((item) => item.id !== action.payload.id),
    completeItem: (state, action) =>
      state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
  },
});

export const { addItem, deleteItem, completeItem } = todoSlice.actions;

export default todoSlice.reducer;
