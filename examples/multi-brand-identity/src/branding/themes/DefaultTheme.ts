/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {OxygenOxygenColorsPrimaryDefault as OxygenOxygenColorsPrimaryDefaultDark} from '@oxygen-ui/primitives/dist/design-tokens/web/oxygen/es/dark.tokens.es6';
import {OxygenOxygenColorsPrimaryDefault} from '@oxygen-ui/primitives/dist/design-tokens/web/oxygen/es/tokens.es6';
import {extendTheme, Theme} from '@oxygen-ui/react';

const DefaultTheme: Theme = extendTheme({
  colorSchemes: {
    dark: {
      brand: {
        logo: {
          main: `${process.env.PUBLIC_URL}/assets/brands/wso2/images/wso2-logo-inverted.svg`,
        },
      },
      palette: {
        gradients: {
          primary: {
            stop1: OxygenOxygenColorsPrimaryDefaultDark,
            stop2: OxygenOxygenColorsPrimaryDefaultDark,
          },
        },
        primary: {
          main: OxygenOxygenColorsPrimaryDefaultDark,
        },
      },
    },
    light: {
      brand: {
        logo: {
          main: `${process.env.PUBLIC_URL}/assets/brands/wso2/images/wso2-logo.svg`,
        },
      },
      palette: {
        gradients: {
          primary: {
            stop1: OxygenOxygenColorsPrimaryDefault,
            stop2: OxygenOxygenColorsPrimaryDefault,
          },
        },
        primary: {
          main: OxygenOxygenColorsPrimaryDefault,
        },
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--oxygen-shape-borderRadius)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
      /* roboto-300 - latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        src: url('../fonts/roboto-v30-latin-300.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('../fonts/roboto-v30-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('../fonts/roboto-v30-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
             url('../fonts/roboto-v30-latin-300.woff') format('woff'), /* Modern Browsers */
             url('../fonts/roboto-v30-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
             url('../fonts/roboto-v30-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
      }
      /* roboto-regular - latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('../fonts/roboto-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('../fonts/roboto-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
             url('../fonts/roboto-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
             url('../fonts/roboto-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
             url('../fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
      }
      /* roboto-500 - latin */
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        src: url('../fonts/roboto-v30-latin-500.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('../fonts/roboto-v30-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('../fonts/roboto-v30-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
             url('../fonts/roboto-v30-latin-500.woff') format('woff'), /* Modern Browsers */
             url('../fonts/roboto-v30-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
             url('../fonts/roboto-v30-latin-500.svg#Roboto') format('svg'); /* Legacy iOS */
      }
      `,
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '0.67857143em 1em',
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default DefaultTheme;
