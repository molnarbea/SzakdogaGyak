import type { UserType } from "../types/UserType";
import "../css/adminPage.css";

interface UserProps{
    user: UserType
}

function User({user}: UserProps){
    return(
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
        </tr>
    )
}

export default User