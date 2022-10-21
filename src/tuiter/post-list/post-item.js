import React from "react";
const PostItem =(
    {post={
        "_id": 123,
        "userName": "SpaceX",
        "handle": "SpaceX",
        "avatarIcon": "spacex.jpg",
        "time": "23h",
        "post": "Dennis and Akiko Tito are the first two crew members on Starship's second commercial spaceflight around the Moon ⟶ <span className='color-primary'>spacex.com/updates</span>",
        "image": "https://spacenews.com/wp-content/uploads/2022/10/akiko-dennis-tito.jpg",
        "comments": "595",
        "retweets": "1,168",
        "hearts": "11.1K",
        "retweeted": true,
        "retweetedUserName": "Elon Musk",
        "hasThread": true,
        "link":"spacex.com/updates",
        "retweet":false,
        "retweetPost":"",
        "retweetAvatar": "",
        "retweetHandle": "",
        "retweetTime": ""
    }}
)=>{
    return(
        <li className="list-group-item">
            <div className={`row ${post.retweeted ?'' : 'd-none'}`}>
                <div className="col-1 ps-5">
                   <i className="bi bi-repeat"></i>
                </div>
                <div className="col text-muted">
                    {post.retweetedUserName} Retweeted
                </div>

            </div>
            <div className="row">
                <div className="col-1 me-2">
                    <img src={`${post.avatarIcon}`} className="rounded-circle" height={48}/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <span className="fw-bolder">{post.userName}</span>
                            <span className="text-primary"><i className="bi bi-patch-check-fill"></i></span>
                            <span className="text-secondary">@{post.handle} · {post.time}</span>
                        </div>
                        <div className="col-1 text-secondary">
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{post.post}<span className="text-primary">{post.link}</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={`${post.retweet?'d-none':''}`}>
                                <img src={post.image} className="w-100 wd-post-image"/>
                            </div>
                            <div className={`${!post.retweet?'d-none':''} wd-post-image 
                            border
                            border-muted p-2 pb-0`}>
                                <div className="row">
                                    <div className="col">
                                        <img height={24} className="rounded-circle mb-1 me-1"
                                             src={post.retweetAvatar}/>
                                        <span className="fw-bolder">{post.retweetedUserName}</span>
                                        <span className="text-primary">
                                            <i className="bi bi-patch-check-fill"></i>
                                        </span>
                                        <span className="text-secondary">
                                            @{post.retweetHandle} · {post.retweetTime}
                                        </span>
                                    </div>
                                </div>
                                <div className="row mt-1 pb-0">
                                    <div className="col">
                                        <p>{post.retweetPost}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row mt-3 ms-1 text-secondary">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-3">
                                    <i className="bi bi-chat fs-5"></i>
                                </div>
                                <div className="col">
                                    {post.comments}
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-3">
                                    <i className="bi bi-repeat fs-5"></i>
                                </div>
                                <div className="col">
                                    {post.retweets}
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-3">
                                    <i className="bi bi-heart fs-5"></i>
                                </div>
                                <div className="col">
                                    {post.hearts}
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-upload fs-5"></i>
                        </div>
                    </div>
                    <div className={`row mt-3 ${post.hasThread?'':'d-none'}`}>
                        <div className="col-4 text-primary">
                            Show this thread
                        </div>
                    </div>
                </div>
            </div>

        </li>
    );
}

export default PostItem;
