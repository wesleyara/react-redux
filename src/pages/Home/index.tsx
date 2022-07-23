import { Form } from "../../components/Form";
import { LinkButton } from "../../components/LinkButton";
import { UserData } from "../../components/UserData";

export const Home = () => {
  return (
    <>
      <Form />
      <UserData />
      <LinkButton path="/user" name="User" />
    </>
  );
};
