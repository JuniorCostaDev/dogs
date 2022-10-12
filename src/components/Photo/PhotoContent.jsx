import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Image from "../Helper/Image";
import PhotoComments from "./PhotoComments";
import "./PhotoContent.scss";
import PhotoDelete from "./PhotoDelete";

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <div className={`PhotoContent ${single ? 'single' : ''}`}>
      <div className="img">
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className="details">
        <div>
          <p className="author">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
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
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
