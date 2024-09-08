import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewSale from "../sales/page/NewSale";
import UserPage from "../users/page/UserPage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewSale />} />
          <Route path="/users" element={<UserPage />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
