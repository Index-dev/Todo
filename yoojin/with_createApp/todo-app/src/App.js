import React, { useReducer, useRef, useCallback } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
// 성능 최적화 test
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 4; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT": // 새로추가
      // {type: 'INSERT', todo:{id:1, text:'todo', checked:false}}
      return todos.concat(action.todo);
    case "REMOVE": // 제거
      // { type: 'REMOVE', id: 1}
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE": // 토글
      // { type: 'TOGGLE', id: 1}
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  // useReducer를 사용할때, 두번째 파라미터자리: 초기상태입력
  //세번째 파라미터 상태를 만들어주는 createBulkTodos
  //-> 첫 rendering에서만 component가 createBulkTodos를 호출한다.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  //id는 고유값임
  // ref를 사용하여 변수 담을것.
  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    dispatch({ type: "INSERT", todo });
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const onRemove = useCallback(id => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback(id => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <div className="App">
      <TodoTemplate>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <TodoInsert onInsert={onInsert} />
      </TodoTemplate>
    </div>
  );
};
export default App;
