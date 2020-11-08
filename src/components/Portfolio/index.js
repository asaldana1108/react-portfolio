import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'bored-at-home',
      description: 'HTML, CSS, Web APIs',
      link: "https://josephptflanagan.github.io/project-1",
      repo: "https://github.com/josephptflanagan/project-1"
    },
    {
      name: 'movie-lot',
      description: 'MERN Stack',
      link: "https://movielot.herokuapp.com/",
      repo: "https://github.com/tbreazier/final-countdown"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  
    {
      name: 'the-reading-nook',
      description: 'Express, SQL',
      link: "https://thereadingnook.herokuapp.com/",
      repo: "https://github.com/asaldana1108/project-2"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
