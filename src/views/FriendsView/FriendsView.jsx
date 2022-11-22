import { useEffect, useState } from 'react';

import { FriendCard } from '../../components';

import './FriendsView.css';

const FriendsView = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(result => result.json())
      .then(({ data }) => {

        data.map(friend => {
          if (friend.id === 8) {
            friend.first_name = 'Slava';
          }

          friend.age = Math.trunc(Math.random() * (30 - 18 + 1)) + 18;

          return friend;
        });

        setFriends(data);
      });
  }, []);

  return (
    <div className={ 'friends-view' }>
      {
        friends.map(({ id, first_name, last_name, age, email, avatar }) =>
          <FriendCard
            key={ id }
            first_name={ first_name }
            last_name={ last_name }
            age={ age }
            email={ email }
            avatar={ avatar }/>)
      }
    </div>
  );
};

export default FriendsView;
