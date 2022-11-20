import {useDispatch} from "react-redux";

import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunk";


const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }

) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (

        <li className="list-group-item">
            <div className="row">
                <div className="col-1 me-3">
                    <img src={`/images/${tuit.image}`} className="rounded-circle" width={48} alt="Tuit"/>
                </div>
                <div className="col">
                    <div className="row">

                        <div className="col">
                            <div className="d-inline">
                                <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                            </div>
                            <span className="fw-bolder me-2">{tuit.userName}</span>
                            <i className="bi bi-patch-check-fill text-primary me-2"></i>
                            <span className="text-secondary">{tuit.handle} · {tuit.time}</span>
                        </div>
                        <div className="row">
                            <div className="col">
                                {tuit.tuit}
                            </div>
                        </div>
                        <TuitStats key={tuit._id}
                                   tuit={tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default TuitItem;