
import React from 'react';
import PropTypes from 'prop-types';

const BenifitListItemImage = (props) => {
  const {
    src,
    alt,
    styles,
    classNames
  } = props;

  if (!src) {
    return null;
  }

  return (
    <div className={classNames.imageContainer} style={styles.imageContainer}>
      <img className={classNames.image} style={styles.image} src={src} alt={alt} />
    </div>
  );
};

BenifitListItemImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.object),
  classNames: PropTypes.objectOf(PropTypes.object),
};

BenifitListItemImage.defaultProps = {
  classNames: {},
  styles: {},
  alt: '',
};

export { BenifitListItemImage as Image };
