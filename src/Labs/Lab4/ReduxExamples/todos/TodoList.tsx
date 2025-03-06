import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
    return (
      <div className="container mt-4">
      <h2 className="mb-3">Todo List</h2>
      <div className="card p-3 shadow-sm">
          <TodoForm />
          <ul className="list-group mt-2">
              {todos.map((todo: any) => (
                  <TodoItem todo={todo}/>
              ))}
          </ul>
      </div>
      </div>
      );
    }