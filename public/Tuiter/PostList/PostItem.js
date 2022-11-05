

const PostItem = (post) => {
    return (`
    <li class="list-group-item wd-post-whole">
    <div class="row">
        <div class="col-1 wd-avatar">
            <img src="${post.avatar}" class="wd-avatar"/>
        </div>
        <div class="col">
            <span class="fw-bolder">${post.userName} </span> <i class="fas fa-check-circle"></i>
            <span class="text-secondary"> @${post.handle} · ${post.time}</span>
            <div class="row">
                <div class="col">${post.post}</div>
            </div>
            <div class="row">
                <div class="col">
                <div>
                    <img src="${post.image}"
                    class="wd-post-img ${post.title?'':'wd-post-img-no-title'}"/>
                </div>
                </div>
            </div>
            <div class="wd-post-content ${post.title?'d-block':'d-none'}">
                <div class="row">
                    <div class="col">
                        <div class="">
                            ${post.title}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="text-secondary">
                            ${post.desc}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="text-secondary">
                            <i class="fa-solid fa-link"></i>${post.link}
                        </div>
                    </div>
                </div>
         </div>
        <div class="row mt-3">
        <div class="col-3">
            <div class="row">
                <div class="col-3 text-secondary">
                <i class="fa-regular fa-comment"></i>
                </div>
                <div class="col text-secondary">
                ${post.comments}
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="row">
                <div class="col-3 text-secondary">
                <i class="fa-solid fa-retweet"></i>
                </div>
                <div class="col text-secondary">
                ${post.retweets}
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="row">
                <div class="col-3 text-secondary">
                <i class="fa-regular fa-heart"></i>
                </div>
                <div class="col text-secondary">
                ${post.hearts}
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="row">
                <div class="col-3 text-secondary">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                
            </div>
        </div>
        </div>
            
        </div>
    </div>
    </li>
    
`); }

export default PostItem;