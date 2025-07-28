import React from "react";

interface SubmitButtonProps {
  addTodo: () => void;
}

const SubmitButton = ({ addTodo }: SubmitButtonProps) => {
  return (
    <button
      className="h-14 w-20 flex justify-center items-center bg-green-300 rounded-xl hover:cursor-pointer hover:bg-green-200"
      onClick={addTodo}
    >
      <p className="">Submit</p>
    </button>
  );
};

export default SubmitButton;
