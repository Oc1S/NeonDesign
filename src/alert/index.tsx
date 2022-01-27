import React from 'react';
import PropTypes from 'prop-types';

interface AlertProps {
  kind?: 'info' | 'warning';
}

type KindMap = Record<Required<AlertProps>['kind'], string>;

const kinds: KindMap = {
  info: '#5352ED',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div className="neon-alert" style={{ backgroundColor: kinds[kind] }} {...rest}>
    {{ children }}
  </div>
);

Alert.propTypes = {
  kind: PropTypes.oneOf(['info', 'warning']),
};

export default Alert;