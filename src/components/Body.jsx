import RestaurantCard from "./RestaurantCard";
//import restobj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CardWithPromoted } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [resList, setReslist] = useState([]);
  const [searchText,setSearchText]=useState("");
  const[filteredRes, setFilteredRes]=useState([]);

  const RestaurantPromoted = CardWithPromoted(RestaurantCard);
  const {loggedIn, setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.443768730829305&lng=78.37504136480246&page_type=DESKTOP_WEB_LISTING"
    );

    const ListofRes = await data.json();
    console.log(
      ListofRes?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setReslist(
      ListofRes?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(ListofRes?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus=useOnlineStatus();

  if(onlineStatus === false){
    return <h1>Please check you internet connection !!!</h1>
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="search flex m-3 p-4 justify-between">
        <div className="flex m-4">
        <input
          className="inp block uppercase tracking-wide text-gray-700 text-xs font-bold  w-[300px] mx-4"
          placeholder="search for restaurants or dishes...."
          value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}
        />
        <button className="searchbtn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>{
            setFilteredRes(resList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())));
        }}>search</button>
        </div>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold px-4 rounded-full h-[55px]"
          onClick={() => {
            setFilteredRes(resList.filter((res) => res.info.avgRating > 4));
          }}
        >
          Top Restaurants💕
        </button>
        <lable className="m-5">User : </lable>
        <input value={loggedIn} onChange={(e)=> setUserName(e.target.value)}></input>
      </div>
      <div className="resto-container flex flex-wrap">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={"/restaurants/"+res.info.id}>
            { res.info.promoted ? <RestaurantPromoted resData={res}/> :

            <RestaurantCard resData={res} />}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
