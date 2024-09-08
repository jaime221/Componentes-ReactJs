import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoutes from "./components/router/router";
function App() {
  return (
    <>
      <ToastContainer />
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;

