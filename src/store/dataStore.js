import create from "zustand";

import useDataStoreMultiple from "./dataStoreMultiple";
import useLoginStore from "./loginStore";

const { getLoginInfo } = useLoginStore;

//get id of the list from url

const useDataStore = create((set, get) => ({
    shoppingList: {
        name: "",
        items: [],
        members: [],
        owner: "",
    },

    //get owner name from loginStore by id, id should be same is owner id in shopping list
    getOwnerName: (id) => {
        const ownerId = getLoginInfo("65623505c762eedb195f025d");
        const owner = useDataStoreMultiple
            .getState()
            .shoppingLists.filter((list) => list.owner === ownerId);
        return owner[0].owner.name;
    },

    //function to get get shopping list
    getShoppingList: () => {
        return useDataStore.getState().shoppingList;
    },

    selectObjectById: (id) => {
        const object = useDataStoreMultiple
            .getState()
            .shoppingLists.find((item) => item.id === id);
        set({ shoppingList: object });
    },

    //function to get items that have done property set to false
    getDoneItems: () => {
        return useDataStore
            .getState()
            .shoppingList.items.filter((item) => item.done);
    },

    //function for handling 'done' checkbox
    toggleItem: (itemId) => {
        set((state) => ({
            shoppingList: {
                ...state.shoppingList,
                items: state.shoppingList.items.map((item) =>
                    item.id === itemId ? { ...item, done: !item.done } : item
                ),
            },
        }));
    },

    //function to get owner name
    getOwnerName: () => {
        return useDataStore.getState().shoppingList.owner.name;
    },

    //function to change owner of the list from members array using dropdown
    changeOwner: (newOwnerName) => {
        set((state) => ({
            shoppingList: {
                ...state.shoppingList,
                owner: {
                    id: 1,
                    name: newOwnerName,
                },
            },
        }));
    },

    //function to change name of the list
    changeListName: (newName) => {
        set((state) => ({
            shoppingList: {
                ...state.shoppingList,
                name: newName,
            },
        }));
    },

    //function to get members array
    getMembers: () => {
        return useDataStore.getState().shoppingList.members;
    },

    //function to get members names
    getMembersNames: () => {
        return {
            id: 1,
            name: "Běžný nákup potravin",
            owner: {
                id: 1,
                name: "Igor",
            },
            members: [
                {
                    id: 1,
                    name: "Petr",
                },
                {
                    id: 2,
                    name: "Jana",
                },
                {
                    id: 3,
                    name: "Karel",
                },
                {
                    id: 4,
                    name: "Marie",
                },
            ],
            items: [
                {
                    id: 1,
                    name: "Mléko",
                    done: true,
                },
                {
                    id: 2,
                    name: "Chléb",
                    done: false,
                },
                {
                    id: 3,
                    name: "Máslo",
                    done: true,
                },
                {
                    id: 4,
                    name: "Kuřecí prsa",
                    done: true,
                },
                {
                    id: 5,
                    name: "Rýže",
                    done: false,
                },
                {
                    id: 6,
                    name: "Těstoviny",
                    done: true,
                },
            ],
        };
    },

    //function getListName
    getListName: () => {
        return useDataStore.getState().shoppingList.name;
    },

    //function to add new member to the list
    setMembers: (arrayOfNewStringNames) => {
        set((state) => ({
            shoppingList: {
                ...state.shoppingList,
                members: arrayOfNewStringNames.map((name) => ({
                    id:
                        Math.max(
                            ...state.shoppingList.members.map(
                                (member) => member.id
                            )
                        ) + 1,
                    name: name,
                })),
            },
        }));
    },

    //function to delete member from the list
    deleteMember: (memberId) => {
        set((state) => ({
            shoppingList: {
                ...state.shoppingList,
                members: state.shoppingList.members.filter(
                    (member) => member.id !== memberId
                ),
            },
        }));
    },

    deleteItem: (itemId) => {
        set((state) => ({
            shoppingList: {
                ...state.shoppingList,
                items: state.shoppingList.items.filter(
                    (item) => item.id !== itemId
                ),
            },
        }));
    },

    //delete whole object of shopping list
    deleteList: () => {
        set((state) => ({
            shoppingList: {},
        }));
    },

    //function to leave a list as a member
    leaveList: () => {
        set((state) => ({
            shoppingList: {
                ...state.shoppingList,
                members: state.shoppingList.members.filter(
                    (member) => member.id !== 1
                ),
            },
        }));
    },

    // Add new item to the list
    addItem: (itemName) => {
        set((state) => ({
            shoppingList: {
                ...state.shoppingList,
                items: [
                    ...state.shoppingList.items,
                    {
                        id:
                            Math.max(
                                ...state.shoppingList.items.map(
                                    (item) => item.id
                                )
                            ) + 1,
                        name: itemName,
                        done: false,
                    },
                ],
            },
        }));
    },
}));

export default useDataStore;
