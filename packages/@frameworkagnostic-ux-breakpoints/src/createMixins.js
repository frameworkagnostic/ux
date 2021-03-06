// @flow

const DEFAULT_MIXINS = {
  unit: 8
};

export default function createMixins(breakpoints: Object, spacing: Object, mixins: DEFAULT_MIXINS) {


  console.log('createMixins', { breakpoints, spacing, mixins });
  return {
    gutters: (styles: Object = {}) => ({
      paddingLeft: spacing.unit * 2,
      paddingRight: spacing.unit * 2,
      ...styles,
      [breakpoints.up('sm')]: {
        paddingLeft: spacing.unit * 3,
        paddingRight: spacing.unit * 3,
        ...styles[breakpoints.up('sm')],
      },
    }),
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 48,
      },
      [breakpoints.up('sm')]: {
        minHeight: 64,
      },
    },
    ...mixins,
  };
}
