import { useState, useEffect } from "react";
import userService from "../services/userService";
import { useParams } from "react-router";

export default function useGetProfile() {

    const { userId } = useParams();
    const [profileData, setProfileData] = useState([])

    useEffect(() => {
        userService.getProfile(userId).then(setProfileData)
    }, []);
    return [profileData, setProfileData];
}

// for now it is actually not neccessary