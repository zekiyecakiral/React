import React from "react";

function Hobby(props) {
  return <div>{props.hobby}</div>;
}
function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div>
      <h3>Hobby List</h3>
      <p>
        {hobbies.map((hobby, index) => (
          <Hobby hobby={hobby} key={index} />
        ))}
      </p>
    </div>
  );
}

export default HobbyList;
