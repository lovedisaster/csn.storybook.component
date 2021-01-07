import React from 'react';
import { storiesOf } from '@storybook/react';

import {Button} from '../components';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action, actions } from '@storybook/addon-actions';

storiesOf('Atoms/Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Primary Button',
    () => {
      const label = 'Styles';
      const defaultValue = {bgColor:"#007cc2", hoverBgColor:"#005b8f", color: "#fff",value:"Button"};
      const groupId = 'GROUP-ID1';
      const value = object(label, defaultValue, groupId);
      return <Button eventHandlers={{onClickHandler : action('Button clicked')}} styles={value}/>;
    }
  )