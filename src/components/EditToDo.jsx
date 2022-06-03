import React from "react";
import { useNavigate } from "react-router-dom";

const EditToDo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>edit</button>
    </div>
  );
};

export default EditToDo;
