import React from "react";
import {useSelector} from "react-redux";

const ProfileDetails = () => {
    const profile = useSelector(state => state.profile);
    return(
        <div>
            <div className="row">
                <div className="col-3">
                    <i className="bi bi-geo-alt"></i>
                    <span className="ms-1">{profile.location}</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-balloon"></i>
                    <span className="ms-1">Born {
                        new Date(profile.dateOfBirth+" ").toLocaleDateString(
                            'en-us',{day:"numeric",year:"numeric",month:"long"}
                        )
                    }</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-calendar3"></i>
                    <span className="ms-1">Joined {

                        new Date(profile.dateJoined).toLocaleDateString(
                            'en-us',{year:"numeric",month:"long"}
                        )
                    }</span>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <span className="fw-bolder">{profile.followingCount}</span> Following
                </div>
                <div className="col-3">
                    <span className="fw-bolder">{profile.followersCount}</span> Followers
                </div>
            </div>
        </div>

    );
}

export default ProfileDetails;