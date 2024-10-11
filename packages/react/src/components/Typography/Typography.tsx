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

import type {OverridableComponent} from '@mui/material/OverridableComponent';
import MuiTypography from '@mui/material/Typography';
import type {TypographyProps as MuiTypographyProps, TypographyTypeMap} from '@mui/material/Typography';
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ElementType, Ref, ReactElement} from 'react';
import type {WithWrapperProps} from '../../models/component';
import composeComponentDisplayName from '../../utils/compose-component-display-name';
import './typography.scss';

export type TypographyProps<
  C extends ElementType = ElementType,
  D extends ElementType = TypographyTypeMap['defaultComponent'],
  P = {},
> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: C;
} & Omit<MuiTypographyProps<D, P>, 'component'>;

const COMPONENT_NAME: string = 'Typography';

/**
 * The Typography can present your design and content as clearly and efficiently as possible.
 *
 * Demos:
 *
 * - [Breadcrumbs (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/navigation-breadcrumbs)
 * - [Breadcrumbs (MUI)](https://mui.com/material-ui/react-breadcrumbs/)
 * - [Typography (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/data-display-typography)
 * - [Typography (MUI)](https://mui.com/material-ui/react-typography/)
 *
 * API:
 *
 * - [Typography API](https://mui.com/material-ui/api/typography/)
 *
 * @remarks
 * - ✔️ Props of the native component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @template C - The type of the component.
 * @param props - The props for the Typography component.
 * @param ref - The ref to be forwarded to the MuiTypography component.
 * @returns The rendered Typography component.
 */
const Typography: OverridableComponent<TypographyTypeMap<TypographyProps>> & WithWrapperProps = forwardRef(
  <C extends ElementType = ElementType>(
    {className, ...rest}: TypographyProps<C>,
    ref: Ref<HTMLSpanElement>,
  ): ReactElement => {
    const classes: string = clsx('oxygen-typography', className);

    return <MuiTypography ref={ref} className={classes} {...rest} />;
  },
) as OverridableComponent<TypographyTypeMap<TypographyProps>> & WithWrapperProps;

Typography.displayName = composeComponentDisplayName(COMPONENT_NAME);
Typography.muiName = COMPONENT_NAME;

export default Typography;
