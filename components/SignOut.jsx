import { handleSignOut } from "@/actions";

const SignOut = () => {
  return (
    <>
      <form action={handleSignOut}>
        <button className="p-3 rounded-md bg-blue-500 text-white" type="submit">
          Sign Out
        </button>
      </form>
    </>
  );
};

export default SignOut;
