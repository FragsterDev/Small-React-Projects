import React from "react";
import DeleteButton from "./DeleteButton";

interface TodoCardProps {
  index: number;
  todo: string;
  onDelete: (index: number) => void;
}

const TodoCard = ({ index, todo, onDelete }: TodoCardProps) => {
  return (
    <div className="flex gap-4 items-center mb-4">
      <div className="bg-white rounded-xl w-xl h-14 p-4">
        <p>{todo}</p>
      </div>
      <DeleteButton onClick={() => onDelete(index)} />
    </div>
  );
};

export default TodoCard;
