import { AiOutlineBgColors } from "react-icons/ai";
import { FaAirFreshener } from "react-icons/fa";
import { SiGooglebigquery } from "react-icons/si";

export const SortOptions = [
    {
        name: "Size",
        desc: "Sort by size of the fruit",
        value: "size",
        button: SiGooglebigquery
    },
    {
        name: "Color",
        desc: "Sort by color of the fruit",
        value: "color",
        button: AiOutlineBgColors
    },
    {
        name: "Freshness",
        desc: "Sort by freshness of the fruit",
        value: "freshness",
        button: FaAirFreshener
    }
    // bypass mode can be added here
]
