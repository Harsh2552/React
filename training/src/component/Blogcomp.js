import React from "react";
class Blogcomp extends React.Component{
     render(){
         return(
             <div>
                 <h1>Blog</h1>
                 <h2>{this.props.pro}</h2>
             </div>
         )
     }    
}
export default Blogcomp;