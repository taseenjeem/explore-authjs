import { handleGoogleAuth } from "@/actions";

const SignIn = () => {
  return (
    <>
      <form action={handleGoogleAuth}>
        <button type="submit" className="p-3 rounded-md bg-blue-500 text-white">
          Sign In with google
        </button>
      </form>
    </>
  );
};

export default SignIn;
