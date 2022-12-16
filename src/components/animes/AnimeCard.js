import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from "react-redux";
import {addFav} from "../Redux";

const AnimeCard = ({anime}) => {
    const [modalShow, setModalShow] = useState(false)
    const dispatch = useDispatch();
    return (
        <li className="card">
            <img src={anime.attributes.posterImage.small} alt={"poster : " + anime.attributes.titles.en} onClick={()=>setModalShow(true)}/>


            <Modal show={modalShow} backdrop="static">
                <Modal.Header>
                    <Button variant="secondary" onClick={()=>setModalShow(false)}>
                        X
                    </Button>
                    <Modal.Title><h1>{anime.attributes.titles.en}</h1></Modal.Title>
                    <label className="favCheck">
                        <input type="checkbox" onChange={()=>{dispatch(addFav(anime.attributes.titles.en))}}/>
                        <span>Add to favourite</span>
                    </label>
                </Modal.Header>
                <Modal.Body>

                    <img src={anime.attributes.posterImage.tiny}/>

                    <div>
                    <big style={{textDecoration : "underline"}}>Synopsis</big>
                        <p>{anime.attributes.synopsis}</p>
                        <br/>
                        <a  href={"https://kitsu.io/anime/"+ anime.attributes.slug} target="_blank"><Button>Check on website</Button></a>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </li>




    );

};

export default AnimeCard;