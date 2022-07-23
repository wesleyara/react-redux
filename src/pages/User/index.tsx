import { LinkButton } from "../../components/LinkButton";
import { UserData } from "../../components/UserData";

export const User = () => {
  return (
    <>
      <UserData />
      <LinkButton path="/" name="Home" />
    </>
  );
};
