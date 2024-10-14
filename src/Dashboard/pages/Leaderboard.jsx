import { React } from "react";
import Sidebar from "../components/Sidebar";
import LeaderboardItem from "../components/LeaderboardItem";
import "../css/Leaderboard.css";

const Leaderboard = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2 className="leaderboard-heading">Leaderboard</h2>
        <div className="center">
          <div className="list">
            <LeaderboardItem position={1} name="Alex" score={78} />
            <LeaderboardItem position={2} name="Amrit" score={65} />
            <LeaderboardItem position={3} name="Erwin" score={60} />
            <LeaderboardItem position={4} name="Manthan" score={50} />
            <LeaderboardItem position={5} name="Eren" score={48} />
            <LeaderboardItem position={6} name="Levi" score={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
