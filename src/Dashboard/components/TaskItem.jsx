import TaskModal from "./TaskModal";

const TaskItem = ({ description, deadline, points }) => {
  return (
    <div className="row">
      <div className="desc">{description}</div>
      <div className="deadline">{deadline}</div>
      {/* <button className="action-btn">Action</button> */}
      <TaskModal />
      <div className="points">{points}</div>
    </div>
  );
};

export default TaskItem;
