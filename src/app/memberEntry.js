import React from "react";

const MemberEntry = ({ member }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <h3>
        {member.firstname} {member.lastname}
      </h3>
      <p>Position: {member.position}</p>
      <p>Alter: {member.age}</p>
      <p>Geschlecht: {member.gender}</p>
    </div>
  );
};

export default MemberEntry;
