import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFuction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFuction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import TodoList from "./todos/TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import Styles from "./Styles.tsx";
import Add from "./Add";
import Square from "./Square.tsx";
import Highlight from "./Highlight.tsx";
import AddPathParameters from "./AddPathParameters.tsx";
import PathParameters from "./PathParameters.tsx";
import { useSelector } from "react-redux";

export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
    console.log('Hello World!');
    return (
      <div id="wd-lab3" className="container">
        <h3>Lab 3</h3>
        <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
          ))}
        </ul>
        <hr />
        <VariablesAndConstants/>
        <BooleanVariables/>
        <IfElse/>
        <TernaryOperator/>
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>
        <LegacyFunctions/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <TemplateLiterals/>
        <SimpleArrays/>
        <ArrayIndexAndLength/>
        <ForLoops/>
        <MapFunction/>
        <FindFunction/>
        <FindIndex/>
        <FilterFunction/>
        <JsonStringify/>
        <House/>
        <TodoList/>
        <Spreading/>
        <Destructing/>
        <FunctionDestructing/>
        <DestructingImports/>
        <Classes/>
        <Styles/>
        <Add a={3} b={4} />
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
        </Highlight>
        <PathParameters />
        <AddPathParameters />
      </div>
  );}