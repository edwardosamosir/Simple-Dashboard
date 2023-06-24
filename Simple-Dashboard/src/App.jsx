import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { Provider } from "react-redux"
// import store from "./store";

function App() {

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
