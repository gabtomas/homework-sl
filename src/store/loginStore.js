import create from "zustand";

const useLoginStore = create((set) => ({
    role: "owner", // "owner" or "member"

    getRole: () => {
        return useLoginStore.getState().role;
    },

    //swtich role between "owner" and "member"
    switchRole: () => {
        const role = useLoginStore.getState().role;
        if (role === "owner") {
            set({ role: "member" });
        } else {
            set({ role: "owner" });
        }
    },
}));

export default useLoginStore;
