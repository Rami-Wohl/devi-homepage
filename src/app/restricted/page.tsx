import { getServerAuthSession } from "~/server/auth";
import { withAuth } from "../../components/auth/with-auth";

async function RestrictedPage() {
  const session = await getServerAuthSession();
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-fontPrimary font-mono text-sm uppercase">
            {"////under construction////"}
          </p>
          <p className="text-fontPrimary text-center text-2xl">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withAuth(RestrictedPage);
