const UPDATE_DATA = "UPDATE_DATA";

export const updateData = (data) => {
  return {
    type: UPDATE_DATA,
    data,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try { 
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const result = await res.json();
      console.log(result);
      dispatch(updateData(JSON.stringify(result)));
    } catch (error) {
      dispatch(updateData("Error occurred!"));
    }
  };
};

const initialState = {
  data: "First",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default dataReducer;
