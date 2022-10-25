import React, { useEffect } from "react";

function Teste() {
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/hello");
      const data = await response.json();
      console.log("data", data);
    };
    fetchTodos();
  }, []);
  return <div>Hello Api!</div>;
}

export default Teste;
