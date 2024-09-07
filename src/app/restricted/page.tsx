import { getServerAuthSession } from "~/server/auth";
import { withAuth } from "../../components/auth/with-auth";

async function RestrictedPage() {
  const session = await getServerAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="font-mono text-sm uppercase text-white">
              {"////under construction////"}
            </p>
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default withAuth(RestrictedPage);
