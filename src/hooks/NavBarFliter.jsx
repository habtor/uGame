import { create } from "zustand";

const useNavBarFilter = create((set) => ({
  filter: "MyGames",
  setFilter: (filter) => set({ filter }),
}));

export default useNavBarFilter;
