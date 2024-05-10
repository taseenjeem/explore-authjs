import { auth } from "@/auth";
import Image from "next/image";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Header = async () => {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <div className="flex justify-center items-center gap-2">
          <p>{session?.user?.name}</p> |
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <SignOut />
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Header;
