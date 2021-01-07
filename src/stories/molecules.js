import React from 'react';
import { storiesOf } from '@storybook/react';
import { DefaultDropDown } from '../components';
import { withKnobs, object } from '@storybook/addon-knobs';
import { action, actions } from '@storybook/addon-actions';

storiesOf('Molecules/DefaultDropDown', module)
  .addDecorator(withKnobs)
  .add(
    'Select',
    () => {
      const label = 'Styles';
      const defaultValue = {
          warning: false, 
          borderRadius: '3px', 
          color: "#fff", 
          width: "200px", 
          disabled: false,
          selectOptions: [{name: 'Mazda', value: 'Mazda'},{name: 'Honda', value: 'Honda'}],
          selectTitle: 'Makes',
          loading: false,
          name: 'make',
          tabIndex: 1
      };
      const groupId = 'GROUP-ID2';
      const value = object(label, defaultValue, groupId);
      return <DefaultDropDown 
        eventHandlers={{
            onChangeHandler : action('Dropdown changed'),
            onFocusHandler : action('Dropdown on focused')
        }} 
        propsValue={value}/>;
    }
  )