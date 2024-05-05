import { useState } from "react";

// old version
function SignupForm () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const displayFirstName = (evt) => {
        setFirstName(evt.target.value);
    }

    const displayLastName = (evt) => {
        setLastName(evt.target.value);
    }

    return (
        <div>
            <label htmlFor="firstname">Enter First Name : </label>
            <input
                type="text"
                id="firstname"
                placeholder="First Name"
                value={firstName}
                onChange={displayFirstName}
            />
            <label htmlFor="lastname">Enter Last Name : </label>
            <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={displayLastName}
            />
            <button>Submit</button>
        </div>
    )
}

export default SignupForm