/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com).
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

import MuiIconButton from '@mui/material/IconButton';
import type {IconButtonTypeMap, IconButtonProps as MuiIconButtonProps} from '@mui/material/IconButton';
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ElementType, ForwardRefExoticComponent, MutableRefObject, ReactElement} from 'react';
import type {WithWrapperProps} from '../../models/component';
import composeComponentDisplayName from '../../utils/compose-component-display-name';
import './icon-button.scss';

export enum IconButtonVariants {
  CONTAINED = 'contained',
  TEXT = 'text',
}

export type IconButtonProps<
  C extends ElementType = ElementType,
  D extends ElementType = IconButtonTypeMap['defaultComponent'],
  P = {},
> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: C;
  /**
   * The variant of the icon button.
   */
  variant?: IconButtonVariants;
} & Omit<MuiIconButtonProps<D, P>, 'component'>;

const COMPONENT_NAME: string = 'IconButton';

/**
 * The Icon Button component is used to render a button with an icon.
 *
 * Demos:
 *
 * - [Button (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/inputs-button)
 * - [Button (MUI)](https://mui.com/material-ui/react-button/)
 *
 * API:
 *
 * - [IconButton API](https://mui.com/material-ui/api/icon-button/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 *
 * @remarks
 * - ✔️ Props of the native component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @template C - The type of the component.
 * @param props - The props for the FormControl component.
 * @param ref - The ref to be forwarded to the MuiFormControl component.
 * @returns The rendered FormControl component.
 */
const IconButton: ForwardRefExoticComponent<IconButtonProps> & WithWrapperProps = forwardRef(
  <C extends ElementType>(
    {className, variant = IconButtonVariants.TEXT, ...rest}: IconButtonProps<C>,
    ref: MutableRefObject<HTMLButtonElement>,
  ): ReactElement => {
    const classes: string = clsx('oxygen-icon-button', className, {
      'oxygen-icon-button-contained': variant === IconButtonVariants.CONTAINED,
    });

    return <MuiIconButton ref={ref} className={classes} {...rest} />;
  },
) as ForwardRefExoticComponent<IconButtonProps> & WithWrapperProps;

IconButton.displayName = composeComponentDisplayName(COMPONENT_NAME);
IconButton.muiName = COMPONENT_NAME;

export default IconButton;
