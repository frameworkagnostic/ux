
export const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const mapGridValue = (value) => `grid-xs-${value}`;

const mapGridMediaValue = (acc, key) => {
  acc.array.push(`@media (min-width:${acc.ref[key]}px)`);
  return acc;
};

export const expectedTopLevelSchema = [
  ...GRID_SIZES.map(mapGridValue),
  ...Object.keys(breakpointValues).reduce(mapGridMediaValue, {
    array: [],
    ref: breakpointValues,
  }).array,
]

export const gridSizesMock = {
	"grid-xs-auto": {
		"flexBasis": "auto",
		"flexGrow": 0,
		"maxWidth": "none"
	},
	"grid-xs-true": {
		"flexBasis": 0,
		"flexGrow": 1,
		"maxWidth": "100%"
	},
	"grid-xs-1": {
		"flexBasis": "8.33333%",
		"flexGrow": 0,
		"maxWidth": "8.33333%"
	},
	"grid-xs-2": {
		"flexBasis": "16.66667%",
		"flexGrow": 0,
		"maxWidth": "16.66667%"
	},
	"grid-xs-3": {
		"flexBasis": "25%",
		"flexGrow": 0,
		"maxWidth": "25%"
	},
	"grid-xs-4": {
		"flexBasis": "33.33333%",
		"flexGrow": 0,
		"maxWidth": "33.33333%"
	},
	"grid-xs-5": {
		"flexBasis": "41.66667%",
		"flexGrow": 0,
		"maxWidth": "41.66667%"
	},
	"grid-xs-6": {
		"flexBasis": "50%",
		"flexGrow": 0,
		"maxWidth": "50%"
	},
	"grid-xs-7": {
		"flexBasis": "58.33333%",
		"flexGrow": 0,
		"maxWidth": "58.33333%"
	},
	"grid-xs-8": {
		"flexBasis": "66.66667%",
		"flexGrow": 0,
		"maxWidth": "66.66667%"
	},
	"grid-xs-9": {
		"flexBasis": "75%",
		"flexGrow": 0,
		"maxWidth": "75%"
	},
	"grid-xs-10": {
		"flexBasis": "83.33333%",
		"flexGrow": 0,
		"maxWidth": "83.33333%"
	},
	"grid-xs-11": {
		"flexBasis": "91.66667%",
		"flexGrow": 0,
		"maxWidth": "91.66667%"
	},
	"grid-xs-12": {
		"flexBasis": "100%",
		"flexGrow": 0,
		"maxWidth": "100%"
	},
	"@media (min-width:600px)": {
		"grid-sm-auto": {
			"flexBasis": "auto",
			"flexGrow": 0,
			"maxWidth": "none"
		},
		"grid-sm-true": {
			"flexBasis": 0,
			"flexGrow": 1,
			"maxWidth": "100%"
		},
		"grid-sm-1": {
			"flexBasis": "8.33333%",
			"flexGrow": 0,
			"maxWidth": "8.33333%"
		},
		"grid-sm-2": {
			"flexBasis": "16.66667%",
			"flexGrow": 0,
			"maxWidth": "16.66667%"
		},
		"grid-sm-3": {
			"flexBasis": "25%",
			"flexGrow": 0,
			"maxWidth": "25%"
		},
		"grid-sm-4": {
			"flexBasis": "33.33333%",
			"flexGrow": 0,
			"maxWidth": "33.33333%"
		},
		"grid-sm-5": {
			"flexBasis": "41.66667%",
			"flexGrow": 0,
			"maxWidth": "41.66667%"
		},
		"grid-sm-6": {
			"flexBasis": "50%",
			"flexGrow": 0,
			"maxWidth": "50%"
		},
		"grid-sm-7": {
			"flexBasis": "58.33333%",
			"flexGrow": 0,
			"maxWidth": "58.33333%"
		},
		"grid-sm-8": {
			"flexBasis": "66.66667%",
			"flexGrow": 0,
			"maxWidth": "66.66667%"
		},
		"grid-sm-9": {
			"flexBasis": "75%",
			"flexGrow": 0,
			"maxWidth": "75%"
		},
		"grid-sm-10": {
			"flexBasis": "83.33333%",
			"flexGrow": 0,
			"maxWidth": "83.33333%"
		},
		"grid-sm-11": {
			"flexBasis": "91.66667%",
			"flexGrow": 0,
			"maxWidth": "91.66667%"
		},
		"grid-sm-12": {
			"flexBasis": "100%",
			"flexGrow": 0,
			"maxWidth": "100%"
		}
	},
	"@media (min-width:960px)": {
		"grid-md-auto": {
			"flexBasis": "auto",
			"flexGrow": 0,
			"maxWidth": "none"
		},
		"grid-md-true": {
			"flexBasis": 0,
			"flexGrow": 1,
			"maxWidth": "100%"
		},
		"grid-md-1": {
			"flexBasis": "8.33333%",
			"flexGrow": 0,
			"maxWidth": "8.33333%"
		},
		"grid-md-2": {
			"flexBasis": "16.66667%",
			"flexGrow": 0,
			"maxWidth": "16.66667%"
		},
		"grid-md-3": {
			"flexBasis": "25%",
			"flexGrow": 0,
			"maxWidth": "25%"
		},
		"grid-md-4": {
			"flexBasis": "33.33333%",
			"flexGrow": 0,
			"maxWidth": "33.33333%"
		},
		"grid-md-5": {
			"flexBasis": "41.66667%",
			"flexGrow": 0,
			"maxWidth": "41.66667%"
		},
		"grid-md-6": {
			"flexBasis": "50%",
			"flexGrow": 0,
			"maxWidth": "50%"
		},
		"grid-md-7": {
			"flexBasis": "58.33333%",
			"flexGrow": 0,
			"maxWidth": "58.33333%"
		},
		"grid-md-8": {
			"flexBasis": "66.66667%",
			"flexGrow": 0,
			"maxWidth": "66.66667%"
		},
		"grid-md-9": {
			"flexBasis": "75%",
			"flexGrow": 0,
			"maxWidth": "75%"
		},
		"grid-md-10": {
			"flexBasis": "83.33333%",
			"flexGrow": 0,
			"maxWidth": "83.33333%"
		},
		"grid-md-11": {
			"flexBasis": "91.66667%",
			"flexGrow": 0,
			"maxWidth": "91.66667%"
		},
		"grid-md-12": {
			"flexBasis": "100%",
			"flexGrow": 0,
			"maxWidth": "100%"
		}
	},
	"@media (min-width:1280px)": {
		"grid-lg-auto": {
			"flexBasis": "auto",
			"flexGrow": 0,
			"maxWidth": "none"
		},
		"grid-lg-true": {
			"flexBasis": 0,
			"flexGrow": 1,
			"maxWidth": "100%"
		},
		"grid-lg-1": {
			"flexBasis": "8.33333%",
			"flexGrow": 0,
			"maxWidth": "8.33333%"
		},
		"grid-lg-2": {
			"flexBasis": "16.66667%",
			"flexGrow": 0,
			"maxWidth": "16.66667%"
		},
		"grid-lg-3": {
			"flexBasis": "25%",
			"flexGrow": 0,
			"maxWidth": "25%"
		},
		"grid-lg-4": {
			"flexBasis": "33.33333%",
			"flexGrow": 0,
			"maxWidth": "33.33333%"
		},
		"grid-lg-5": {
			"flexBasis": "41.66667%",
			"flexGrow": 0,
			"maxWidth": "41.66667%"
		},
		"grid-lg-6": {
			"flexBasis": "50%",
			"flexGrow": 0,
			"maxWidth": "50%"
		},
		"grid-lg-7": {
			"flexBasis": "58.33333%",
			"flexGrow": 0,
			"maxWidth": "58.33333%"
		},
		"grid-lg-8": {
			"flexBasis": "66.66667%",
			"flexGrow": 0,
			"maxWidth": "66.66667%"
		},
		"grid-lg-9": {
			"flexBasis": "75%",
			"flexGrow": 0,
			"maxWidth": "75%"
		},
		"grid-lg-10": {
			"flexBasis": "83.33333%",
			"flexGrow": 0,
			"maxWidth": "83.33333%"
		},
		"grid-lg-11": {
			"flexBasis": "91.66667%",
			"flexGrow": 0,
			"maxWidth": "91.66667%"
		},
		"grid-lg-12": {
			"flexBasis": "100%",
			"flexGrow": 0,
			"maxWidth": "100%"
		}
	},
	"@media (min-width:1920px)": {
		"grid-xl-auto": {
			"flexBasis": "auto",
			"flexGrow": 0,
			"maxWidth": "none"
		},
		"grid-xl-true": {
			"flexBasis": 0,
			"flexGrow": 1,
			"maxWidth": "100%"
		},
		"grid-xl-1": {
			"flexBasis": "8.33333%",
			"flexGrow": 0,
			"maxWidth": "8.33333%"
		},
		"grid-xl-2": {
			"flexBasis": "16.66667%",
			"flexGrow": 0,
			"maxWidth": "16.66667%"
		},
		"grid-xl-3": {
			"flexBasis": "25%",
			"flexGrow": 0,
			"maxWidth": "25%"
		},
		"grid-xl-4": {
			"flexBasis": "33.33333%",
			"flexGrow": 0,
			"maxWidth": "33.33333%"
		},
		"grid-xl-5": {
			"flexBasis": "41.66667%",
			"flexGrow": 0,
			"maxWidth": "41.66667%"
		},
		"grid-xl-6": {
			"flexBasis": "50%",
			"flexGrow": 0,
			"maxWidth": "50%"
		},
		"grid-xl-7": {
			"flexBasis": "58.33333%",
			"flexGrow": 0,
			"maxWidth": "58.33333%"
		},
		"grid-xl-8": {
			"flexBasis": "66.66667%",
			"flexGrow": 0,
			"maxWidth": "66.66667%"
		},
		"grid-xl-9": {
			"flexBasis": "75%",
			"flexGrow": 0,
			"maxWidth": "75%"
		},
		"grid-xl-10": {
			"flexBasis": "83.33333%",
			"flexGrow": 0,
			"maxWidth": "83.33333%"
		},
		"grid-xl-11": {
			"flexBasis": "91.66667%",
			"flexGrow": 0,
			"maxWidth": "91.66667%"
		},
		"grid-xl-12": {
			"flexBasis": "100%",
			"flexGrow": 0,
			"maxWidth": "100%"
		}
	}
};
