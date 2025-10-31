import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
console.log("router", router);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
