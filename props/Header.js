import React from 'react';

function Header(props) {
    console.log(props);
    //props.name="Ram"
    return (
        <h1>Hello Sanjeet {props.name}</h1>
    );
}

export default Header;
