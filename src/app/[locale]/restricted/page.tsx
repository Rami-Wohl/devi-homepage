import { withAuth } from "../../../components/auth/with-auth";
import { MailSection } from "~/components/sections/mail/mails";
import { getServerSession } from "next-auth";

async function RestrictedPage() {
  const session = await getServerSession();

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <MailSection name={session?.user.name} />
    </div>
  );
}

export default withAuth(RestrictedPage);
