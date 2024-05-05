import { useState } from "react";

// new version
function BetterSignup () {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: ""
    })

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;

        setFormData(currData => {
            currData[changedField] = newValue;
            return {...currData};
        })
    }

    return (
        <div>
            <label htmlFor="firstname">Enter First Name : </label>
            <input
                type="text"
                id="firstname"
                placeholder="First Name"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
            />
            <label htmlFor="lastname">Enter Last Name : </label>
            <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
            />
            <label htmlFor="password">Enter Your Password : </label>
            <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                name="password"
                onChange={handleChange}
            />
            <button>Submit</button>
        </div>
    )
}

export default BetterSignup