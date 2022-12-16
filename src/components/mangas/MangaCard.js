import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {addFav} from "../Redux";
import {useDispatch} from "react-redux";

const MangaCard = ({manga}) => {
    const [modalShow, setModalShow] = useState(false)
    const dispatch = useDispatch();

    return (
        <li className="card">
            <img src={manga.attributes.posterImage.small} alt={"poster : " + manga.attributes.titles.en} onClick={()=>setModalShow(true)}/>


            <Modal show={modalShow} backdrop="static">
                <Modal.Header>
                    <Button variant="secondary" onClick={()=>setModalShow(false)}>
                        X
                    </Button>
                    <Modal.Title><h1>{manga.attributes.titles.en}</h1></Modal.Title>
                    <label className="favCheck">
                        <input type="checkbox" onChange={()=>{dispatch(addFav(manga.attributes.titles.en))}}/>
                        <span>Add to favourite</span>
                    </label>
                </Modal.Header>
                <Modal.Body>

                    <img src={manga.attributes.posterImage.tiny}/>
                    <div>
                        <big style={{textDecoration : "underline"}}>Synopsis</big>
                        <p>{manga.attributes.synopsis}</p>
                        <br/>
                        <a  href={"https://kitsu.io/anime/"+ manga.attributes.slug} target="_blank"><Button>Check on website</Button></a>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </li>




    );

};

export default MangaCard;