import {useState} from "react";
import "./Interests.css";

export function Interests({interests}) {

  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="interest-pill" onClick={() => setIsHidden(!isHidden)}>
      <div className="interest-title">{interests.interest}</div>
      <div className={`interest-details ${isHidden ? 'hidden' : ''}`}>
        {interests.details}
      </div>
    </div>
  );
}
