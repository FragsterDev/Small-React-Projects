import React from "react";

interface DeleteButtonProp {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: DeleteButtonProp) => {
  return (
    <button
      className="h-14 w-20 flex justify-center items-center bg-red-400 rounded-xl hover:cursor-pointer hover:bg-red-300"
      onClick={onClick}
    >
      <p className="text-white">Delete</p>
    </button>
  );
};

export default DeleteButton;
