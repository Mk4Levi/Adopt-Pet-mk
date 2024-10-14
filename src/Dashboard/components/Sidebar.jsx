import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaBars, FaUser, FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdMessage, MdLeaderboard } from "react-icons/md";
import "../css/sidebar.css";

const routes = [
  {
    path: "/dashboard/profile",
    name: "Profile",
    icon: <FaUser />,
  },
  {
    path: "/dashboard/ideas",
    name: "Ideas",
    icon: <MdMessage />,
  },
  {
    path: "/dashboard/leaderboard",
    name: "Leaderboard",
    icon: <MdLeaderboard />,
  },
  {
    path: "/dashboard/task",
    name: "Task",
    icon: <FaTasks />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const [userData] = useState({
    image: <CgProfile />,
    username: "User@Name",
    points: "999",
    rank: 99,
    referral: "ABCD1234",
  });

  return (
    <div className="sidebar-container">
      <motion.div
        animate={{
          width: isOpen ? "240px" : "50px",
          transition: { duration: 0.5, type: "spring", damping: 9 },
        }}
        className="sidebar"
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                Manthan-MK
              </motion.h1>
            )}
          </AnimatePresence>

          <div className="bars">
            <FaBars onClick={toggleSidebar} />
          </div>
        </div>
        <div className="divider">
          <section className="routes">
            {routes.map((route, i) => {
              return (
                <NavLink
                  to={route.path}
                  key={i + 1}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>

          {isOpen && (
            <div className="bottom_section">
              <div className="info">
                <IconContext.Provider value={{ size: "5em" }}>
                  <span>{userData.image}</span>
                </IconContext.Provider>
                <b>{userData.name}</b>

                <span>
                  Points: <b>{userData.points ?? 0}</b>
                </span>
                <span>
                  Rank: <b>{userData.rank ?? "N/A"}</b>
                </span>
                <span>
                  Referral Code: <b>{userData.referral}</b>
                </span>
              </div>

              <div className="logout">
                <Link to="/" className="txt-btn">
                  <button className="Btn">
                    <div className="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>
                    <div className="text">Logout</div>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
