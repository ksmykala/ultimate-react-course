import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

// import App from "./App";

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
  return (
    <div className="skill-list">
      <Skill 
        skillname="Git"
        icon="💪"
        color="red"
      />
      <Skill
        skillname="Saving the world"
        icon="💪"
        color="orange"
      />
      <Skill
        skillname="Cooking"
        icon="🍗"
        color="limegreen"
      />
    </div>
  );
}

function Skill(data) {
  return (
    <div className="skill" style={{backgroundColor: data.color}}>
      <span>{data.skillname}</span>
      <span>{data.icon}</span>
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
