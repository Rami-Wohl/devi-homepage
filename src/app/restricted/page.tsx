import { withAuth } from "../../_components/auth/with-auth";

function RestrictedPage() {
  return <div>Yay</div>;
}

export default withAuth(RestrictedPage);
