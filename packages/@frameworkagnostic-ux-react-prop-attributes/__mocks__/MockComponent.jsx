import React from 'react';
import PropTypes from 'prop-types';

class MockComponent extends React.PureComponent {
  render() {
    const { children, ...props } = this.props;
    return (
      <a {...props}>
        {children}
      </a>
    );
  }
}

MockComponent.propTypes = {
  attrs: PropTypes.objectOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  inlineStyles: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
  classNames: PropTypes.objectOf(PropTypes.object),
  Component: PropTypes.bool,
  Components: PropTypes.bool,
  render: PropTypes.func,
  renderComponent: PropTypes.func,
};

MockComponent.defaultProps = {
  attrs: null,
  children: null,
  style: {},
  inlineStyles: {},
  className: '',
  classNames: {},
  Component: undefined,
  Components: undefined,
  renderComponent: () => (
    <div>No render component provided</div>
  ),
  render: () => (
    <div>No render prop provided</div>
  ),
};

export { MockComponent };
