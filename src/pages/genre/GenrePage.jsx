import React, { useState } from "react";
import actionBg from "../../assets/actionBg.png";
import styles from "./GenrePage.module.css";

function GenrePage() {
  const [genre, setGenre] = useState([
    {
      title: "Action",
      bgImage: actionBg,
    },
    {
      title: "Drama",
      bgImage: "",
    },
    {
      title: "Romance",
      bgImage: "",
    },
    {
      title: "Thriller",
      bgImage: "",
    },
    {
      title: "Western",
      bgImage: "",
    },
    {
      title: "Horror",
      bgImage: "",
    },
    {
      title: "Fantasy",
      bgImage: "",
    },
    {
      title: "Music",
      bgImage: "",
    },
    {
      title: "Fiction",
      bgImage: "",
    },
  ]);
  const [selectedGenre, setSelectedGenre] = useState([1, 3, 5]);
  const removeGenre = (index) => {
    const newGenres = selectedGenre.filter((item) => {
      return item !== index;
    });
    selectedGenre(newGenres);
  };

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <h2>Super app</h2>
        <h1>Choose your entertainment category</h1>
        <div className={styles.selected}>
          {selectedGenre.map((index) => {
            return (
              <div key={index} className={styles.selectedGenre}>
                {genre[index].title}
                <button
                  className={styles.submit}
                  onClick={() => removeGenre(index)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default GenrePage;
