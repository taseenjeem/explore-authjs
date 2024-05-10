"use server";

import { signIn, signOut } from "@/auth";

export const handleSignOut = async () => {
  await signOut();
};

export const handleGoogleAuth = async () => {
  await signIn("google", { callbackUrl: "http://localhost:3000/" });
};

export const credentialLogin = async (formData) => {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
