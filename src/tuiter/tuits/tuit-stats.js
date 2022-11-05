import React from "react";

const TuitStats= (
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
                <i className={`bi bi-heart me-2 ${tuit.liked ? 'd-none' : 'd-inline'}`}></i>
                <i className={`bi bi-heart-fill text-danger me-2 ${tuit.liked ? 'd-inline' : 'd-none'}`}></i>
                {tuit.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>


        </div>
    );
}

export default TuitStats;