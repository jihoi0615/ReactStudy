import { create } from "zustand";

export const useModalStore = create((set) => {
  return {
    modal: null,
    openModal: (modalElement) => {
      set({ modal: modalElement });
    },
    closeModal: () => {
      set({ modal: null });
    },
  };
});
