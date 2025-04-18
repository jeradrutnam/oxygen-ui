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

import MuiListItemButton from '@mui/material/ListItemButton';
import type {ListItemButtonProps as MuiListItemButtonProps, ListItemButtonTypeMap} from '@mui/material/ListItemButton';
import type {OverridableComponent} from '@mui/material/OverridableComponent';
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ElementType, Ref, ReactElement} from 'react';

export type ListItemButtonProps<
  C extends ElementType = ElementType,
  D extends ElementType = ListItemButtonTypeMap['defaultComponent'],
  P = {},
> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: C;
} & Omit<MuiListItemButtonProps<D, P>, 'component'>;

/**
 * The List Item Button an action element to be used inside a list item.
 *
 * Demos:
 *
 * - [Lists (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/data-display-list)
 * - [Lists (MUI)](https://mui.com/material-ui/react-list/)
 *
 * API:
 *
 * - [ListItemButton API](https://mui.com/material-ui/api/list-item-button/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 *
 * @remarks
 * - ✔️ Props of the [ButtonBase](https://mui.com/material-ui/api/button-base/) component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @template C - The type of the component.
 * @param props - The props for the ListItemButton component.
 * @param ref - The ref to be forwarded to the MuiListItemButton component.
 * @returns The rendered ListItemButton component.
 */
const ListItemButton: OverridableComponent<ListItemButtonTypeMap<ListItemButtonProps>> = forwardRef(
  <C extends ElementType = ElementType>(
    {className, ...rest}: ListItemButtonProps<C>,
    ref: Ref<HTMLDivElement>,
  ): ReactElement => (
    <MuiListItemButton
      ref={ref}
      className={clsx(
        /* @deprecated Use the PascalCase classname instead. https://github.com/wso2/oxygen-ui/issues/274 */
        'oxygen-list-item-button',
        'OxygenListItemButton-root',
        className,
      )}
      {...rest}
    />
  ),
) as OverridableComponent<ListItemButtonTypeMap<ListItemButtonProps>>;

export default ListItemButton;
