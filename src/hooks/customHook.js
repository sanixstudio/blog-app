import React, { useEffect } from "react";

const useUser = () => {
  const [username, setUsername] = React.useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUsername(data.username);
    };
  });
  return <div></div>;
};
