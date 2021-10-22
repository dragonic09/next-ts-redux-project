import { useEffect } from "react"
import { connect, useSelector } from "react-redux"
import { AddProfileButton } from "../features/profiles/components/add-profile-button"
import Avatar from "../features/profiles/components/avatar"
import { AvatarList } from "../features/profiles/components/avatar-list"
import { getProfiles } from "../store/features/user/user-selector"
import { openProfile } from "../store/features/user/user-slice"
import { Profile } from "../types/store"

const Profiles = ({ dispatch }) => {
    useEffect(() => {
        dispatch(openProfile());
    }, [])
    const profiles: Profile[] = useSelector(getProfiles);
    const avatars: JSX.Element[] = profiles.map(profile => <Avatar key={profile.name} msg={profile.name}></Avatar>)
    
    return (
        
        <div>
        <AvatarList>
            {avatars}
        </AvatarList>
        <AddProfileButton></AddProfileButton>
       </div>
        
    )
}

export default connect()(Profiles)