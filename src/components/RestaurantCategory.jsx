import ItemsList from "./ItemsList";


const RestaurantCategory = ({data,showItems,setShowIndex}) =>{
    //console.log(data?.card?.card?.title);
    
    const handleAccordian= () =>{
        setShowIndex();
    }
    return(
        <>
        <div className=" w-6/12 mx-auto  p-4 bg-gray-200 shadow-lg m-3" onClick={handleAccordian}>
            <div className="flex justify-between">
            <div>
            <span className="font-bold">{data?.card?.card?.title}</span>
            <span className="mx-4 font-bold">({data?.card?.card?.itemCards.length})</span>
            </div>
            <span>🔽</span>
            </div>
            
        </div>
        <div className="bg-blue-50 w-6/12 mx-auto">
        {showItems ? <ItemsList data={data}/>: null}
        </div>
        </>
    );

}

export default RestaurantCategory;