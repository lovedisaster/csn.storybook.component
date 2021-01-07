import * as React from 'react';
import {DropDown, SelectWrapper, LoaderWrapper,Loader} from "./dropdowns.styles";
import {LightArrowDown} from './icon-arrow-down-light'; 

interface DropDownValueProps {
    warning?: boolean,
    disabled?: boolean,
    color?: string,
    borderRadius?: string,
    loading?: boolean,
    width?: string,
    name?: string;
    tabIndex?:number;
    selectOptions?: Array<SelectOption>;
    selectTitle?: string;
}   

interface EventHandler {
    (): void;
}

interface EventHandlers {
    onChangeHandler : EventHandler,
    onFocusHandler : EventHandler
}

interface SelectOption{
    name: string;
    value: string;
}

interface DropDownProps {
    eventHandlers: EventHandlers;
    propsValue: DropDownValueProps;
}

export const DefaultDropDown: React.FunctionComponent<DropDownProps> = ({eventHandlers, propsValue}) => {
    return (<SelectWrapper width={propsValue.width}>
    {
      propsValue.loading && 
        <LoaderWrapper borderRadius={propsValue.borderRadius}>
            <Loader>
            </Loader>
        </LoaderWrapper>
    }
    
        <DropDown 
            name={propsValue.name} 
            tabIndex={propsValue.tabIndex} 
            onChange={eventHandlers.onChangeHandler} 
            onBlur={e=> e.stopPropagation()} 
            onFocus={eventHandlers.onFocusHandler} 
            warning={propsValue.warning}
            borderRadius={propsValue.borderRadius}
            color={propsValue.color}
            disabled={propsValue.disabled}
        >
        <option value=''>{propsValue.selectTitle}</option>
        {
            propsValue.selectOptions ? 
            propsValue.selectOptions.map(item => 
                    <option key={item.value} value={item.value}>{item.name}
                </option>) 
            :
            ''
        }
        </DropDown>
        {<LightArrowDown warning={propsValue.warning} disabled={propsValue.disabled}/>}
    </SelectWrapper>);
};