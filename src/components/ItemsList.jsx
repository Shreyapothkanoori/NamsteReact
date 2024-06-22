
import { CDN_URL } from "../utils/constants";

const ItemsList = ({ data }) => {
  //console.log("test", data?.card?.card?.itemCards[0].card.info.name);
    
  return (
    <>
      <div>
        {data.card?.card?.itemCards.map((item) => (
          <div key={item?.card?.info?.id} className="justify-between  flex m-3 border-y-2">
            <div className="justify-start w-9/12">
              <h2 className="font-bold">{item?.card?.info?.name}</h2>
              <h4>${item?.card?.info?.defaultPrice}</h4>
              <p className="text-sm">{item?.card?.info?.description}</p>
            </div>
            <div >
            <button className="absolute  bg-black text-white rounded-md">Add + </button>
            <img
              src={CDN_URL + "/" + item?.card?.info?.imageId}
              height="100px"
              width="100px"
            />
           
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsList;
