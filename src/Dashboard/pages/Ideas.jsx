import { React, useState } from "react";
import Sidebar from "../components/Sidebar";
import IdeaItem from "../components/IdeaItem";
import { ShowToast } from "../../components";
import "../css/Ideas.css";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [ideaInput, setIdeaInput] = useState("");

  const handleIdeaSubmit = () => {
    if (ideaInput.trim() !== "") {
      setIdeas([...ideas, ideaInput]);
      setIdeaInput("");
      ShowToast("Idea added!");
    }
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h2>IDEAS</h2>
        <div className="ideas-container">
          <div className="idea-input">
            <textarea
              value={ideaInput}
              onChange={(e) => setIdeaInput(e.target.value)}
              placeholder="Type your idea here"
            />
            <button className="idea-sumbit-btn" onClick={handleIdeaSubmit}>
              Submit
            </button>
          </div>
          <h3>My Ideas:</h3>
          <div className="past-ideas">
            {ideas.map((idea, i) => (
              <IdeaItem
                key={i + 1}
                id={i + 1}
                description={idea}
                status="In Review"
              />
            ))}
            <IdeaItem
              id="eg1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit unde vero."
              status="In Review"
            />
            <IdeaItem
              id="eg2"
              description="Amet consectetur adipisicing elit unde dolor sit."
              status="In Review"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
