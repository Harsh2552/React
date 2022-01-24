import React from "react";
function Home(props){
    return(
        <div>
            <h1 className="function"></h1>
            <h2>hey All {props.technology}</h2>
        </div>
    )
}
export default Home;