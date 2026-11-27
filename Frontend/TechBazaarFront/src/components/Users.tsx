import { useUserContext } from "../contexts/UserContext";
import User from "./User";

function Users(){
    const {usersList, load, error}= useUserContext();

    if(load){
        return(
            <p>
                Termékek betöltése
            </p>
        )
    }
    if(error){
        return(
            <p>
                {error}
            </p>
        )
    }
    return(
        <div className="user-table-wrap">
            <table className="user-table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Név</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map((user) => (
                        <User user={user} key={user.id} />
                    ))}
                    {usersList.length === 0 && (
                        <tr>
                            <td className="user-table-empty" colSpan={3}>Nincs megjeleníthető felhasználó.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Users