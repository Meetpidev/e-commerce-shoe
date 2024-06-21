
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import ProductDetail from "./Pages/Shop/ProductDetail.jsx";
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Payment from "./Pages/PaymentPage/Payment.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth0Provider
    domain="dev-ufg3sbrpr0btzdlb.us.auth0.com"
    clientId="ldRSFKTmSMuwJhoaWYmJVzELa2hfsob0"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  > <App />
  </Auth0Provider>,
    children: [
      {
        path: "/productDetail",
        element: <ProductDetail />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/shop",
        element: <ProductDetail></ProductDetail>
      },
      {
        path: "/shoes/1",
        element: <ProductPage></ProductPage>
      },
      {
        path: "/shoes/purchase",
        element: <Payment></Payment>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  

);

