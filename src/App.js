import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <h1>Smarter Tasks</h1>
      <div className="pending">
        <h1>Pending</h1>
        < TaskCard title="Studying" dueDate="01 Jan" assignee="Sachin"/>
        < TaskCard title="Boxing" dueDate="02 Jan" assignee="Sachin"/>
        < TaskCard title="Flexing" dueDate="03 Jan" assignee="Sachin"/>
      </div>
      <div className="done">
        <h1>Done</h1>
          < TaskCard title="Playing" completed="04 Jan" assignee="Sachin"/>
          < TaskCard title="Listening" completed="05 Jan" assignee="Sachin"/>
      </div>
    </div>
  );
}

export default App;