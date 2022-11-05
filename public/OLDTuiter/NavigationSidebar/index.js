const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
                <span class="list-group-item "><i class="fab fa-twitter p-1"></i></span>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action 
                ${active=='home'?'active':''}">
                    <span class="p-1"><i class="fas fa-home"></i></span>
                    <span class="d-none d-xl-inline">Home</span></a>
                <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action 
                ${active=='explore'?'active':''}">
                    <span class="p-1"><i class="fas fa-hashtag"></i></span>
                    <span class="d-none d-xl-inline">Explore</span></a>
                <a href="" class="list-group-item list-group-item-action 
                ${active=='notifications'?'active':''}">
                    <span class="p-1"><i class="fas fa-bell"></i></span>
                    <span class="d-none d-xl-inline">Notifications</span></a>
                <a href="" class="list-group-item list-group-item-action 
                ${active=='messages'?'active':''}">
                    <span class="p-1"><i class="fas fa-envelope"></i></span>
                    <span class="d-none d-xl-inline">Messages</span></a>
                <a href="" class="list-group-item list-group-item-action 
                ${active=='bookmarks'?'active':''}">
                    <span class="p-1"><i class="fas fa-bookmark"></i></span>
                    <span class="d-none d-xl-inline">Bookmarks</span></a>
                <a href="" class="list-group-item list-group-item-action 
                ${active=='lists'?'active':''}">
                    <span class="p-1"><i class="fas fa-list"></i></span>
                    <span class="d-none d-xl-inline">Lists</span></a>
                <a href="" class="list-group-item list-group-item-action 
                ${active=='profile'?'active':''}">
                    <span class="p-1"><i class="fas fa-user"></i></span>
                    <span class="d-none d-xl-inline">Profile</span></a>
                <a href="" class="list-group-item list-group-item-action
                 ${active=='more'?'active':''}">
                    <span class="fa-stack wd-more-circle">
                        <i class="fas fa-circle fa-stack-1x" style="font-size:20px"></i>
                        <i class="fa fa-ellipsis-h fa-stack-1x" style="color:white"></i>
                    </span><span class="d-none d-xl-inline">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

