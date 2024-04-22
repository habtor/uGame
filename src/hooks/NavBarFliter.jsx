import { create } from "zustand";

const useNavBarFilter = create((set) => ({
  filter: "Games",
  setFilter: (filter) => set({ filter }),
}));

export default useNavBarFilter;
