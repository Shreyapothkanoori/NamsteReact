import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) =>{

    const {name,areaName,cloudinaryImageId,costForTwo,avgRating} = props.resData.info;

    

    return(
        <div className="res-card">
            <img className="restimg" 
            src={CDN_URL+"/"+cloudinaryImageId}
            alt="restimg"/>
            <h3>{name}</h3>
            <span>{avgRating}💕</span>
            <p>{areaName}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default RestaurantCard;