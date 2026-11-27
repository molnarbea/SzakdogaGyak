import type { UserType } from "../types/UserType";

interface UserProps{
    user: UserType
}

function User({user}: UserProps){
    return(
        <div>
            <p>ID: {user.id}</p>
            <p>Username: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default User