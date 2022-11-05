import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "../profile/profile-reducer";



const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    let [name,setName] = useState(profile.firstName+" "+profile.lastName);
    let [bio,setBio] = useState(profile.bio);
    let [location,setLocation] = useState(profile.location);
    let [website,setWebsite] = useState(profile.website);
    let [date,setDate] = useState(profile.dateOfBirth);

    let [showDate,setShowDate] = useState(false);


    const formatDate = (date)=>{
        var date = new Date(date);
        var year = date.toLocaleString("default", { year: "numeric" });
        var month = date.toLocaleString("default", { month: "2-digit" });
        var day = date.toLocaleString("default", { day: "2-digit" });

        return year+"-"+month+"-"+day;
    }

    const splitName = (name) => {
        let arr = name.split(' ')
        const firstName = arr[0]
        arr = arr.splice(1)
        const lastName = arr.join(' ')
        return {firstName:firstName,lastName:lastName};
    }

    const dispatch = useDispatch();
    const saveClickHandler = () =>{
        const newProfile = {
            ...profile,
            ...splitName(name),
            bio:bio,
            website:website,
            location:location,
            dateOfBirth: date
        }
        dispatch(editProfile(newProfile))
    }

    const editDateHandler = (event) => {
        setDate(event.target.value);
        setShowDate(false);

    }

    return(
        <div>
            <div className="row fw-bolder">
                <div className="col-2 pt-2">
                    <Link to="/tuiter/profile" className="text-dark">
                        <i className="bi bi-x-lg fs-5"></i>
                    </Link>
                </div>
                <div className="col-8 pt-1">
                    <h5>Edit profile</h5>
                </div>
                <div className="col-2">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-dark rounded-pill w-100 fw-bold"
                        onClick={saveClickHandler}>Save</button>
                    </Link>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col">
                    <img src={profile.bannerPicture} className="w-100" height={240}/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col ms-4">
                    <img src={profile.profilePicture} className="rounded-circle wd-profile-picture" width={120}/>
                </div>
            </div>
            <div className="wd-pull-up">
                <div className= "row">
                    <div className="border rounded p-2">
                        <span className="text-secondary">Name</span>
                        <input type="text" className="form-control border-0 p-0"
                               value={name}
                        onChange={(event)=>setName(event.target.value)}/>
                    </div>

                </div>
                <div className= "row mt-4">
                    <div className="border rounded p-2">
                        <span className="text-secondary">Bio</span>
                        <textarea type="text" className="form-control border-0 p-0"
                               value={bio} onChange={(event)=>setBio(event.target.value)}>
                        </textarea>
                    </div>

                </div>
                <div className= "row mt-4">
                    <div className="border rounded p-2">
                        <span className="text-secondary">Location</span>
                        <input type="text" className="form-control border-0 p-0"
                               value={location}
                               onChange={(event)=>setLocation(event.target.value)}
                        />
                    </div>

                </div>
                <div className= "row mt-4">
                    <div className="border rounded p-2">
                        <span className="text-secondary">Website</span>
                        <input type="text" className="form-control border-0 p-0 text-primary"
                               value={website}
                               onChange={(event)=>setWebsite(event.target.value)}
                        />
                    </div>

                </div>
                <div className= "row mt-4">
                    <div className="border rounded p-2">
                        <span className="text-secondary">Birth date · </span>
                        <span className="text-primary"
                              onClick={(event)=>setShowDate(true)}>
                            Edit</span>
                        {showDate && (<input type="date" className="form-control"
                               value={formatDate(date+" ")}
                               onChange={editDateHandler}
                        />)}
                        <p className="m-0 p-0">{
                            new Date(date+" ").toLocaleDateString(
                                'en-us',{day:"numeric",year:"numeric",month:"long"}
                            )
                        }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfileComponent;