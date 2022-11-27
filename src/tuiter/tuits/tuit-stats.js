import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunk";
import {useDispatch} from "react-redux";

const TuitStats= (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes":0,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }

) => {

    const dispatch = useDispatch();
    return (

        <div className="row mt-3">
            <div className="col-3">
                <i className="bi bi-chat me-2"></i>
                {tuit.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.retuits}
            </div>


            <div className="col-3">
                    <i
                        onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}
                        className={`bi bi-heart${tuit.likes>0 ?"-fill text-danger" :"" } me-2`}></i>
                {tuit.likes}
            </div>

            <div className="col-2">
                <i
                    onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))}
                    className={`bi bi-hand-thumbs-down${tuit.dislikes>0 ?"-fill" :"" } me-2`}></i>
                {tuit.dislikes}
            </div>

            <div className="col-1">
                <i className="bi bi-share"></i>
            </div>


        </div>
    );
}

export default TuitStats;