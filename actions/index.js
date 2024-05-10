"use server";

import { signIn, signOut } from "@/auth";

export const handleSignOut = async () => {
  await signOut();
};

export const handleGoogleAuth = async () => {
  await signIn("google", { callbackUrl: "http://localhost:3000/" });
};
