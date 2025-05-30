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

import {Theme, useColorScheme} from '@oxygen-ui/react';
import {ReactElement} from 'react';

const BuildingIcon = ({theme}: {theme: Theme}): ReactElement => {
  const {mode} = useColorScheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="20" height="20" viewBox="0 0 12.601 14">
      <path
        id="ldap-outline"
        className="path fill primary"
        d="M7.1,14H.4a.4.4,0,0,1-.4-.4V.4A.4.4,0,0,1,.4,0H6.7a.4.4,0,0,1,.4.4V3.2h5.1a.4.4,0,0,1,.4.4V14Zm0-.6h4.7a.2.2,0,0,0,.2-.2V11.32H7.1Zm-.6,0V.8A.2.2,0,0,0,6.3.6H.8A.2.2,0,0,0,.6.8V13.2a.2.2,0,0,0,.2.2H2.191V11.12a.4.4,0,0,1,.4-.4h1.95a.4.4,0,0,1,.4.4V13.4Zm-2.16,0V11.32H2.79V13.4ZM12,10.72V4a.2.2,0,0,0-.2-.2H7.1v6.92ZM10.471,9.1V8.5h.6v.6Zm-1.2,0V8.5h.6v.6Zm-1.2,0V8.5h.6v.6Zm-2.989,0V8.5h.6v.6Zm-1.2,0V8.5h.6v.6Zm-1.2,0V8.5h.6v.6Zm-1.2,0V8.5h.6v.6Zm8.99-1.2V7.3h.6v.6Zm-1.2,0V7.3h.6v.6Zm-1.2,0V7.3h.6v.6Zm-2.989,0V7.3h.6v.6Zm-1.2,0V7.3h.6v.6Zm-1.2,0V7.3h.6v.6Zm-1.2,0V7.3h.6v.6Zm8.99-1.2V6.1h.6v.6Zm-1.2,0V6.1h.6v.6Zm-1.2,0V6.1h.6v.6Zm-2.989,0V6.1h.6v.6Zm-1.2,0V6.1h.6v.6Zm-1.2,0V6.1h.6v.6Zm-1.2,0V6.1h.6v.6Zm8.99-1.2V4.9h.6v.6Zm-1.2,0V4.9h.6v.6Zm-1.2,0V4.9h.6v.6Zm-2.989,0V4.9h.6v.6Zm-1.2,0V4.9h.6v.6Zm-1.2,0V4.9h.6v.6Zm-1.2,0V4.9h.6v.6Zm3.6-1.2V3.7h.6v.6Zm-1.2,0V3.7h.6v.6Zm-1.2,0V3.7h.6v.6Zm-1.2,0V3.7h.6v.6Zm3.6-1.2V2.5h.6v.6Zm-1.2,0V2.5h.6v.6Zm-1.2,0V2.5h.6v.6Zm-1.2,0V2.5h.6v.6Zm3.6-1.2V1.3h.6v.6Zm-1.2,0V1.3h.6v.6Zm-1.2,0V1.3h.6v.6Zm-1.2,0V1.3h.6v.6Z"
        fill={
          mode === 'light'
            ? theme.colorSchemes.light.palette.text.primary
            : theme.colorSchemes.dark.palette.text.primary
        }
      />
    </svg>
  );
};

export default BuildingIcon;
