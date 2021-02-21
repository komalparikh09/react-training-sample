import React from 'react';
import classes from './Car.css';
import Radium from 'radium';
import styled from 'styled-components';

// const StyledDiv = styled.div`
//     background-color: yellow;
//     @media (min-width: 500px) {
//         width: 450px;
//     }
// `;

const car = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        // <StyledDiv>
            <div className="Car">
             {/* style={style}> */}
                <p onClick={props.click}>This is a {props.color} {props.name}!</p>
                <input type="text" onChange={props.changed} />
                {/* value={props.color}/> */}
            </div>
        // </StyledDiv>
    );
}
export default car;