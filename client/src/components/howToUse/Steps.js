import { PiNumberCircleOneBold, PiNumberCircleTwoBold, PiNumberCircleThreeBold } from 'react-icons/pi';

export const Steps = [
    {
        name: "Select Sorting Category",
        description: "first select the category you want to sort by. there are 3 options : color, size, freshness. Once, selected category, press the next button.",
        button: PiNumberCircleOneBold,
    },
    {
        name: "Read the instructions",
        description: "Read the instructions on the screen and make sure your machine configuration is as per the instructions. Now press Let's Sort button.",
        button: PiNumberCircleTwoBold,
    },
    {
        name: "Start Sorting",
        description: "Now, you can start sorting by pressing the start button. You can also pause the sorting process by pressing the pause button.",
        button: PiNumberCircleThreeBold,
    }
]