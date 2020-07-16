import React, { useState, useEffect } from "react";

const END_POINT = "https://official-joke-api.appspot.com/random_joke";

function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getNewJoke = async () => {
    setLoading(true);
    const response = await fetch(END_POINT);
    response
      .json()
      .then((res) => {
        console.log(res);
        const { punchline, setup } = res;
        setJoke({ setup, punchline });
        setLoading(false);
      })
      .catch((error) => {
        setHasError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      <Joke joke={joke} />
      {loading && <p>Loading... </p>}
      {hasError && <p>Something get wrong</p>}
    </div>
  );
}

function Joke({ joke }) {
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
}

export default RandomJoke;
