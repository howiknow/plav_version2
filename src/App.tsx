import { RouterProvider } from "react-router-dom";
import router from "./Router"; 
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen max-w-[375px] min-w-[320px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
