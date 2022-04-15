import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { client, urlFor } from "../../client";
import { AppWrapper } from "../../wrapper/index";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="app__about">
      <h3 className="head-text">
        {" "}
        Developing is <span>endless</span>{" "}
      </h3>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />{" "}
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrapper(About, "about");
