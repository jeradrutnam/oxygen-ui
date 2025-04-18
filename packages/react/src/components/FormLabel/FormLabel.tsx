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

import MuiFormLabel from '@mui/material/FormLabel';
import type {FormLabelTypeMap, FormLabelProps as MuiFormLabelProps} from '@mui/material/FormLabel';
import type {OverridableComponent} from '@mui/material/OverridableComponent';
import clsx from 'clsx';
import {forwardRef} from 'react';
import type {ReactElement, Ref, ElementType} from 'react';

export type FormLabelProps<
  C extends ElementType = ElementType,
  D extends ElementType = FormLabelTypeMap['defaultComponent'],
  P = {},
> = {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: C;
} & Omit<MuiFormLabelProps<D, P>, 'component'>;

/**
 * A Form Label component is used to provide a label for the form inputs.
 *
 * Demos:
 *
 * - [Checkbox (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/inputs-checkbox)
 * - [Checkbox (MUI)](https://mui.com/material-ui/react-checkbox/)
 * - [Radio Group (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/inputs-radio-group)
 * - [Radio Group (MUI)](https://mui.com/material-ui/react-radio-button/)
 * - [Switch (Oxygen UI)](https://wso2.github.io/oxygen-ui/react/?path=/docs/inputs-switch)
 * - [Switch (MUI)](https://mui.com/material-ui/react-switch/)
 *
 * API:
 *
 * - [FormLabel API](https://mui.com/material-ui/api/form-label/)
 *
 * @remarks
 * - ✔️ Props of the native component are also available.
 * - ✅ `component` prop is supported.
 * - ✅ The `ref` is forwarded to the root element.
 *
 * @template C - The type of the component.
 * @param props - The props for the Fab component.
 * @param ref - The ref to be forwarded to the MuiFab component.
 * @returns The rendered Fab component.
 */
const FormLabel: OverridableComponent<FormLabelTypeMap<FormLabelProps>> = forwardRef(
  <C extends ElementType = ElementType>(
    {className, ...rest}: FormLabelProps<C>,
    ref: Ref<HTMLLabelElement>,
  ): ReactElement => (
    <MuiFormLabel
      ref={ref}
      className={clsx(
        /* @deprecated Use the PascalCase classname instead. https://github.com/wso2/oxygen-ui/issues/274 */
        'oxygen-form-label',
        'OxygenFormLabel-root',
        className,
      )}
      {...rest}
    />
  ),
) as OverridableComponent<FormLabelTypeMap<FormLabelProps>>;

export default FormLabel;
