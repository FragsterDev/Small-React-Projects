import SubmitButton from "./SubmitButton";

interface InputProps {
  newTodo: string,
  setNewTodo: React.Dispatch<React.SetStateAction<string>>,
  addTodo: () => void
}

const Input = ({newTodo, setNewTodo, addTodo} : InputProps) => {
  return (
    <div className="flex gap-4 mb-9">
      <input type="text" className="bg-white rounded-xl w-xl h-14 p-4" placeholder="Enter todo..." 
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      />
      <SubmitButton addTodo={addTodo}/>
    </div>
  );
};

export default Input;
