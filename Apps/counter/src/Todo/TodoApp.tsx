import { useState } from "react";
import Input from "./components/Input";
import TodoCard from "./components/TodoCard";

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (indexToDelete: number) => {
    const newtodos = todos.filter((_, index) => index != indexToDelete);
    setTodos(newtodos);
  };

  return (
    <div className="w-full">
      <div className="mx-auto bg-blue-100 w-[800px] rounded-xl p-6">
        <Input newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <TodoCard
              key={index}
              index={index}
              todo={todo}
              onDelete={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
