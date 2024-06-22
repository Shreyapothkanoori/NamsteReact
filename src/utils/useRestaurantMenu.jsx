import { useState ,useEffect} from "react";
import { MENU_URL } from "./constants";


//This is a custom hook

const useRestaurantMenu = (id) =>{

    const [menu,setMenuList]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData=async() =>{
        const data = await fetch(MENU_URL+id);
        const json = await data.json();
        setMenuList(json.data);
       
        

    }

    return menu;

}

export default useRestaurantMenu;