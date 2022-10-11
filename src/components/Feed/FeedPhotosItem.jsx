import React from "react";
import Image from "../Helper/Image";
import "./FeedPhotosItem.scss";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className="FeedPhotosItem" onClick={handleClick}>
      <Image src={photo.src} alt={photo.title}/>
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
