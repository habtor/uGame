import { create } from "zustand";

const useNavBarFilter = create((set) => ({
  filter: "Home",
  setFilter: (filter) => set({ filter }),
}));

export default useNavBarFilter;
