import styled, { keyframes } from 'styled-components';


// SLIDE LEFT ANIMATION
const slideLeftIn = keyframes`
    from { transform: translateX(-100%); }

    to { transform: translateX(0%) }
`
const slideLeftOut = keyframes`
    from { transform: translateX(0%);}
    to {transform: translateX(-100%);}
`

export const LeftDiv = styled.div`
    height: '800px';
    width: "1920px";
    background-color: #ffffff;
    position: absolute;
    &.slide-enter-active {
        animation: ${slideLeftIn} 0.2s linear; 
    } 

    &.slide-exit-active {
        background-color: green;
        animation: ${slideLeftOut} 0.2s linear; 
    }
`

// SLIDE RIGHT ANIMATION
const slideRightIn = keyframes`
    from { transform: translateX(100%); }

    to { transform: translateX(0%) }
`
const slideRightOut = keyframes`
    from { transform: translateX(0%);}
    to {transform: translateX(100%);}
`
export const RightDiv = styled.div`
    height: '800px';
    width: "1920px";
    background-color: #ffffff;
    position: absolute;
    &.slide-enter-active {
        animation: ${slideRightIn} 0.2s linear; 
    } 

    &.slide-exit-active {
        background-color: green;
        animation: ${slideRightOut} 0.2s linear; 
    }
`

// SLIDE RIGHT ANIMATION
const slideUpIn = keyframes`
    from { transform: translateY(100%); }

    to { transform: translateY(0%) }
`
const slideUpOut = keyframes`
    from { transform: translateY(0%);}
    to {transform: translateY(100%);}
`
export const UpDiv = styled.div`
    height: '800px';
    width: "1920px";
    background-color: #ffffff;
    position: absolute;
    &.slide-enter-active {
        animation: ${slideUpIn} 0.2s linear; 
    } 

    &.slide-exit-active {
        background-color: green;
        animation: ${slideUpOut} 0.2s linear; 
    }
`