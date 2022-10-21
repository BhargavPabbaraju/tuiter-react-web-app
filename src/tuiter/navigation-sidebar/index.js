import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item" href="#tuiter">
                <i className="bi bi-twitter"></i>
                <span className="d-none d-xl-inline"> Tuiter</span>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i>
                <span className="d-none d-xl-inline"> Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                <span className="d-none d-xl-inline"> Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-activity"></i>
                <span className="d-none d-xl-inline"> Labs</span>
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>
                <span className="d-none d-xl-inline"> Notifications</span>
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-chat-fill"></i>
                <span className="d-none d-xl-inline"> Messages</span>
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>
                <span className="d-none d-xl-inline"> Bookmarks</span>
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"></i>
                <span className="d-none d-xl-inline"> Lists</span>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>
                <span className="d-none d-xl-inline"> Profile</span>
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-plus-circle-fill"></i>
                <span className="d-none d-xl-inline"> More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;

