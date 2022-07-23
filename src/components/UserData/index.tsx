import { useDispatch, useSelector } from "react-redux";

import { IState } from "../../redux/store";
import { logout } from "../../redux/useSlice";

export const UserData = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  const user = useSelector((state: IState) => state.user);

  console.log(user);

  return (
    <div className="w-[400px] p-3 mx-auto mt-6 border-2 border-black rounded-md flex flex-col gap-3">
      <p>User: {user.name}</p>
      <p>Id: {user.id}</p>
      <p>Status: {user.isLogged === true ? "Logged" : "Please login"}</p>

      <button
        onClick={handleLogout}
        className="border-[1px] border-transparent bg-black hover:border-black hover:bg-white text-white hover:text-black p-3 w-full rounded-md"
      >
        Logout
      </button>
    </div>
  );
};
