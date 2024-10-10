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

import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ElementType, ForwardRefExoticComponent, MutableRefObject, ReactElement, ReactNode} from 'react';
import type {WithWrapperProps} from '../../models/component';
import composeComponentDisplayName from '../../utils/compose-component-display-name';
import Box from '../Box';
import Chip from '../Chip';
import type {ListItemButtonProps} from '../ListItemButton';
import ListItemButton from '../ListItemButton';
import ListItemIcon from '../ListItemIcon';
import ListItemText from '../ListItemText';
import type {NavbarProps} from '../Navbar';
import Tooltip from '../Tooltip';
import './navbar-item.scss';

export type NavbarItemProps<C extends ElementType = ElementType> = ListItemButtonProps<C> &
  Pick<NavbarProps, 'fill' | 'open'> & {
    /**
     * Icon for the Navbar item.
     * @example <HomeIcon />
     */
    icon?: ReactNode;
    /**
     * Unique id for the item.
     */
    id?: string;
    /**
     * Label to display on the UI.
     * @example Overview
     */
    label: ReactNode;
    /**
     * Tag to display on the UI.
     * @example Beta
     */
    tag?: string;
    /**
     * Tag color variant.
     */
    tagClassName?: 'premium' | 'beta' | 'new' | 'experimental';
  };

const COMPONENT_NAME: string = 'NavbarItem';

/**
 * The Navbar Item component is used to represent an item in the Navbar.
 *
 * Demos:
 *
 * - [Navbar Item (Oxygen UI)] (https://wso2.github.io/oxygen-ui/react/?path=/docs/navigation-navbar-item)
 *
 * API:
 *
 * - inherits [ListItemButton API](https://mui.com/material-ui/api/list-item-button/)
 *
 * @remarks
 * - ✨ This is a custom component that is not available in the Material-UI library.
 * - ✔️ Props of the [ListItemButton](https://mui.com/material-ui/api/list-item-button/) component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @template C - The type of the component.
 * @param props - The props for the NavbarItem component.
 * @param ref - The ref to be forwarded to the Box component.
 * @returns The rendered NavbarItem component.
 */
const NavbarItem: ForwardRefExoticComponent<NavbarItemProps> & WithWrapperProps = forwardRef(
  <C extends ElementType>(
    {
      className,
      collapsible = true,
      fill,
      icon,
      id,
      label,
      onClick,
      href,
      selected,
      tag,
      tagClassName,
      open = true,
      ...rest
    }: NavbarItemProps<C>,
    ref: MutableRefObject<HTMLDivElement>,
  ): ReactElement => {
    const classes: string = clsx(
      'oxygen-navbar-item',
      {
        [`${fill}`]: fill,
        fill,
        open,
      },
      className,
    );

    return (
      <Box ref={ref} className={classes}>
        <Tooltip ref={ref} key={id} title={!open && label} placement="right">
          <ListItemButton
            selected={selected}
            className={clsx({selected})}
            onClick={onClick}
            collapsible={collapsible}
            {...rest}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
            {open && tag ? (
              <Chip
                label={tag}
                className={clsx(`oxygen-chip-${tag.toLowerCase()}`, tagClassName)}
                classes={{label: 'oxygen-navbar-item-chip-label'}}
              />
            ) : null}
          </ListItemButton>
        </Tooltip>
      </Box>
    );
  },
) as ForwardRefExoticComponent<NavbarItemProps> & WithWrapperProps;

NavbarItem.displayName = composeComponentDisplayName(COMPONENT_NAME);
NavbarItem.muiName = COMPONENT_NAME;

export default NavbarItem;
