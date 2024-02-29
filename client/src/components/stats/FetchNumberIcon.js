import {
    RiNumber1,
    RiNumber2,
    RiNumber3,
    RiNumber4,
    RiNumber5,
} from "react-icons/ri";


export function giveNumberIcon(index) {
    switch (index) {
        case 0:
            return (<RiNumber1 className="w-6 h-auto font-bold text-3xl" />);
        case 1:
            return (<RiNumber2 className="w-6 h-auto font-bold text-3xl" />);
        case 2:
            return (<RiNumber3 className="w-6 h-auto font-bold text-3xl" />);
        case 3:
            return (<RiNumber4 className="w-6 h-auto font-bold text-3xl" />);
        case 4:
            return (<RiNumber5 className="w-6 h-auto font-bold text-3xl" />);
        default:
            return (<RiNumber1 className="w-6 h-auto font-bold text-3xl" />);
    }
}