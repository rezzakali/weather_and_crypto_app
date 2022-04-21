import React, { useEffect } from "react";

function Github() {
  const getUserFromGithubApi = async () => {
    const response = await fetch("https://api.github.com/users")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {});
  return (
    <div>
      <h1>Github</h1>
    </div>
  );
}

export default Github;
