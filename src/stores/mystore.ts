import {writable} from "svelte/store";

interface Pro {
    name: string;
    img: string;
}

const pros: Pro[] = [{name: "Bobert", img: "/images/pro01.png"},
            {name: "Manfred", img: "/images/pro02.png"},
            {name: "Bicky", img: "/images/pro03.png"},
            {name: "Mohg", img: "/images/pro04.png"},
            {name: "Dav", img: "/images/pro05.png"},
            {name: "Billl", img: "/images/pro06.png"},
            {name: "Marv Melarv", img: "/images/pro07.png"},
            {name: "Gumby", img: "/images/pro08.png"}]

export const proslist = writable(pros);
