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

import MuiInputLabel from '@mui/material/InputLabel';
import type {InputLabelTypeMap, InputLabelProps as MuiInputLabelProps} from '@mui/material/InputLabel';
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ElementType, ForwardRefExoticComponent, MutableRefObject, ReactElement} from 'react';
import type {WithWrapperProps} from '../../models/component';
import composeComponentDisplayName from '../../utils/compose-component-display-name';
import './input-label.scss';

export type InputLabelProps<
  C extends ElementType = ElementType,
  D extends React.ElementType = InputLabelTypeMap['defaultComponent'],
  P = {},
> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: C;
} & Omit<MuiInputLabelProps<D, P>, 'component'>;

const COMPONENT_NAME: string = 'InputLabel';

/**
 * The Form Label component is used to provide a label for the form inputs.
 *
 * Demos:
 *
 * - [Text Field (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/inputs-text-field)
 * - [Text Field (MUI)](https://mui.com/material-ui/react-text-field/)
 *
 * API:
 *
 * - [InputLabel API](https://mui.com/material-ui/api/input-label/)
 * - inherits [FormLabel API](https://mui.com/material-ui/api/form-label/)
 *
 * @remarks
 * - ✔️ Props of the [FormLabel](https://mui.com/material-ui/api/form-label/) component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @template C - The type of the component.
 * @param props - The props for the InputLabel component.
 * @param ref - The ref to be forwarded to the MuiInputLabel component.
 * @returns The rendered InputLabel component.
 */
const InputLabel: ForwardRefExoticComponent<InputLabelProps> & WithWrapperProps = forwardRef(
  <C extends ElementType>(
    {className, ...rest}: InputLabelProps<C>,
    ref: MutableRefObject<HTMLLabelElement>,
  ): ReactElement => {
    const classes: string = clsx('oxygen-input-label', className);

    return <MuiInputLabel ref={ref} className={classes} {...rest} />;
  },
) as ForwardRefExoticComponent<InputLabelProps> & WithWrapperProps;

InputLabel.displayName = composeComponentDisplayName(COMPONENT_NAME);
InputLabel.muiName = COMPONENT_NAME;

export default InputLabel;
