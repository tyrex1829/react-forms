import { useState } from "react";
function UsernameForm () {
    const [username, setUsername] = useState("Tyrex");
    return (
        <div>
            <input type="text" placeholder="username" value={username} />
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm;