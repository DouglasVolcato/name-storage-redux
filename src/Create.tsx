import { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "./features/names.slice";

export function Create() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function submit(event: any) {
    event.preventDefault();
    dispatch(addName(name));
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="NAME"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
