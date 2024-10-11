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

import type {OverridableComponent} from '@mui/material/OverridableComponent';
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ElementType, ReactElement, ReactNode, Ref} from 'react';
import type {WithWrapperProps} from '../../models/component';
import composeComponentDisplayName from '../../utils/compose-component-display-name';
import Box from '../Box';
import Card from '../Card';
import type {CardProps, CardTypeMap} from '../Card';
import CardHeader from '../CardHeader';
import type {CardHeaderProps} from '../CardHeader';
import Carousel from '../Carousel';
import type {CarouselStep} from '../Carousel';
import CircularProgressAvatar from '../CircularProgressAvatar';
import Divider from '../Divider';
import type {UserTemplate} from '../UserDropdownMenu';
import './account-overview.scss';

export type AccountOverviewProps<
  C extends ElementType = ElementType,
  D extends ElementType = CardTypeMap['defaultComponent'],
  P = {},
> = Omit<CardProps<C, D, P>, 'title'> & {
  /**
   * Account completion steps.
   */
  accountCompletionSteps?: AccountCompletionSteps[];
  /**
   * Account completion steps title.
   */
  accountCompletionStepsTitle?: string;
  /**
   * Account progress.
   */
  accountProgress: number;
  /**
   * Card header props.
   */
  cardHeaderProps?: CardHeaderProps;
  /**
   * Card Subheader.
   * @example <span>subheader</span>
   */
  subheader?: ReactNode;
  /**
   * Card Title.
   * @example <span>title</span>
   */
  title: ReactNode;
  /**
   * Logged user information.
   */
  user: UserTemplate;
};

export type AccountCompletionSteps = CarouselStep;

const COMPONENT_NAME: string = 'AccountOverview';

/**
 * The Account Overview component lets you display the progress of the user's account.
 * It includes the user's profile picture, name, email, account progress and account completion steps.
 *
 * Demos:
 *
 * - [Account Overview (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/patterns-account-overview)
 *
 * API:
 *
 * - inherits [Card API](https://mui.com/material-ui/api/card/)
 *
 * @remarks
 * - ✨ This is a custom component that is not available in the Material-UI library.
 * - ✔️ Props of the [Paper](https://mui.com/material-ui/api/card/) component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @template C - The type of the component.
 * @param props - The props for the AccountOverview component.
 * @param ref - The ref to be forwarded to the Card component.
 * @returns The rendered AccountOverview component.
 */
const AccountOverview: OverridableComponent<CardTypeMap<AccountOverviewProps>> & WithWrapperProps = forwardRef(
  <C extends ElementType = ElementType>(
    {
      className,
      title,
      subheader,
      accountCompletionStepsTitle,
      accountCompletionSteps,
      accountProgress,
      user,
      cardHeaderProps,
      ...rest
    }: AccountOverviewProps<C>,
    ref: Ref<HTMLDivElement>,
  ): ReactElement => {
    const classes: string = clsx('oxygen-account-overview', className);

    return (
      <Card ref={ref} className={classes} elevation={0} variant="outlined" {...rest}>
        <CardHeader
          avatar={
            <CircularProgressAvatar
              color={accountProgress < 100 ? 'warning' : 'success'}
              progress={accountProgress}
              avatarOptions={{alt: "User's avatar", src: user?.image}}
              badgeOptions={{badgeContent: `${accountProgress}%`, color: accountProgress < 100 ? 'warning' : 'success'}}
            />
          }
          title={title}
          subheader={subheader}
          {...cardHeaderProps}
        />
        {accountCompletionSteps && (
          <Box className="oxygen-account-completion-steps-box">
            <Divider />
            <Carousel title={accountCompletionStepsTitle} steps={accountCompletionSteps} />
          </Box>
        )}
      </Card>
    );
  },
) as OverridableComponent<CardTypeMap<AccountOverviewProps>> & WithWrapperProps;

AccountOverview.displayName = composeComponentDisplayName(COMPONENT_NAME);
AccountOverview.muiName = COMPONENT_NAME;

export default AccountOverview;
