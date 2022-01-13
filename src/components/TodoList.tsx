import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import todoVar from "../stores/todo";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const todos = useReactiveVar(todoVar);
  return (
    <section>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={`todo_${todo.id}`} />
      ))}
    </section>
  );
};

export default TodoList;
