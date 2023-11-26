import create from "zustand";
import useLoginStore from "./loginStore";
const { getCurrentlyLoggedUserId } = useLoginStore;

const useDataStoreMultiple = create((set) => ({
    shoppingLists: [
        {
            id: 0,
            name: "Běžný nákup potravin 1",
            archived: false,
            owner: "65623505c762eedb195f025d",
            members: [
                {
                    id: "65623505c762eedb195f025d",
                    name: "Petr",
                },
                {
                    id: "65623505c762eedb195f025d",
                    name: "Jana",
                },
                {
                    id: "65623505c762eedb195f025d",
                    name: "Karel",
                },
                {
                    id: "65623505c762eedb195f025d",
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
        },
        {
            id: 1,
            name: "Běžný nákup potravin 2",
            archived: false,
            owner: "65623505c762eedb195f022x",

            members: [
                {
                    id: "65623505c762eedb195f025d",
                    name: "Petr",
                },
                {
                    id: "65623505c762eedb195f025d",
                    name: "Jana",
                },
                {
                    id: "65623505c762eedb195f025d",
                    name: "Karel",
                },
                {
                    id: "65623505c762eedb195f025d",
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
        },
        {
            id: 2,
            name: "Běžný nákup potravin 3",
            archived: true,
            owner: "65623505c762eedb195f025d",
            members: [
                {
                    id: "65623505c762eedb195f025d",
                    name: "Petr",
                },
                {
                    id: "65623505c762eedb195f025d",
                    name: "Jana",
                },
                {
                    id: "65623505c762eedb195f025d",
                    name: "Karel",
                },
                {
                    id: "65623505c762eedb195f025d",
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
        },
        {
            id: 3,
            name: "Cvičení jógy",
            archived: false,
            owner: "65623505c762eedb195f022x",
            members: [
                { id: "65623505c762eedb195f025d", name: "Kristýna" },
                { id: "65623505c762eedb195f025d", name: "Ondřej" },
                { id: "65623505c762eedb195f025d", name: "Alena" },
            ],
            items: [
                { id: 1, name: "Jógamatka", done: true },
                { id: 2, name: "Voda", done: false },
                { id: 3, name: "Pohodlné oblečení", done: true },
            ],
        },
        {
            id: 4,
            name: "Rodinný výlet",
            archived: true,
            owner: "65623505c762eedb195f022x",
            members: [
                { id: "65623505c762eedb195f025d", name: "Martin" },
                { id: "65623505c762eedb195f025d", name: "Zuzana" },
                { id: "65623505c762eedb195f025d", name: "Pavel" },
            ],
            items: [
                { id: 1, name: "Svačina", done: true },
                { id: 2, name: "Hračky", done: false },
                { id: 3, name: "Fotokamera", done: true },
                { id: 4, name: "Mapa", done: false },
            ],
        },

        {
            id: 5,
            name: "Weekend Picnic",
            archived: false,
            owner: "65623505c762eedb195f022x",
            members: [
                { id: "65623505c762eedb195f025d", name: "Ryan" },
                { id: "65623505c762eedb195f025d", name: "Emma" },
                { id: "65623505c762eedb195f025d", name: "Chris" },
            ],
            items: [
                { id: 1, name: "Picnic Blanket", done: true },
                { id: 2, name: "Sandwiches", done: false },
                { id: 3, name: "Frisbee", done: true },
                { id: 4, name: "Sunscreen", done: false },
            ],
        },
        {
            id: 6,
            name: "Výlet na hory",
            archived: true,
            owner: "65623505c762eedb195f022x",
            members: [
                { id: "65623505c762eedb195f025d", name: "Karolína" },
                { id: "65623505c762eedb195f025d", name: "Tomáš" },
                { id: "65623505c762eedb195f025d", name: "Veronika" },
            ],
            items: [
                { id: 1, name: "Bunda", done: true },
                { id: 2, name: "Termoska s čajem", done: false },
                { id: 3, name: "Fotokamera", done: true },
                { id: 4, name: "Mapa turistických tras", done: false },
            ],
        },
        {
            id: 7,
            name: "Kuchařský kurz",
            archived: false,
            owner: "65623505c762eedb195f022x",
            members: [
                { id: "65623505c762eedb195f025d", name: "Martin" },
                { id: "65623505c762eedb195f025d", name: "Lucie" },
                { id: "65623505c762eedb195f025d", name: "Jiří" },
            ],
            items: [
                { id: 1, name: "Potřebné suroviny", done: true },
                { id: 2, name: "Recepty", done: false },
                { id: 3, name: "Kuchařské náčiní", done: true },
            ],
        },
        {
            id: 8,
            name: "Procházka v parku",
            archived: false,
            owner: "65623505c762eedb195f022x",
            members: [
                { id: "65623505c762eedb195f025d", name: "Markéta" },
                { id: "65623505c762eedb195f025d", name: "Adam" },
                { id: "65623505c762eedb195f025d", name: "Johana" },
            ],
            items: [
                { id: 1, name: "Ovocný salát", done: true },
                { id: 2, name: "Kniha", done: false },
                { id: 3, name: "Piknikový koberec", done: true },
            ],
        },
        {
            id: 9,
            name: "Výlet na zámek",
            archived: true,
            owner: "65623505c762eedb195f025d",
            members: [
                { id: "65623505c762eedb195f025d", name: "Tereza" },
                { id: "65623505c762eedb195f025d", name: "Michal" },
                { id: "65623505c762eedb195f025d", name: "Šárka" },
            ],
            items: [
                { id: 1, name: "Fotoaparát", done: true },
                { id: 2, name: "Občerstvení", done: false },
                { id: 3, name: "Prohlídkový průvodce", done: true },
            ],
        },
    ],

    //fucntion which will create a new shopping list, input will be new list with all data
    createNewList: (newList) =>
        set((state) => ({
            shoppingLists: [...state.shoppingLists, newList],
        })),

    setNewShoppingListItem: (item) =>
        set((state) => ({
            newShoppingList: {
                ...state.newShoppingList,
                items: [...state.newShoppingList.items, item],
            },
        })),

    //add new item to shopping list
    addItem: (id, name) =>
        set((state) => ({
            shoppingLists: state.shoppingLists.map((list) => {
                if (list.id === id) {
                    return {
                        ...list,
                        items: [
                            ...list.items,
                            {
                                id: list.items.length + 1,
                                name,
                                done: false,
                            },
                        ],
                    };
                }
                return list;
            }),
        })),

    //get all shopping lists
    getShoppingLists: () => {
        const ownerId = getCurrentlyLoggedUserId();
        return useDataStoreMultiple
            .getState()
            .shoppingLists.filter((list) => list.owner.id === ownerId);
    },

    // get single shopping list by id and where owner is current user
    getShoppingList: (id) => {
        const objectID = getCurrentlyLoggedUserId();
        return useDataStoreMultiple
            .getState()
            .shoppingLists.filter(
                (list) => list.owner.id === objectID && list.id === id
            );
    },

    //create a new shopping list
    createShoppingList: (name) =>
        set((state) => ({
            shoppingLists: [
                ...state.shoppingLists,
                {
                    id: state.shoppingLists.length + 1,
                    name,
                },
            ],
        })),

    //detele method to delete single shopping list
    deleteShoppingList: (id) =>
        set((state) => ({
            shoppingLists: state.shoppingLists.filter((list) => list.id !== id),
        })),

    getArchivedShoppingLists: () => {
        return useDataStoreMultiple
            .getState()
            .shoppingLists.filter((list) => list.archived === true);
    },
}));

export default useDataStoreMultiple;
