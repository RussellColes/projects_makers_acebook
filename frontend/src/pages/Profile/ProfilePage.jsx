import { NavBar } from "../../components/NavBar";
import { MyUserDetails } from "../../components/MyUserDetails";
import { PhotoUpload } from "../../components/PhotoUpload";
import { PhotoDisplay } from "../../components/PhotoDisplay";
import { useState } from "react";
import { UserList } from "../../components/UserList";
import "../CSS.css"

export function Profile() {
  const [photoLoad, setPhotoLoad] = useState(false);
  const [showDefaultImage, setShowDefaultImage] = useState(true);

  console.log("show default image", showDefaultImage);

  function triggerPhotoLoad() {
    setPhotoLoad(!photoLoad);
  }

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div className="grid-item">
          <PhotoDisplay
          photoLoad={photoLoad}
          showDefaultImage={showDefaultImage}
          />
          <h1><MyUserDetails /></h1> 
        <PhotoUpload
          triggerPhotoLoad={triggerPhotoLoad}
          setShowDefaultImage={setShowDefaultImage}
        />
        </div>
        <div className="grid-item">
        <UserList />
        </div>
        </div>
    </>
  );
}
