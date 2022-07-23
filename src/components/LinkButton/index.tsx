import { Link } from "react-router-dom";

interface ILinkButton {
  path: string;
  name: string;
}

export const LinkButton = ({ path, name }: ILinkButton) => {
  return (
    <Link
      to={path}
      className="block mt-6 w-[400px] mx-auto border-2 border-black text-center p-3 rounded-md hover:bg-black hover:text-white"
    >
      {name}
    </Link>
  );
};
