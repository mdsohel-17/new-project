import Dufflebag from "../components/Dufflebag";
import LaptopBag from "../components/laptop bag/LaptopBag";
import Leatherbag from "../components/Leatherbag";
import Officebag from "../components/Officebag";
import Schoolbag from "../components/Schoolbag";
import Trackingbag from "../components/Trackingbag";
import GenericProductPage from "../GenericComponent/GenericProductPage";
import LandingPage from "../Screens/LandingPage";

export const ROUTE_PATH = [
  { path: "/", component: LandingPage },
  { path: "/laptop-bag", component: LaptopBag },
  { path: "/product-laptop-bag", component: GenericProductPage },
  { path: "/leather-bag", component: Leatherbag },
  { path: "/tracking-bag", component: Trackingbag },
  { path: "/office-bag", component: Officebag },
  { path: "/school-bag", component: Schoolbag },
  { path: "/duffle-bag", component: Dufflebag },
];
