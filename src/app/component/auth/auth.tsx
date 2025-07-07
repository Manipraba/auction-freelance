"use client";
import React, { useEffect, useState } from "react";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  CredentialResponse,
} from "@react-oauth/google";
import UserInfo from "./UserInfo";

interface GoogleAuthProps {
  user: { name: string; picture: string } | null;
  setUser: (user: { name: string; picture: string } | null) => void;
}

const GoogleAuth: React.FC<GoogleAuthProps> = ({ user, setUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("googleUser");
    setDropdownOpen(false);
  };

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) return;
    const decoded = JSON.parse(
      atob(credentialResponse.credential.split(".")[1])
    );
    const userData = { name: decoded.name, picture: decoded.picture };
    setUser(userData);
    sessionStorage.setItem("googleUser", JSON.stringify(userData));
  };
  useEffect(() => {
    const savedUser = sessionStorage.getItem("googleUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="267041393026-2vhpu1ejnadsiq0tjf2ecn0ge00uatip.apps.googleusercontent.com">
      {!user ? (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log("Login Failed")}
          theme="filled_blue"
          size="large"
          shape="circle"
          text="continue_with"
        />
      ) : (
        <UserInfo
          user={user}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          onLogout={handleLogout}
        />
      )}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
