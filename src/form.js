import React, { useState } from "react";

const Form = () => {
    const[email , setEmail] = useState("");
    const[password , setpassword] = useState("");
    const[confirmpassword , setConfirmPassword] = useState("");

    const[Validemail , setValidEmail] = useState(false);
    const[Validpassword , setValidpassword] = useState(false);
    const[Validconfirmpassword , setValidConfirmPassword] = useState(false);

    const handleEmailChange = (e) => {
           const newEmail = e.target.value ;
           setEmail(newEmail);
        
           setValidEmail(/^\S+@\S+\.\S+$/.test(newEmail));
            // setValidEmail(/^\S+@\S+\.\S+$/.test(newEmail));
    }

    const handlePasswordChange = (e) => {
        const newpassword = e.target.value ;
        setpassword(newpassword);

        setValidpassword(newpassword.length >= 8);
    }

    const handleConfirmPasswordChange = (e) => {
        const newConfirmpassword = e.target.value ;
        setConfirmPassword(newConfirmpassword);

        setValidConfirmPassword(password === newConfirmpassword)
    }  

    const handleFormSubmit = () => {
        if(Validemail && Validconfirmpassword && Validpassword){
            alert("submitted successfully");
        }
        else{
            alert("can’t submit the form");
        }
    }

     return (
        <div id="form">
        <form>
            <label htmlFor="email">Email :</label>
            <input 
                 type="email" 
                 id="email" value={email} 
                 onChange={handleEmailChange}
                 style={{borderColor : Validemail ? 'green' : 'red'}}
            />
            {!Validemail && <p style={{color : 'red'}}>Invalid email formate</p>}

            <label htmlFor="password">Password :</label>
            <input 
                 id="password" 
                 type="password" 
                 value={password} 
                 onChange={handlePasswordChange}
                 style={{borderColor : Validpassword ? 'green' : 'red'}}
            />
            {!Validpassword && <p style={{color : 'red'}}>password must be at least 8 characters long</p>}

            <label htmlFor="conpassword">Confirm Password :</label>
            <input 
                 id="conpassword" 
                 type="password" 
                 value={confirmpassword} 
                 onChange={handleConfirmPasswordChange}
                 style={{borderColor : Validconfirmpassword ? 'green' : 'red'}}
            />
            {!Validconfirmpassword && <p style={{color : 'red'}}>password does not match</p>}

            <button id="submit" onClick={handleFormSubmit}>Sign Up</button>
        </form>
        </div>
     )
}

export default Form;