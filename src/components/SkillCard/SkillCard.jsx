import {useState} from "react";
import "./SkillCard.css";

export function SkillCard({skills}) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="skill-card" onClick={() => setHidden(!hidden)}>
      <div className="skill-label">{skills.label}</div>
      <div className="skill-list">{skills.list}</div>
      <div className={`skill-details ${hidden ? 'hidden' : ''}`}>
        {skills.details}
      </div>
    </div>
  );
}
