import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  console.log(session);

  return <div>Hello World</div>;
};

export default Header;
