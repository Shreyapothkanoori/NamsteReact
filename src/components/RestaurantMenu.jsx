
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    const {id}=useParams();
    const menuList = useRestaurantMenu(id);
    const[showIndex,setShowIndex] = useState();

    console.log(menuList);

 

    if(menuList === null){
        return(<Shimmer/>)
    }
    
    const {name,cuisines,costForTwoMessage}= menuList?.cards[2]?.card?.card?.info;

    
    //const{itemCards}=menuList?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories= menuList?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("categories", categories);

    return (
        <div className="text-center">
           <h2 className="font-bold text-lg my-4">{name} </h2>
           <h4>{cuisines.join(",")} - {costForTwoMessage}</h4>
           <div>
            {/* {itemCards.map((item)=>(
                
                    <div key={item.card.info.id} className="menuDisplay">
                        <h4  className="menuitem" >{item.card.info.name}</h4>
                        <h6 className="menuitem"> ${item.card.info.price}</h6>
                        <img className="menuImage" src={CDN_URL+"/"+(item.card.info.imageId)} alt={item.card.info.name}/>
                        
                    </div>
               
            ))} */}
            <div className="place-items-center">
            {categories.map((cat,index)=> 
            <RestaurantCategory 
            key={cat?.card?.card?.title} 
            data={cat}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}/>)}
            </div>
           </div>

        </div>
    )
}

export default RestaurantMenu;