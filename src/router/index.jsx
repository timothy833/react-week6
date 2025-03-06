import { createHashRouter } from "react-router-dom";
import FrountLayout from "../layouts/FrountLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProuuctsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";

const router = createHashRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/frountLayout",
        element: <FrountLayout />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "products",
                element: <ProductsPage />
            },
            {
                path: "products/:id",
                element: <ProductDetailPage />
            },
            {
                path: "cart",
                element: <CartPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;