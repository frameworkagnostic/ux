
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from './BenifitListItem-Container';
import { Typography } from './BenifitListItem-Typography';
import { Image } from './BenifitListItem-Image';

class BenifitListItem extends PureComponent {
  static Container = Container
  static Typography = Typography
  static Image = Image

  render() {
    return (
      <BenifitListItem.Container {...this.props}>
        <BenifitListItem.Container {...this.props} type="headerContainer">
          <BenifitListItem.Image {...this.props} />
        </BenifitListItem.Container>
        <BenifitListItem.Container {...this.props} type="contentContainer">
          <BenifitListItem.Typography {...this.props} type="heading">
            {this.props.heading}
          </BenifitListItem.Typography>
          <BenifitListItem.Typography {...this.props} type="subheading">
            {this.props.subheading}
          </BenifitListItem.Typography>
        </BenifitListItem.Container>
      </BenifitListItem.Container>
    );
  }
}

BenifitListItem.propTypes = {
  styles: PropTypes.objectOf(PropTypes.object),
  classNames: PropTypes.objectOf(PropTypes.object),
  heading: PropTypes.node,
  subheading: PropTypes.node,
};

BenifitListItem.defaultProps = {
  styles: {},
  classNames: {},
  heading: null,
  subheading: null,
};

export { BenifitListItem };
