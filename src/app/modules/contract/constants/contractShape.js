import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  userName: PropTypes.string,
  userSurname: PropTypes.string,
  currency: PropTypes.string, // should get a enum lsit somewhere
  date: PropTypes.number,
  amountInUsd: PropTypes.number,
});
