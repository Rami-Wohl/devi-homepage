import { getServerAuthSession } from "~/server/auth";
import { withAuth } from "../../../components/auth/with-auth";
import { api } from "~/trpc/server";

async function RestrictedPage() {
  const session = await getServerAuthSession();

  const data = await api.message.getMessages();

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-fontPrimary">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <>Loading...</>}
        </div>
      </div>
    </div>
  );
}

export default withAuth(RestrictedPage);
