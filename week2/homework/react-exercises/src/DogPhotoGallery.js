import React, { useState } from "react";
import Button from "./Button";
const END_POINT = "https://dog.ceo/api/breeds/image/random";

export default function DogGallery() {
  const [dogPhotos, setdogPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getDogPhoto = async () => {
    setLoading(true);
    const response = await fetch(END_POINT);
    response
      .json()
      .then((data) => {
        setdogPhotos([...dogPhotos, data.message]);
        setLoading(false);
      })
      .catch((error) => {
        setHasError(true);
        setLoading(false);
      });
  };

  return (
    <div>
      <Button
        func={getDogPhoto}
        context={
          dogPhotos.length === 0 ? "Get dog first photo" : "Get dog photo"
        }
      />
      <DogPhoto photos={dogPhotos} />
      {loading && <p>Loading... </p>}
      {hasError && <p>Something get wrong</p>}
    </div>

  );
}
function DogPhoto({ photos }) {
  return (
    <div>
      {photos.map((photo, i) => {
        return <img src={photo} alt="doggs" width="100" height="100" />;
      })}
    </div>
  );
}

