import { LoginForm } from "~/components/form/login-form";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="space-y-12 rounded-xl px-8 pb-8 pt-12 sm:bg-white sm:shadow-xl">
        <h1 className="text-2xl font-semibold">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
