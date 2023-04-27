import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscPreview } from "react-icons/vsc";
import MyNavitem from "./MyNavitem";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ children }) => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const item = {
    title: "Advance",
    icon: "bi-view-list",
    childrens: [
      {
        title: "Search",
        path: "/search",
      },
      {
        title: "History",
        path: "/history",
      },
    ],
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // return components
  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container">
          <motion.div
            animate={{
              width: showSidebar ? "270px" : "0px",
              height: "100vh",
            }}
            className={`sidebar `}
          >
            <div className="top_section">
              <h2 className="py-8 px-6 w-full border-2 border-blue-500 font-bold rounded-sm text-center bg-tailtertiary3 text-black flex">
                Delivery Dashboard
              </h2>
            </div>

            {/* Home and Logout button */}
            <div>
              <div className="flex justify-center px-2 text-black font-bold">
                <button
                  className=" bg-tailtertiary py-2 hover:bg-tailtertiary3 w-full rounded-sm"
                  onClick={() => navigate("/profile")}
                >
                  PROFILE
                </button>
                <button
                  className="ml-2 py-2 bg-tailtertiary hover:bg-red-600 w-full rounded-sm"
                  onClick={() => navigate("/logout")}
                >
                  LOGOUT
                </button>
              </div>
            </div>

            {/* routes */}
            <section className="routes">
              <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
                View Menu
              </h2>
              <MyNavitem
                path="/orderqueue"
                routename="View Order Queue"
                icon={<VscPreview />}
              />
            </section>
          </motion.div>

          <div className="toggle-sidebar">
            <button onClick={toggleSidebar}>
              {showSidebar ? "Close" : "Open"}
            </button>
          </div>

          <main
            className={`main-content ${showSidebar ? "sidebar-open" : ""}`}
          >
            {children}
          </main>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;
