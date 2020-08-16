import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-aligh: left;
    padding: 1.5rem 0 1.5rem 5rem;

`;

const Button = styled.button`
    margin: 10px auto 0 auto;
    float: right;
    border: none;
    background-color: #282c34;
    color: #61dafb;
    font-size: 1.4rem;
    :active {
        background: #0053ba;
    }
    :hover {
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export default function AccountBalance(props) {    

    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if( props.showBalance ) {
        content = <>Balance: ${props.amount}</>;
    }
    
    return (
        <Section>
            {content}
            <Button onClick={props.handleBalanceVisibilityChange}>  
                {buttonText}
            </Button>
        </Section>
    );

}



AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}