import React from "react";
class Homeclass extends React.Component{
    render(props){
        return(
            <div>
                <h1 className="class" >hey guys {this.props.techclass}</h1>
                
            </div>
        )
    }
}
export default Homeclass;