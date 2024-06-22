import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) =>{

    const {name,areaName,cloudinaryImageId,costForTwo,avgRating} = props.resData.info;

    

    return(
        <div className="res-card  w-[250px] h-auto bg-gray-300 m-4">
            <img className="restimg  w-[250px] h-[280px] p-4" 
            src={CDN_URL+"/"+cloudinaryImageId}
            alt="restimg"/>
            <div className="m-4">
            <h3 className="font-bold">{name}</h3>
            <span>{avgRating}💕</span>
            <p>{areaName}</p>
            <p>{costForTwo}</p>
            </div>
        </div>
    )
}

//Higher order component

export const CardWithPromoted  = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div>
            <label className="absolute bg-black text-white rounded-full p-2 m-6">Promoted</label>
            <RestaurantCard resData={props.resData}/>
            </div>
        );
    }
}


export default RestaurantCard;