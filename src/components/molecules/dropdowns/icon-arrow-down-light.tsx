import * as React from 'react';

interface ArrowPropsType {
    disabled?: boolean;
    warning?: boolean;
}

export const LightArrowDown: React.FunctionComponent<ArrowPropsType> = ({warning,disabled }) => {
    let color = "#007cc2";
    if(warning){
        color = "#ed1c24";
    }else{
        if(disabled){
            color = "#dbdbdb"
        }
    }
    return (
        <svg width="11px" height="7px" viewBox="0 0 16 10" version="1.1">
            <g id="arrow-select" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="arrow-select" transform="translate(-317.000000, -295.000000)" stroke={color} stroke-width="1.5">
                    <g id="Group-2" transform="translate(20.000000, 191.000000)">
                        <g id="Group-2-Copy" transform="translate(0.000000, 83.000000)">
                            <polyline id="Shape-4" transform="translate(305.000000, 25.500000) scale(-1, 1) rotate(-90.000000) translate(-305.000000, -25.500000) " points="309 18 301 25.44 309 33"></polyline>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
        
}


