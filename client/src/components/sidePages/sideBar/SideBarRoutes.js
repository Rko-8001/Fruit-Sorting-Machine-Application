import { HiOutlineHome, HiOutlineLogout } from "react-icons/hi";
import { ImStatsBars } from "react-icons/im";
import { VscVmRunning } from "react-icons/vsc";

export const SideBarOptions = [
    {
        name: 'Dashboard',
        button: HiOutlineHome,
        path: '/home'
    },
    {
        name: 'Statistics',
        button: ImStatsBars,
        path: '/home'
    },
    {
        name: 'User Guide',
        button: VscVmRunning,
        path: '/home'
    },
    {
        name: 'Logout',
        button: HiOutlineLogout,
        path: '/'
    }
]