//This is class based component

import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count:0
        }


    }

    

    render(){
        return(
            <div className="user-card">
                <h3>User : {this.props.name}</h3>
                <h5>Contact: +916304410194</h5>
                <h5>Count : {this.state.count}</h5>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment</button>
                <UserContext.Consumer>
                    {({loggedIn})=><h1> pretty {loggedIn}</h1>

                    }
                </UserContext.Consumer>
            </div>
        );
    }

}

export default UserClass;