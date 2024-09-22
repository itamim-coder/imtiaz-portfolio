import GitHubCalendar from "react-github-calendar";
import React from "react";

function Github() {
  return (
    <div className="about mt-12">
      <h2 className="title">giThuB AcTiviTy</h2>
      <br />
      <GitHubCalendar username="itamim-coder" />
    </div>
  );
}

export default Github;
