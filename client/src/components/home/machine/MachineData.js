import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

export const fruitStats = [
    {
        name: "Total",
        id:'total',
        button: MdOutlineAccountBalanceWallet,
    },
    {
        id: "fresh",
        name: "Fresh Apple",
        button: RiNumber1,
    },
    {
        id: "rotten",
        name: "Rotten Apple",
        button: RiNumber2,
    },
    // {
    //     name: "Green Apple",
    //     button: RiNumber3,
    // }
]