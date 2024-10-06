"use client";

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import AccountIcon from "../icons/account-icon";
import BurgerMenuIcon from "../icons/burgermenu-icon";
import LogoutIcon from "../icons/logout-icon";
import { type Locale, usePathname, useRouter } from "~/i18n/routing";
import { I18nToggle } from "../ui/i18n-toggle";
import { useTranslations } from "next-intl";
import useScrollPosition from "~/hooks/use-scroll-position";
import { NavLink } from "./nav-link";
import { useNavContext } from "~/context/nav-context";

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

const NavComponents = ({ locale }: { locale: Locale }) => {
  const {
    mobileMenuRef,
    mobileMenuHandlerRef,
    isMobileMenuVisible,
    setMobileMenuVisible,
  } = useNavContext();

  const router = useRouter();
  const path = usePathname();
  const t = useTranslations("navigation");

  const { status } = useSession();

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  const { isOnTop } = useScrollPosition();

  return (
    <div>
      <nav
        ref={mobileMenuRef}
        className={`fixed left-0 top-0 z-[2] flex h-[calc(100%-55px)] flex-col items-center justify-between border-y border-r border-white border-opacity-10 bg-secondary text-left lg:bg-opacity-20 ${
          isMobileMenuVisible ? "translate-x-0" : "-translate-x-full"
        } min-h-full w-full pt-[55px] transition-transform duration-500 ease-in-out lg:w-80`}
      >
        <span />
        <div className="w-full">
          <NavLink
            href={routes.main}
            title={t("home")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.about}
            title={t("about")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.prices}
            title={t("prices")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.portfolio}
            title={t("portfolio")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.studio}
            title={t("studio")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
          <NavLink
            href={routes.contact}
            title={t("contact")}
            closeMenu={() => setMobileMenuVisible(false)}
          />
        </div>
        <div className="w-full">
          <NavLink
            href={routes.login}
            title="Login"
            closeMenu={() => setMobileMenuVisible(false)}
          />
        </div>
      </nav>
      <div
        className={`fixed z-[2] w-full transition-transform duration-500 ease-in-out`}
      >
        <div
          className={`relative flex h-[55px] flex-wrap items-center justify-center bg-primary px-4 py-1 ${isOnTop ? "bg-opacity-30" : "bg-opacity-100"}`}
        >
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
          <div className="absolute hidden flex-wrap items-center justify-center md:flex">
            <h2 className="flex flex-row gap-4 font-sans text-base font-bold uppercase text-fontSecondary">
              <span className="text">D e v i</span>
              <span className="text">H i s g e n</span>
              <span className="text">A u d i o</span>
            </h2>
          </div>
          <div className="ml-auto flex flex-row items-center">
            <I18nToggle locale={locale} path={path} />
            {status === "authenticated" ? (
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
                      callbackUrl: `/${locale}${path}`,
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
  );
};

export default NavComponents;
