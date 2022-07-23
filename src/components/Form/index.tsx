import { useState } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "../../redux/useSlice";

export const Form = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(setUser({ name, id }));

    setName("");
    setId("");
  }

  return (
    <div className="w-[400px] p-3 mx-auto mt-10 border-2 border-black rounded-md flex flex-col gap-3">
      <input
        onChange={e => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="User name"
        className="border-[1px] border-black p-3 w-full rounded-md"
      />
      <input
        onChange={e => setId(e.target.value)}
        value={id}
        type="number"
        placeholder="User id"
        className="border-[1px] border-black p-3 w-full rounded-md"
      />
      <button
        onClick={handleLogin}
        className="border-[1px] border-transparent bg-black hover:border-black hover:bg-white text-white hover:text-black p-3 w-full rounded-md"
      >
        Login
      </button>
    </div>
  );
};
