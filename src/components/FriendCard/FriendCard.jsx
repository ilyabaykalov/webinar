import PropTypes from 'prop-types';

import './FriendCard.css';

const FriendCard = ({ first_name, last_name, age, email, avatar }) => (
  <div className={ 'friend-card' }>
    <img
      className={ 'avatar' }
      src={ avatar }
      alt={ `${ last_name }'s avatar` }/>
    <h1>{ first_name } { last_name }</h1>
    <h4>Возраст: { age }</h4>
    <h2 className={'email'}>e-mail: { email }</h2>
  </div>
);

FriendCard.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

export { FriendCard };
