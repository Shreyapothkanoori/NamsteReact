
import Header from "./components/Header";
import { Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState , useEffect} from "react";



const App = () => {
  const[userName, setUserName ] = useState(null);

  const data= {
    loggedIn:"Shreya"
  }


  useEffect(()=>{
    setUserName(data.loggedIn);
  },[])
  
  return (
    <UserContext.Provider value={{loggedIn: userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

export default App;

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
