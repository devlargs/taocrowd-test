import React from "react";

const Card = () => {
  return (
    <article>
      <div className="article-wrapper">
        <figure>
          <img src="https://picsum.photos/id/103/800/450" alt="" />
        </figure>
        <div className="article-body">
          <h2>This is some title</h2>
          <p>
            Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
            euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
            lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
          </p>
          <a href="#" className="read-more">
            Read more <span className="sr-only">about this is some title</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
