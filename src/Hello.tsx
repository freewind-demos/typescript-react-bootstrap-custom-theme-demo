import React, {FC} from 'react';
import {Buttons} from './buttons';

import {Forms} from './Forms';
import {Grids} from './Grids';
import {UtilClassnames} from './UtilClassnames';

import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';

export const Hello: FC = ({}) => {
  return <div style={{padding: 20}}>
    <Buttons/>
    <hr/>
    <Forms/>
    <hr/>
    <Grids/>
    <hr/>
    <UtilClassnames/>
  </div>;
}
