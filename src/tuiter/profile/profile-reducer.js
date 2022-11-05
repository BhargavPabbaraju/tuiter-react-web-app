import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Monkey', lastName: 'D. Luffy', handle: '@MDLuffy',
    profilePicture: 'https://i.pinimg.com/736x/34/16/65/341665199bb597cdfae9848f975b844f.jpg', 	bannerPicture: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/One-piece-1050.jpg',
    bio: "From East Blue.  On my quest to become the Pirate King! Kaizoku Ou Ni Ore Wa Naru!",
    website: 'youtube.com/webdevtv',
    location: 'Wano Kuni',	dateOfBirth: '2003-05-05',	dateJoined: '1999-10-21',
    followingCount: 10,	followersCount: 565 , tuits: "6,114"
}



const profileSlice = createSlice(
    {

        name:"profile",

        initialState:profile,
        reducers:{
            editProfile(state,action){
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.bio = action.payload.bio;
                state.location = action.payload.location;
                state.website = action.payload.website;
                state.dateOfBirth = action.payload.dateOfBirth;
            }
        }
                             });

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;