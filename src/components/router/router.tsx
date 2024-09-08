import NewSale from "../sales/page/NewSale"
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AppRoutes: React.FC = () => {
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewSale />}>
       
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes
