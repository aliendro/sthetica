import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface ContextState {
  state: boolean;
  style: string;
  open: () => void;
  close: () => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext({} as ContextState);

export default function MenuProvider({ children }: MenuProviderProps) {
  const menu =
    'fixed flex transform duration-500 bg-opacity-95 flex-col justify-center items-center transition-all top-0 w-full md:w-1/4 h-full bg-black text-white z-10 opacity-100 text-white';

  const [state, setState] = useState<boolean>(false);
  const style = state ? `${menu} transform-none` : `${menu} -translate-x-full`;

  const open = () => {
    setTimeout(() => {
      setState(true);
    }, 75);
  };

  const close = () => {
    setTimeout(() => {
      setState(false);
    }, 75);
  };

  const memoizedValue = useMemo(
    () => ({
      state,
      style,
      open,
      close,
    }),
    [state, style, open, close],
  );

  return <MenuContext.Provider value={memoizedValue}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const ctx = useContext(MenuContext);
  const { state, style, open, close } = ctx;
  return { state, style, open, close };
}
