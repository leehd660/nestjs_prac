export type CatType = {
    id: string;
    name: string;
    age: number;
    species: string;
    isCute: boolean;
    friends: string[];
};

export const Cat: CatType[] = [
    {
        id: "eqionol",
        name: "blue",
        age: 5,
        species: "A",
        isCute: true,
        friends: ["red", "yellow"],
    },
    {
        id: "ewlmm",
        name: "yellow",
        age: 7,
        species: "B",
        isCute: false,
        friends: ["red"],
    },
    {
        id: "nmmen",
        name: "red",
        age: 9,
        species: "C",
        isCute: true,
        friends: ["blue"],
    },
];
