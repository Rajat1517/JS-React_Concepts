import { useCallback, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { updateData, fetchData } from "./store/slices/dataSlice";

function App() {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const loadLocal = useCallback(() => {
    try {
      // const data = sessionStorage.getItem("data");
      // if (data) dispatch(updateData(data));
      // else {
        console.log("here")
        dispatch(fetchData());
      // }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    loadLocal();
  }, [loadLocal]);

  return (
    <div className="App">
      {data}
      <button
        onClick={() => {
          dispatch(updateData("Second"));
          // sessionStorage.setItem("data", "Second");
        }}
      >
        Seocnd
      </button>
    </div>
  );
}

export default App;
