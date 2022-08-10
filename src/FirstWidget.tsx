import { ReactElement, createElement } from "react";
import "./ui/FirstWidget.css";

export const FirstWidget = (props: any): ReactElement => {
    // CHECK FOR WHAT THEY CONTAIN
    // alert(Object.keys(props));
    // alert(Object.keys(props.attribute));
    // alert(Object.keys(props.action));

    const handleChange = event => {
        // Here, we invoke the callback with the new value
        props.attribute.setValue(event.target.value);
        // MORE AVAILABLE METHODS
        // props.attribute.setTextValue(`'buggerall'`);
        // props.attribute.displayValue(`'buggerall'`);
    };

    const handleKeyDown = event => {
        // Handle pressing Enter Key
        if (event.which === 13 && props.action.canExecute) {
            props.action.execute();
        }
    };

    return (
        <input
            className={`form-control ${props.class}`}
            type={"text"}
            value={props.attribute.value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        ></input>
    );
};
