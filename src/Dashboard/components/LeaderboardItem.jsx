import React from "react";
import { FaUser } from "react-icons/fa";

const LeaderboardItem = ({ position, name, score }) => {
  return (
    <div className="item">
      <div className="left">
        <div className="pos">{position}</div>
        <div className="pic">
          <FaUser />
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="score">{score} points</div>
    </div>
  );
};

export default LeaderboardItem;
