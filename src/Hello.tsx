import React, {FC} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';
import {ThemeProvider} from 'react-bootstrap';
import {Buttons} from './Buttons';
import {Forms} from './Forms';
import {Grids} from './Grids';
import {UtilClassnames} from './UtilClassnames';

export const Hello: FC = ({}) => {
  return <ThemeProvider prefixes={{btn: 'btn'}}>
    {
      <div style={{padding: 20}}>
        <Buttons/>
        <hr/>
        <Forms/>
        <hr/>
        <Grids/>
        <hr/>
        <UtilClassnames/>
      </div> as any // FIXME not sure why need this otherwise there is a compilation error
    }
  </ThemeProvider>;
}
