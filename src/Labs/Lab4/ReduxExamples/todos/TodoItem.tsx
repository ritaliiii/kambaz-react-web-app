import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo, }: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
    return (
      <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span>{todo.title}</span>
            <div>
                <button onClick={() => dispatch(setTodo(todo))} className="btn btn-primary btn-sm me-2" id="wd-set-todo-click">
                    Edit
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))} className="btn btn-danger btn-sm" id="wd-delete-todo-click">
                    Delete
                </button>
            </div>
        </li>);}