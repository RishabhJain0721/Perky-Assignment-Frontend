import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const navigate = useNavigate();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 active:bg-blue-800 text-white rounded-md py-2 px-4 mt-4 "
      onClick={() => navigate(props.navigation)}
    >
      {props.value}
    </button>
  );
}
