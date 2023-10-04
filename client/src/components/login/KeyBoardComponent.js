import React from "react";
import Keyboard from "react-simple-keyboard";
import 'react-simple-keyboard/build/css/index.css';

export default function KeyBoardComponent( {input, setInput} ) {

    const [layout, setLayout] = React.useState("default");

    const handleChangeLayout = () => {   
        if(layout === "default") 
            setLayout("shift");
        else 
            setLayout("default")
    }

    const handleKeyPress = (button) => {
        if (button === "{shift}" || button === "{lock}") {
                handleChangeLayout();
                return;
        }

        if (button === "{enter}") 
            setInput(input + "\n");
        else if (button === "{bksp}") 
            setInput(input.substring(0, input.length - 1));
        else 
            setInput(input + button);
    }

    return(
    <>
        <Keyboard
            onKeyPress={handleKeyPress}
            layoutName={layout}
        />
    </>
  )
}
