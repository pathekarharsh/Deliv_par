import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar";
import UpdateProfile from "./pages/UpdateProfile";
import OrderQueue from "./pages/OrderQueue/OrderQueue";
import OrderDetails from "./pages/OrderQueue/OrderDetails";
import DeliveryAddress from "./pages/OrderQueue/DeliveryAddress";

Modal.setAppElement("#root");

function App() {

  return (
    <div className="flex font-poppins">
      <Router>
        <Routes>
          <Route exact path="/" element={<SideBar />}>
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="profile/updateprofile" element={<UpdateProfile />} />
            <Route exact path="/orderqueue" element={<OrderQueue />} />
            <Route exact path="/orderqueue/orderdetails" element={<OrderDetails />} />
            <Route exact path="/orderqueue/orderdetails/deliveryaddress" element={<DeliveryAddress />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
