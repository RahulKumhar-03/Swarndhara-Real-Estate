import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../Context/UserDetailContext";
import { toFav } from "../../utils/api";
import { checkFavourites, updateFavourites } from "../../utils/common";

const Heart = ({ id }) => {
  const [heartColor, setHeartColor] = useState("white");
  const { validateLogin } = useAuthCheck();

  const {
    userDetails: { favourites, token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { user } = useAuth0();

  const { mutate } = useMutation({
    mutationFn: () => toFav(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => (
        {
        ...prev,
        favourites: updateFavourites(id, prev.favourites),
      }));
    },
  });

  useEffect(() => {
    setHeartColor(() => checkFavourites(id, favourites));
  }, [favourites]);

  const handleLike = () => {
    if (validateLogin) {
      mutate();
      setHeartColor((prev) => (prev === "fa3e5f" ? "white" : "fa3e5f"));
    }
  };
  return (
    <div>
      <AiFillHeart
        size={24}
        color={heartColor}
        style={{ zIndex: 1, top: "30px", right: "20px", position: "absolute" }}
        onClick={(e) => {
          e.stopPropagation();
          handleLike();
        }}
      />
    </div>
  );
};

export default Heart;
