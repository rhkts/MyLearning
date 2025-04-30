import { User } from "@supabase/supabase-js";
import { atom, useAtom } from "jotai";

const CurrentUserAtom = atom<User>();
export const useCurrentUserStore = () => {
  const [currentUser, setCurrentUser] = useAtom(CurrentUserAtom);

  return { currentUser, set: setCurrentUser };
};
