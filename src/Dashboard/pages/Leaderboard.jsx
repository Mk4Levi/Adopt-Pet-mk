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
            <LeaderboardItem position={0} name="Name" score={0} />
            <LeaderboardItem position={0} name="Name" score={0} />
            <LeaderboardItem position={0} name="Name" score={0} />
            <LeaderboardItem position={0} name="Name" score={0} />
            <LeaderboardItem position={0} name="Name" score={0} />
            <LeaderboardItem position={0} name="Name" score={0} />
            <LeaderboardItem position={0} name="Name" score={0} />
            <LeaderboardItem position={0} name="Name" score={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
