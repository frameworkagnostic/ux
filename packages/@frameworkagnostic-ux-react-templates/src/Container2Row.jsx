
import React from 'react';
import PropTypes from 'prop-types';
import { renderComponent } from './utils/renderComponent';

const Container2Row = (props) => {
  const {
    layoutSections, classNames, styles, attrs
  } = props;

  const rootProps = {
    className: classNames.root,
    style: styles.root,
    ...attrs.root,
  };

  const headerProps = {
    className: classNames.header,
    style: styles.header,
    ...attrs.header,
  };

  const contentProps = {
    className: classNames.content,
    style: styles.content,
    ...attrs.content,
  };

  return (
    <div {...rootProps}>
      <div {...headerProps}>{renderComponent(layoutSections.Header)}</div>
      <div {...contentProps}>{renderComponent(layoutSections.Content)}</div>
    </div>
  );
};

Container2Row.propTypes = {
  styles: PropTypes.objectOf(PropTypes.object),
  classNames: PropTypes.objectOf(PropTypes.object),
  layoutSections: PropTypes.shape({
    Header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.node,
    ]),
    Content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.node,
    ])
  }),
  attrs: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]))
};

Container2Row.defaultProps = {
  attrs: {},
  styles: {},
  classNames: {},
  layoutSections: {
    Header: null,
    Content: null,
  }
};

export { Container2Row };
