import React from "react";
import { BsTelegram, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = (props) => {
  const redirectHadnler = (link) => {
    window.location.href = link;
  };

  return (
    <div className="app__social">
      <div>
        <BsTelegram onClick={() => redirectHadnler("https://t.me/webdev42")} />
      </div>
      <div>
        <BsInstagram
          onClick={() =>
            redirectHadnler("https://www.instagram.com/tokhirov987/")
          }
        />
      </div>
      <div>
        <FaFacebookF
          onClick={() =>
            redirectHadnler("https://www.facebook.com/akbar.tokhirov.3")
          }
        />
      </div>
    </div>
  );
};

export default SocialMedia;
