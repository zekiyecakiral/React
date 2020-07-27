import React, { useState, useEffect } from "react";
import Button from './Button'
const END_POINT = "https://www.randomuser.me/api?results=1";

function Friend() {
  const [friend, setFriend] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getFriend = async () => {
    setLoading(true);
    const response = await fetch(END_POINT);
    response
      .json()
      .then((res) => {
        const {
          name: { title, first, last },
          picture: { medium },
          id,
        } = res.results[0];
        setFriend({ title, first, last, medium, id });
        setLoading(false);
      })
      .catch((error) => {
        setHasError(true);
        setLoading(false);
      });
  };

  return (
    <div>
      <Button func={getFriend} context ='Get new Friend' />
      <FriendProfile friend={friend} />
      {loading && <p>Loading...</p>}
      {hasError && <p>Something went wrong ...</p>}
    </div>
  );
}
function FriendProfile({ friend }) {
  return (
    <div>
      <div>
        <p>
          {friend.title} {friend.first} {friend.last}
        </p>
        <img src={friend.medium} alt="friend" />
      </div>
    </div>
  );
}

export default Friend;
