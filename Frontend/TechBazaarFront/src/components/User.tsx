import type { UserType } from "../types/UserType";

interface UserProps{
    user: UserType
}

function User({user}: UserProps){
    return(
        <div>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default User