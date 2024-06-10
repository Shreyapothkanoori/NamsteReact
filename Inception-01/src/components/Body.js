import RestaurantCard from "./RestaurantCard";
//import restobj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setReslist] = useState([]);
  const [searchText,setSearchText]=useState("");
  const[filteredRes, setFilteredRes]=useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING"
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

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="inp"
          placeholder="search for restaurants or dishes...."
          value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}
        />
        <button className="searchbtn" onClick={()=>{
            setFilteredRes(resList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())));
        }}>search</button>
        <button
          className="searchbtn"
          onClick={() => {
            setFilteredRes(resList.filter((res) => res.info.avgRating > 4));
          }}
        >
          Top Restaurants💕
        </button>
      </div>
      <div className="resto-container">
        {filteredRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
