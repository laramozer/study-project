import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    // se o etxto for vazio, nao faz nada//
    if (inputValue.trim() === "") return;
    // cria um novo array com as tasks antigas + a nova//
    setTaskList([...taskList, { text: inputValue, completed: false }]);

    //limpar o input//
    setInputValue("");
  }

  function deleteTask(taskIndex) {
    const newTaskList = taskList.filter((task, index) => {
      return index != taskIndex;
    });

    setTaskList(newTaskList);
  }

  function toggleTaskCompleted(indexClicked) {
    const taskCompleted = taskList.map((task, index) => {
      if (index === indexClicked)
        return {
          ...task,
          completed: !task.completed,
        };

      return task;
    });

    setTaskList(taskCompleted);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#2B2E83] to-[#4A1D6D] flex justify-center items-center">
      <div className="flex flex-col w-160 min-h-105 rounded-2xl py-6 px-10 bg-white gap-6">
        <h2>To-Do-List</h2>

        <div className="bg-[#edeff0] flex rounded-[26px]">
          <input
            placeholder="Write your task"
            className=" h-13 w-130 p-6 outline-none focus:0 "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button
            className="h-13 w-27.5 rounded-[26px] bg-[#ff5945] cursor-pointer"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {taskList.map((task, index) => (
            <div key={index} className="h-12 flex items-center justify-between">
              <div className="flex gap-8">
                <input
                  type="checkbox"
                  onChange={() => toggleTaskCompleted(index)}
                ></input>
                <p
                  className={task.completed ? "line-through text-gray-400" : ""}
                >
                  {task.text}
                </p>
              </div>

              <div>
                <button
                  className="cursor-pointer hover:bg-[#edeff0] rounded-full p-2"
                  onClick={() => deleteTask(index)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
