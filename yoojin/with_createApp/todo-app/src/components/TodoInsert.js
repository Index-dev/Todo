import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./../css/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(
    e => {
      onInsert(value);
      setValue(""); // value 초기화
      e.preventDefault(); // 안쓰고 싶다 ;;
    },
    [onInsert, value]
  );
  return (
    //   form은 submit으로 처리해먹음
    <form className="TodoInsert">
      <input
        placeholder="What's up for Today?"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
