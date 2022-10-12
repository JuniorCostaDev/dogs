import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import NotFound from "../NotFound";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import PropTypes from "prop-types";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
};

export default User;
