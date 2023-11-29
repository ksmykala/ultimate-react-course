import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const skills = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#FFCE00"
  },
  {
    skill: "HTML",
    level: "beginner",
    color: "#0090ff"
  },
  {
    skill: "CSS",
    level: "intermediate",
    color: "#800080"
  },
  {
    skill: "Python",
    level: "advanced",
    color: "#FF0000"
  },
  {
    skill: "Java",
    level: "beginner",
    color: "#007396"
  },
  {
    skill: "C#",
    level: "advanced",
    color: "#649AD2"
  },
  {
    skill: "Ruby",
    level: "beginner",
    color: "#CC342D"
  }
];



function Avatar() {
  return (
    <div className="avatar">
      <img src="./imgs/tommy_the_super.png" alt="tortoise" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Tommy The Super</h1>
      <p>
        Once upon a time, there were a brave tortoise named Tommy, how always
        wanted to be a superhero. One day our brave boy met a fairy that granted
        his wish and gave him a super powers that our little friend could use to
        save the world
      </p>
    </div>
  );
}

function SkillList() {
  const sortedSkills = skills.sort((a, b) => {
    return a.skill.localeCompare(b.skill);
  });

  return (
    <div className="skill-list">
      {skills.length > 0 ? (
        sortedSkills.map((skill) => (
          <Skill
            skillname={skill.skill}
            level={skill.level}
            color={skill.color}
            key={skill.skill}
          />
        ))
      ) : (
        <p>I'm still working on my portfolio. Please come back later :)</p>
      )}
    </div>
  );
}

function Skill({skillname, level, color}) {
  const levelToEmoji = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪"
  };

  return (
    <div className="skill" style={{backgroundColor: color}}>
      <span>{skillname}</span>
      <span>{levelToEmoji[level]}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
