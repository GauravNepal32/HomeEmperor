import React from "react";
import * as FontAwesome from "react-icons/fa";

const Icons = (props) => {
    const iconString = props.iconName;
    const beer = React.createElement(FontAwesome[iconString]);
    return (
        <div>
            <div>{beer}</div>
        </div>
    );
};

export default Icons;
