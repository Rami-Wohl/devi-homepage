import { type ComponentType } from "react";
import { redirect } from "~/i18n/routing";
import { getServerAuthSession } from "~/server/auth";

interface PageParams {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export function withAuth(Component: ComponentType<PageParams>) {
  const AuthenticatedComponent = async (props: PageParams) => {
    const session = await getServerAuthSession();

    if (!session) {
      redirect("/login");
      return null;
    }

    return <Component {...props} />;
  };

  // Set a more readable display name for debugging in React DevTools
  AuthenticatedComponent.displayName = `WithAuth(${Component.displayName ?? Component.name ?? "Component"})`;

  return AuthenticatedComponent;
}
