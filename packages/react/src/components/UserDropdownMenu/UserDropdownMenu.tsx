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

import ListSubheader from '@mui/material/ListSubheader';
import {capitalize} from '@mui/material/utils';
import clsx from 'clsx';
import {forwardRef, useState} from 'react';
import type {
  ElementType,
  ForwardRefExoticComponent,
  MouseEvent,
  MutableRefObject,
  ReactElement,
  ReactNode,
} from 'react';
import Avatar from '../Avatar';
import Button, {ButtonProps} from '../Button';
import Divider from '../Divider';
import ListItem from '../ListItem';
import ListItemAvatar from '../ListItemAvatar';
import ListItemIcon from '../ListItemIcon';
import ListItemText from '../ListItemText';
import Menu from '../Menu';
import type {MenuProps} from '../Menu';
import MenuItem from '../MenuItem';
import Radio from '../Radio';
import './user-dropdown-menu.scss';

export type UserDropdownMenuProps<C extends ElementType = ElementType> = Omit<MenuProps<C>, 'open' | 'anchorEl'> & {
  /**
   * List item icon.
   */
  actionIcon?: ReactNode;
  /**
   * List item button text.
   */
  actionText?: string;
  /**
   * Footer content.
   */
  footerContent?: ReactNode[];
  /**
   * Menu items to be added to the dropdown menu.
   */
  menuItems?: ReactNode[];
  /**
   * Current mode.
   */
  mode?: string;
  /**
   * Array list of modes
   */
  modes?: ModeList[];
  /**
   * Heading of the modes list.
   */
  modesHeading?: string;
  /**
   * Callback function on list item action trigger.
   */
  onActionTrigger?: () => void;
  /**
   * Callback function on mode change.
   */
  onModeChange?: (mode: string) => void;
  /**
   * Callback function on navigation to logged user's profile.
   */
  onUserProfileNavigation?: () => void;
  /**
   * Props sent to the menu trigger Button component.
   */
  triggerOptions?: Omit<ButtonProps, 'onClick'> & Record<string, any>;
  /**
   * Logged user information.
   */
  user?: UserTemplate;
};

export type ModeList = {
  /**
   * Icon of the mode.
   */
  icon?: string | ReactElement;
  /**
   * Display name of the mode.
   */
  name: string;
};

export type UserTemplate = {
  /**
   * Email of logged user.
   */
  email?: string;
  /**
   * Image link of logged user.
   */
  image?: string;
  /**
   * Display name of logged user.
   */
  name?: string;
};

/**
 * The User Dropdown Menu lets you display a dropdown menu with user information and actions.
 *
 * Demos:
 *
 * - [UserDropdownMenu (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/data-display-image)
 *
 * API:
 *
 * - inherits [Menu API](https://mui.com/material-ui/api/menu/)
 *
 * @remarks
 * - ✨ This is a custom component that is not available in the Material-UI library.
 * - ✔️ Props of the native component are also available.
 * - FIXME: ⚠️ `component` prop is temporarily not supported due to https://github.com/wso2/oxygen-ui/issues/283
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @param props - The props for the UserDropdownMenu component.
 * @param ref - The ref to be forwarded to the Menu component.
 * @returns The rendered UserDropdownMenu component.
 */
const UserDropdownMenu: ForwardRefExoticComponent<UserDropdownMenuProps> = forwardRef(
  <C extends ElementType = ElementType>(
    {
      className,
      children,
      footerContent,
      triggerOptions,
      user,
      modes,
      mode,
      onUserProfileNavigation,
      modesHeading,
      actionText,
      actionIcon,
      onModeChange,
      onActionTrigger,
      menuItems,
      ...rest
    }: UserDropdownMenuProps<C>,
    ref: MutableRefObject<HTMLDivElement>,
  ): ReactElement => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const openMenu: boolean = Boolean(anchorEl);

    const handleModeChange = (selectedMode: string): void => {
      onModeChange(selectedMode);
    };

    const onCloseMenu = (): void => {
      setAnchorEl(null);
    };

    const handleUserProfileNavigation = (): void => {
      onCloseMenu();
      if (onUserProfileNavigation) {
        onUserProfileNavigation();
      }
    };

    const handleActionTrigger = (): void => {
      onCloseMenu();
      if (onActionTrigger) {
        onActionTrigger();
      }
    };

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>): void => {
      setAnchorEl(event.currentTarget);
    };

    return (
      <>
        <Button
          aria-controls={openMenu ? 'oxygen-button-menu' : undefined}
          aria-haspopup="true"
          onClick={handleOpenUserMenu}
          {...triggerOptions}
        />
        <Menu
          ref={ref}
          open={openMenu}
          anchorEl={anchorEl}
          className={clsx(
            /* @deprecated Use the PascalCase classname instead. https://github.com/wso2/oxygen-ui/issues/274 */
            'oxygen-user-dropdown-menu',
            'OxygenUserDropdownMenu-root',
            className,
          )}
          id="oxygen-button-menu"
          onClose={onCloseMenu}
          PaperProps={{className: 'OxygenUserDropdownMenu-paper oxygen-user-dropdown-menu-paper'}}
          {...rest}
        >
          {children}
          {user && (
            <ListItem
              className={clsx('oxygen-user-dropdown-menu-list-item', 'OxygenUserDropdownMenu-user', {
                'OxygenUserDropdownMenu-userClickable': onUserProfileNavigation,
                clickable: onUserProfileNavigation,
              })}
              onClick={(): void => handleUserProfileNavigation()}
            >
              <ListItemAvatar className="OxygenUserDropdownMenu-userAvatarWrapper">
                <Avatar
                  src={user?.image}
                  alt="User"
                  randomBackgroundColor={!user?.image}
                  backgroundColorRandomizer={user?.name}
                  className="OxygenUserDropdownMenu-userAvatar"
                >
                  {user?.name?.split('')[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user?.name} secondary={user?.email} className="OxygenUserDropdownMenu-userLabel" />
            </ListItem>
          )}
          {menuItems?.length > 0 ? menuItems : null}
          {modes?.length > 0 && (
            <div>
              <ListSubheader className="OxygenUserDropdownMenu-themeToggleSubHeader">{modesHeading}</ListSubheader>
              {modes?.map((theme: ModeList) => {
                const {name, icon} = theme;
                return (
                  <MenuItem
                    className="OxygenUserDropdownMenu-themeToggle oxygen-user-dropdown-menu-item"
                    key={name}
                    onClick={(): void => handleModeChange(name)}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={capitalize(name)} />
                    <Radio
                      className="OxygenUserDropdownMenu-themeToggleRadio oxygen-user-dropdown-menu-item-radio"
                      checked={mode === name}
                      onChange={(): void => handleModeChange(name)}
                      value={name}
                      name="radio-buttons"
                      inputProps={{'aria-label': `mode-label-${name}`}}
                    />
                  </MenuItem>
                );
              })}
            </div>
          )}
          {actionText && (
            <MenuItem
              className="OxygenUserDropdownMenu-actionItem dropdown-menu-item"
              onClick={(): void => handleActionTrigger()}
            >
              <ListItemIcon>{actionIcon}</ListItemIcon>
              <ListItemText primary={actionText} />
            </MenuItem>
          )}
          {footerContent && (
            <>
              <Divider variant="middle" />
              <div className="OxygenUserDropdownMenu-footer oxygen-user-dropdown-menu-footer">{footerContent}</div>
            </>
          )}
        </Menu>
      </>
    );
  },
) as ForwardRefExoticComponent<UserDropdownMenuProps>;

export default UserDropdownMenu;
