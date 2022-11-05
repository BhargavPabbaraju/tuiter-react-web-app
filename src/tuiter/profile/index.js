import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import ProfileDetails from "./profile-details";
import {Link} from "react-router-dom";



const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return(
        <div className="border ">
            <div className="row">
                <div className="col-2 mt-3 fw-bolder fs-5">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col">
                    <div className="row fw-bolder">
                        {profile.firstName} {profile.lastName}
                    </div>
                    <div className="row text-secondary">
                        {profile.tuits} Tweets
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img alt="Banner"
                        src={profile.bannerPicture} className="w-100" height={240}/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col ms-4">
                    <img alt="Profile"
                        src={profile.profilePicture} className="rounded-circle wd-profile-picture" width={120}/>
                    <Link to="/tuiter/edit-profile">
                        <button className="btn btn-light rounded-pill float-end me-3">Edit profile</button>
                    </Link>
                </div>
            </div>
            <div className="wd-pull-up ms-4">
                <div className="row">
                    <h5 className="fw-bolder">{profile.firstName} {profile.lastName}</h5>
                </div>
                <div className="row wd-handle">
                    <span className="text-secondary mt-0"> {profile.handle}</span>
                </div>
                <div className="row">
                    <p>{profile.bio}</p>
                </div>
                <ProfileDetails/>
            </div>

        </div>
    );
};
export default ProfileComponent;

