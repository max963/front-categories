import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Category from "../pages/Category";
import CreateCategory from "../pages/Category/create";

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />} />
      <Route path="/category" element={<Category />} />
      <Route path="/new-category" element={<CreateCategory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}