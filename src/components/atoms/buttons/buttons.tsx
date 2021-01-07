import * as React from 'react';
import {SolidButton} from "./button.styles";
import {Add} from './icon-add';

interface Styles {
    bgColor : string,
    hoverBgColor : string,
    color: string,
    value: string
}   

interface EventHandler {
    (): void;
}

interface EventHandlers {
    onClickHandler : EventHandler
}

interface ButtonProps {
    eventHandlers: EventHandlers;
    styles: Styles
}
      
export const Button: React.FunctionComponent<ButtonProps> = ({eventHandlers, styles}) => {
    return <SolidButton bgColor={styles.bgColor} color={styles.color}
        onClick={() => eventHandlers.onClickHandler()} >
        {styles.value} <Add/>
    </SolidButton>;
};
