import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase"; // Import your Firebase auth configuration
import "./Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scale, setScale] = useState(1.9);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
  

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      // Store user details in localStorage
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("email", user.email);
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("uid", user.uid);

      setUser(user); // Update state with the signed-in user
      window.location.pathname = "/"; // Redirect after sign-in
    } catch (error) {
      setError(error.message);
      console.error("Google sign-in error:", error);
    } finally {
      setIsSigningIn(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reset state
      localStorage.clear(); // Clear persistent storage
      window.location.pathname = "/"; // Redirect to home page
    } catch (error) {
      console.error("Error signing out:", error);
      setError("Failed to log out. Please try again.");
    }
  };

  // Check for persisted login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Persist user state on page refresh
        setUser(currentUser);
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("email", currentUser.email);
        localStorage.setItem("name", currentUser.displayName);
        localStorage.setItem("uid", currentUser.uid);
      } else {
        // If user is logged out, clear localStorage
        localStorage.clear();
      }
    });

    // If the user is stored in localStorage, set the state on initial render
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn) {
      setUser({
        email: localStorage.getItem("email"),
        displayName: localStorage.getItem("name"),
        uid: localStorage.getItem("uid"),
      });
    }

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="gradient bg-dot-pattern h-screen">
      
      <div className="main-content bg-dotted h-screen relative w-full  ">
        <div className="absolute inset-0 bg-[radial-gradient(circle,white,transparent_1px)] bg-[length:50px_50px] pointer-events-none"></div>

       

        {user ? (
          <div className="relative p-6 rounded-lg">
            
          </div>
        ) : (
          <div className="relative p-6 rounded-lg">
            {/* Dotted background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none rounded-lg"></div>

            <button
              style={{ backgroundColor: "#7ED6DF", color: "black" }}
              onClick={handleGoogleSignIn}
              disabled={isSigningIn}
              className="googlebutton mt-4 rounded-pill relative z-10"
            >
              {isSigningIn ? "Signing in..." : <b>Sign in with Google</b>}
            </button>
            {error && <p className="error-text relative z-10">{error}</p>}
          </div>
        )}

        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
};

export default Login;