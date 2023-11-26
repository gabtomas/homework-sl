import create from "zustand";

const useLoginStore = create((set) => ({
    //const with id of currently logged user, would be replaced by server
    currentlyLoggedUser: "65623505c762eedb195f025d",

    users: [
        {
            id: "65623505c762eedb195f025d",
            name: "Petr",
            email: "petr@gmail.com",
        },
        {
            id: "6562350ff983d58c4b334f7e",
            name: "David",
            email: "David@gmail.com",
        },
        {
            id: "65623514ef85fe74ef681090",
            name: "Karel",
            email: "karel@gmail.com",
        },
    ],

    //get info about currently logged user with const currentlyLoggedUser
    getLoginInfo: () => {
        return useLoginStore
            .getState()
            .users.find(
                (user) =>
                    user.id === useLoginStore.getState().currentlyLoggedUser
            );
    },

    //function to get getCurrentlyLoggedUserId
    getCurrentlyLoggedUserId: () => {
        return useLoginStore.getState().currentlyLoggedUser;
    },
}));

export default useLoginStore;
