import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../Context/UserDetailContext";
import { useMutation } from "react-query";
import { createuser } from "../../utils/api.js";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings.jsx";

const Layout = () => {

  useFavourites()
  useBookings()
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);
  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createuser(user?.email,token),
  });

  useEffect(() => {

    const getTokenAndRegister = async () => {

      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "https://dev-cen1wxneyookra1n.us.auth0.com/api/v2/",
          scope: "openid profile email",
        },
      });

      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      mutate(res)
    };


    if(isAuthenticated){getTokenAndRegister();}
  }, [isAuthenticated]);
  return (
    <>
      <div style={{ background: "var(--black", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
