

const WhoToFollowListItem = (who) => {

    return (`
           <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <img src="../../images/${who.avatarIcon}"
                                 class="rounded-circle wd-brand-avatar" width="48px" height="48px"/>
                        </div>
                        <div class="col-xl-7 col-lg-6 wd-font-change">
                            <span class="fw-bolder">${who.userName}</span><i class="fas fa-check-circle"></i><br>
                            @${who.handle}
                        </div>
                        <div class="col-xl-3 col-lg-4 text-center">
                            <button type="button" class="btn-primary rounded-pill border-0 mt-2 p-2 w-100 wd-font-change" >Follow</button>
                        </div>
                    </div>
                </li>
                
`); }

export default WhoToFollowListItem;
