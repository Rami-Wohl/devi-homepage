import {
  createContext,
  useContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  type RefObject,
} from "react";
import useComponentVisible from "~/hooks/use-component-visible";

interface NavContextType {
  mobileMenuRef: RefObject<HTMLDivElement>;
  mobileMenuHandlerRef: RefObject<HTMLDivElement>;
  isMobileMenuVisible: boolean;
  setMobileMenuVisible: Dispatch<SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const {
    ref: mobileMenuRef,
    handlerRef: mobileMenuHandlerRef,
    isComponentVisible: isMobileMenuVisible,
    setIsComponentVisible: setMobileMenuVisible,
  } = useComponentVisible(false);

  return (
    <NavContext.Provider
      value={{
        mobileMenuRef,
        mobileMenuHandlerRef,
        isMobileMenuVisible,
        setMobileMenuVisible,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = (): NavContextType => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNavContext must be used within an NavProvider");
  }
  return context;
};
