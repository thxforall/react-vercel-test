import './Box.css';
import PropTypes from 'prop-types';

export default function Box({ children, backgroundColor, isRound }) {
  return <div className="box" style={{ backgroundColor, borderRadius: isRound ? '50%' : '0' }}>{children}</div>;
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  isRound: PropTypes.bool.isRequired,
};
