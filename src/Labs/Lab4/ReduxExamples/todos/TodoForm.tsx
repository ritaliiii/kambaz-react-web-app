import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(
  ) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <div className="d-flex gap-2">
            <input
                type="text"
                className="form-control"
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                placeholder="Enter task..."
            />
            <button onClick={() => dispatch(addTodo(todo))} className="btn btn-success" id="wd-add-todo-click">
                Add
            </button>
            <button onClick={() => dispatch(updateTodo(todo))} className="btn btn-warning" id="wd-update-todo-click">
                Update
            </button>
        </div>
  );}