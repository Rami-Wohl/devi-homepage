import { getServerAuthSession } from "~/server/auth";
import { withAuth } from "../../../components/auth/with-auth";
import { UnderConstruction } from "~/components/content/under-construction";

async function RestrictedPage() {
  const session = await getServerAuthSession();
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <UnderConstruction />
          <p className="text-fontPrimary text-center text-2xl">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withAuth(RestrictedPage);
