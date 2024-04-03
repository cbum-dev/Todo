import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="">
      <h1 className="text-xl md:text-4xl font-serif text-center py-4 mb-4 font-bold text-zinc-100 bg-gray-700">
        QuadB Technology Todo App
      </h1>
      <div className="flex flex-col bg-slate-200 md:flex-row justify-center items-center gap-x-8  px-4 py-6">
        <main className=" w-4/5 md:w-1/2 bg-zinc-950 rounded-xl  flex flex-col m-4 p-6 ">
          <TaskInput />
          <TaskList />
        </main>
      </div>
    </div>
  );
}

export default App;
