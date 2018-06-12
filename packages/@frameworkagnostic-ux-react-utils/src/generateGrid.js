

export const GUTTERS = [0, 8, 16, 24, 32, 40];
export const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function generateGrid(globalStylesArg, theme, breakpoint) {
  const styles = {};
  const globalStyles = globalStylesArg;

  GRID_SIZES.forEach((size) => {
    const key = `grid-${breakpoint}-${size}`;

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%',
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none',
      };
      return;
    }

    // Only keep 6 significant numbers.
    const width = `${Math.round((size / 12) * 10e6) / 10e4}%`;

    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width,
    };
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    Object.assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}
