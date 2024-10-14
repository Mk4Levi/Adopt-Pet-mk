import { React } from "react";
import Sidebar from "../components/Sidebar";
import TaskItem from "../components/TaskItem";
import "../css/Task.css";

const Task = () => {
  return (
    <div className="page-container task">
      <Sidebar />
      <div className="page-content">
        <h2>TASKS</h2>
        <div className="center">
          <div className="task-list">
            <div className="row heading">
              <div className="desc desc-center">Description</div>
              <div className="deadline deadline-center">Deadline</div>
              <div className="action-btn-center">Actions</div>
              <div className="points points-center">Points</div>
            </div>
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <TaskItem
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              deadline={"00-00-0000"}
              points={10}
            />
            <div className="row heading">
              <div className="desc  desc-bottom">Total Points</div>

              <div className="points points-bottom">000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
