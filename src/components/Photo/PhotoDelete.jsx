import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import "./PhotoDelete.scss";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que desaja deletar ?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <button disabled className="PhotoDelete">
          Deltar
        </button>
      ) : (
        <button onClick={handleClick} className="PhotoDelete">
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
