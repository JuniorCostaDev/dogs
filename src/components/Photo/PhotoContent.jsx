import React from "react";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import "./PhotoContent.scss";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className="PhotoContent">
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="author">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="views">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>
              {Number(photo.idade) === 1
                ? `${photo.idade} ano`
                : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
