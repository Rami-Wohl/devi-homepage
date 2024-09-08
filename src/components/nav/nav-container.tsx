"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import useComponentVisible from "~/hooks/use-component-visible";
import AccountIcon from "../icons/account-icon";
import BurgerMenuIcon from "../icons/burgermenu-icon";
import LogoutIcon from "../icons/logout-icon";
import { Link, type Locale, usePathname, useRouter } from "~/i18n/routing";
import { I18nToggle } from "../ui/i18n-toggle";
import { useTranslations } from "next-intl";

const routes = {
  main: "/",
  about: "/about",
  prices: "/prices",
  portfolio: "/portfolio",
  studio: "/studio",
  contact: "/contact",
  restricted: "/restricted",
  login: "/login",
};

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} className="w-full">
      <div className="text-fontPrimary w-full cursor-pointer py-4 text-center font-sans text-[1.1rem] tracking-[0.3rem] text-opacity-60 no-underline opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100">
        {title}
      </div>
    </Link>
  );
};

const NavComponents = ({
  loggedIn,
  locale,
}: {
  loggedIn: boolean;
  locale: Locale;
}) => {
  const {
    ref: mobileMenuRef,
    handlerRef: mobileMenuHandlerRef,
    isComponentVisible: isMobileMenuVisible,
    setIsComponentVisible: setMobileMenuVisible,
  } = useComponentVisible(false);

  const router = useRouter();
  const path = usePathname();
  const t = useTranslations("navigation");

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  return (
    <>
      <div>
        <nav
          ref={mobileMenuRef}
          className={`bg-secondary fixed left-0 top-0 z-[2] flex h-[calc(100%-55px)] flex-col items-center justify-between border-y border-r border-white border-opacity-10 text-left lg:bg-opacity-20 ${
            isMobileMenuVisible ? "translate-x-0" : "-translate-x-full"
          } h-screen w-full pt-[55px] transition-transform duration-500 ease-in-out lg:w-80`}
        >
          <span />
          <div className="w-full">
            <NavLink href={routes.main} title={t("home")} />
            <NavLink href={routes.about} title={t("about")} />
            <NavLink href={routes.prices} title={t("prices")} />
            <NavLink href={routes.portfolio} title={t("portfolio")} />
            <NavLink href={routes.studio} title={t("studio")} />
            <NavLink href={routes.contact} title={t("contact")} />
          </div>
          <div className="w-full">
            <NavLink href={routes.login} title="Login" />
          </div>
        </nav>
        <div
          className={`absolute z-[2] w-full transition-transform duration-500 ease-in-out`}
        >
          <div className="bg-primary relative flex h-[55px] flex-wrap items-center justify-center bg-opacity-30 px-4 py-1">
            <div ref={mobileMenuHandlerRef}>
              <button
                className="z-10 mr-auto flex h-10 w-10 scale-75 cursor-pointer flex-col justify-around border-none bg-transparent p-0 focus:outline-none"
                onClick={() => {
                  setMobileMenuVisible(!isMobileMenuVisible);
                }}
              >
                <BurgerMenuIcon stroke={"#b1b1b1"} height={40} width={40} />{" "}
              </button>
            </div>
            <div className="fixed hidden flex-wrap items-center justify-center md:flex">
              <h2 className="text-fontSecondary flex flex-row gap-4 font-sans text-base font-bold uppercase">
                <span className="text">D e v i</span>
                <span className="text">H i s g e n</span>
                <span className="text">A u d i o</span>
              </h2>
            </div>
            <div className="ml-auto flex flex-row items-center">
              <I18nToggle locale={locale} path={path} />
              {loggedIn ? (
                <>
                  <button
                    className="flex h-10 w-10 flex-col items-center justify-center rounded-full hover:bg-white hover:bg-opacity-5"
                    onClick={() => {
                      router.push(routes.restricted);
                    }}
                  >
                    <AccountIcon
                      stroke={"#b1b1b1"}
                      fill={"#b1b1b1"}
                      height={24}
                      width={24}
                    />
                  </button>
                  <button
                    className="flex h-10 w-10 flex-col items-center justify-center rounded-full hover:bg-white hover:bg-opacity-5"
                    onClick={() =>
                      signOut({
                        callbackUrl: routes.login,
                      })
                    }
                  >
                    <LogoutIcon
                      stroke={"#b1b1b1"}
                      fill={"#b1b1b1"}
                      height={24}
                      width={24}
                    />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavComponents;
