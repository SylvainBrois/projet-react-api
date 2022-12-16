import React, {useState, useEffect} from 'react';
import axios from "axios";
import AnimeCard from "./AnimeCard";
import "../../styles/components/_content.scss"
const AnimesAPICall = () => {
    const [data, setData] = useState([]);
    const [urlToFetch, setUrlToFetch] = useState("https://kitsu.io/api/edge/anime?page[limit]=20");
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");
    const firstPage = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0"
    const lastPage = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=18394"
    useEffect(()=>{
        axios.get(urlToFetch)
            .then((res)=> {
                setData(res.data.data)

                setNextPage(res.data.links.next)
                if(nextPage!=null) nextPage.replace("limit%5D=10", "limit%5D=20");

                setPrevPage(res.data.links.prev)
                if(prevPage!=null) prevPage.replace("limit%5D=10", "limit%5D=20");

            })
    })
    return (
        <div className="content" style={{textAlign: "center"}}>
            <ul>
                {data.map((anime, index) =>(
                    <AnimeCard key={index} anime={anime}/>
                    ))}
            </ul>
            <div className="pagination">
                <button onClick={()=>setUrlToFetch(firstPage)}>&laquo;</button>
                {urlToFetch!==firstPage && ( <button onClick={()=>setUrlToFetch(prevPage)}>&#8249;</button>)}
                {urlToFetch!==lastPage &&(<button onClick={()=>setUrlToFetch(nextPage)}>&#8250;</button>)}
                <button onClick={()=>setUrlToFetch(lastPage)}>&raquo;</button>
                </div>
        </div>
    );
};

export default AnimesAPICall;