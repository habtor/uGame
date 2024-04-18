import { create } from "zustand";

const useNavBarFilter = create((set) => ({
  filter: "feed",
  setFilter: (filter) => set({ filter }),
}));

export default useNavBarFilter;
