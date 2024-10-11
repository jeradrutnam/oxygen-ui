/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
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

import MuiCard from '@mui/material/Card';
import type {CardProps as MuiCardProps, CardTypeMap} from '@mui/material/Card';
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ElementType, ForwardRefExoticComponent, MutableRefObject, ReactElement} from 'react';
import type {WithWrapperProps} from '../../models/component';
import composeComponentDisplayName from '../../utils/compose-component-display-name';
import './card.scss';

export type CardProps<
  C extends ElementType = ElementType,
  D extends ElementType = CardTypeMap['defaultComponent'],
  P = {},
> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: C;
} & Omit<MuiCardProps<D, P>, 'component'>;

const COMPONENT_NAME: string = 'Card';

/**
 * The Card component contain content and actions about a single subject.
 *
 * Demos:
 *
 * - [Card (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/surfaces-card)
 * - [Card (MUI)](https://mui.com/material-ui/react-card/)
 *
 * API:
 *
 * - [Card API](https://mui.com/material-ui/api/card/)
 * - inherits [Paper API](https://mui.com/material-ui/api/paper/)
 *
 * @remarks
 * - ✔️ Props of the [Paper](https://mui.com/material-ui/api/paper/) component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @template C - The type of the component.
 * @param props - The props for the Card component.
 * @param ref - The ref to be forwarded to the MuiCard component.
 * @returns The rendered Card component.
 */
const Card: ForwardRefExoticComponent<CardProps> & WithWrapperProps = forwardRef(
  <C extends ElementType>(
    {className, component, onClick, elevation = 0, variant = 'outlined', ...rest}: CardProps<C>,
    ref: MutableRefObject<HTMLDivElement>,
  ): ReactElement => {
    const classes: string = clsx('oxygen-card', {'with-hover': onClick}, className);

    return (
      <MuiCard className={classes} ref={ref} onClick={onClick} elevation={elevation} variant={variant} {...rest} />
    );
  },
) as ForwardRefExoticComponent<CardProps> & WithWrapperProps;

Card.displayName = composeComponentDisplayName(COMPONENT_NAME);
Card.muiName = COMPONENT_NAME;

export default Card;
