import { auth } from "@/auth";
import Image from "next/image";

const Header = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      {session?.user ? (
        <div className="flex">
          <p>{session?.user?.name}</p> |
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      ) : (
        <p>Ask for login</p>
      )}
    </>
  );
};

export default Header;
