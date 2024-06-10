import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";





const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>


        </div>
    )
}

//const heading = React.createElement("h1",{id:"heading"},"Namaste React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);











// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement(
//             "h1",
//             {id:"heading1"},
//             "I'm h1 tag"
//         ),
//         React.createElement(
//             "h1",
//             {id:"heading2"},
//             "I'm h2 tag"
//         )]
//     )
// );
// //To add sibblings, the content should be in an array.->3rd arg
// // const heading=React.createElement("h1",{id:"heading"},"Hello from React");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);