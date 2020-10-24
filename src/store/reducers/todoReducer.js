const initialState = [
  {
    id: Date.now(),
    task: "Crear un todo  ",
    completed: true,
  },
  {
    id: Date.now(),
    task: "Crear un todo  ",
    completed: true,
  },
  {
    id: Date.now(),
    task: "Crear un todo  ",
    completed: true,
  },
  {
    id: Date.now(),
    task: "Crear un todo  ",
    completed: true,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
