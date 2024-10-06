import { Link } from "~/i18n/routing";

export const NavLink = ({
  href,
  title,
  closeMenu,
}: {
  href: string;
  title: string;
  closeMenu: () => void;
}) => {
  function handleClick() {
    closeMenu();
  }

  return (
    <Link href={href} className="w-full">
      <div className="w-full cursor-pointer py-4 text-center font-sans text-[1.1rem] tracking-[0.3rem] text-fontPrimary text-opacity-60 no-underline opacity-90 hover:bg-white hover:bg-opacity-90 hover:text-black hover:text-opacity-100">
        <button onClick={handleClick}>{title}</button>
      </div>
    </Link>
  );
};
