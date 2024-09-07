"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import useComponentVisible from "~/hooks/use-component-visible";
import AccountIcon from "../icons/account-icon";
import BurgerMenuIcon from "../icons/burgermenu-icon";
import LogoutIcon from "../icons/logout-icon";

const routes = {
  main: "/",
  restricted: "/restricted",
  login: "/login",
};

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} className="w-full">
      <div className="w-full cursor-pointer py-4 text-center font-sans text-[1.1rem] tracking-[0.3rem] text-white text-opacity-60 no-underline opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100">
        {title}
      </div>
    </Link>
  );
};

const NavComponents = ({ loggedIn }: { loggedIn: boolean }) => {
  const {
    ref: mobileMenuRef,
    handlerRef: mobileMenuHandlerRef,
    isComponentVisible: isMobileMenuVisible,
    setIsComponentVisible: setMobileMenuVisible,
  } = useComponentVisible(false);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setMobileMenuVisible(false);
  }, [setMobileMenuVisible, path]);

  return (
    <>
      <div>
        <nav
          ref={mobileMenuRef}
          className={`fixed left-0 top-[55px] z-[2] flex h-[calc(100%-55px)] flex-col items-center border-y border-r border-white border-opacity-10 bg-black text-left ${
            isMobileMenuVisible ? "translate-x-0" : "-translate-x-full"
          } h-full w-full transition-transform duration-500 ease-in-out lg:w-1/4`}
        >
          <NavLink href={routes.main} title="Home" />
          <NavLink href={routes.login} title="Login" />
        </nav>
        <div
          className={`absolute z-[2] w-full transition-transform duration-500 ease-in-out`}
        >
          <div className="relative flex h-[55px] flex-wrap items-center justify-center bg-[#0a0a0a] px-4 py-1">
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
            <div className="fixed flex flex-wrap items-center justify-center">
              <h2 className="flex flex-row gap-6 font-sans text-xl font-thin uppercase text-white">
                <span className="text">D e v i</span>
                <span className="text">H i s g e n</span>
                <span className="text">A u d i o</span>
              </h2>
            </div>
            <div className="ml-auto flex flex-row items-center">
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
