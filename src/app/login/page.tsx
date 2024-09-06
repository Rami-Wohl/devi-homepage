"use client";

import { Suspense } from "react";
import { LoginForm } from "~/_components/form/login-form";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
      <div className="space-y-12 rounded-xl px-8 pb-8 pt-12 sm:bg-white sm:shadow-xl">
        <h1 className="text-2xl font-semibold">Login</h1>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
