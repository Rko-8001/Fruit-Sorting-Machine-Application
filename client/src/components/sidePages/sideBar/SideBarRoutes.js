import { HiOutlineHome, HiOutlineLogout } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { VscVmRunning } from "react-icons/vsc";
import { TbMessageQuestion } from "react-icons/tb";

export const SideBarOptions = [
    {
        name: 'Dashboard',
        button: HiOutlineHome,
        path: '/home'
    },
    {
        name: 'Statistics',
        button: ImStatsBars,
        path: '/stats'
    },
    {
        name: 'User Guide',
        button: VscVmRunning,
        path: '/howToUse'
    },
    {
        name: "FAQs",
        button: TbMessageQuestion,
        path: '/faq'
    },
    {
        name: 'Logout',
        button: HiOutlineLogout,
        path: '/'
    }
]