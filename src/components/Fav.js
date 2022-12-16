import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {delFav} from "./Redux";

const Fav = () => {
    const store = useSelector(state => state.japanart)
    useEffect(()=>{
        {console.log(store)}
    },[store])
    var count = 1;
    return (
        <div>
            {store && store.map(t=>(
                <div>
                <p style={{color:"white"}}>{t.payload}</p>
                </div>
            ))}
        </div>
    );
};

export default Fav;