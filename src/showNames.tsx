import { useSelector } from "react-redux";
import { RootState } from "./store/store";

export function ShowNames() {
  const names = useSelector((state: RootState) => state.names.value);

  return (
    <div className="showNames">
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}
