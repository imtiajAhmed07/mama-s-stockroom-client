import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import './Login.css'

if (!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig)
} else
{
    firebase.app();
}

const Login = () => {
    
    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // google sign in------------->
    const handleGoogleSignIn = () =>{

        firebase.auth().signInWithPopup(googleProvider)
            .then((result) =>{
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) =>{
                const errorMessage = error.message;
            });

    }

    // facebook sign in-------------->
    const handleFacebookSignIn = () =>{
        firebase.auth().signInWithPopup(facebookProvider)
            .then((result) =>{
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
            })
            .catch((error) =>{
                const errorMessage = error.message;
            });
    }

    // form validation---------------->
    const handleOnBlur = (e) =>{

        let isFieldValid = true;

        if (e.target.name === "email"){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber
        }
        if (isFieldValid){
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
            console.log(newUserInfo)
        }
    }

    // user account crate from here-------------->
    const handleCreateAccount = (e) =>{

        if (newUser && user.name && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res =>{
                    const newUserInfo = { ...user }
                    newUserInfo.error = ""
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) =>{
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });
        }
        // created user log in from here-------------->
        if (!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res =>{
                    const newUserInfo = { ...user }
                    newUserInfo.error = ""
                    newUserInfo.success = true;
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) =>{
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });
        }

        e.preventDefault();
    }


    return (
        <div className="createAccountContainer">
            <div className="createUserForm">

                <h5>{newUser ? "Create an account" : "Log in"}</h5>

                <form autoComplete="off" className="accountCreateForm" onSubmit={handleCreateAccount}>

                    {newUser && <input autoComplete="false" style={{ background: "none" }} onBlur={handleOnBlur} placeholder="Your name" type="text" name="name" required />}
                    <br />

                    <input autoComplete="false" style={{ background: "none" }} onBlur={handleOnBlur} placeholder="Username or Email" type="text" name="email" required />
                    <br />

                    <input autoComplete="false" style={{ background: "none" }} onBlur={handleOnBlur} placeholder="Password" type="password" name="password" id="password" required />
                    <br />

                    {/* create or login button here --------------->*/}
                    {
                        newUser ? <input className="accountCreateBtn" type="submit" name="submit" value="Create an account" /> :
                            <input className="accountCreateBtn" type="submit" name="submit" value="Log in" />
                    }

                </form>

                {
                    user.error && <p style={{ color: "red", backgroundColor: "white", fontSize: '12px', width: "300px" }}>{user.error}</p>
                }

                {user.success && <p style={{ color: "green", backgroundColor: "white", fontSize: '12px', textAlign: 'center' }}>Account {newUser ? 'created' : 'logged in'} successfully</p>}

                <p style={{ textAlign: "center", fontSize: "13px" }}>
                    {newUser ? "Already have an account" : "Don't have an account?"}
                    <span style={{ cursor: "pointer" }} onClick={() => setNewUser(!newUser)} className="loginText">
                        {newUser ? "Login" : "Create an account"}
                    </span></p>

                {/* google and facebook login button here-------------> */}
                <div className="continueWithSocial">
                    <button onClick={handleGoogleSignIn} className="socialButton googleBtn">
                        Continue with Google
                    </button>

                    <button onClick={handleFacebookSignIn} className="socialButton facebookBtn">
                        Continue with Facebook
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;