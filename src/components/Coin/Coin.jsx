import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid black;
    width: 25vh;
`;

const Button = styled.button`
    height: 2rem;
    width: 100%;
    background-color: #282c34;
    color: #61dafb;
    border: none;
    font-size: 1rem;
    :active {
        background: #0053ba;
    }
    :hover {
        border: 1px solid #cccccc;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export default function Coin(props) {    
    const handleClick = (event) => {
        // Prevent default from submitting the form
        event.preventDefault();
        props.handleRefresh(props.tickerId);
    }

    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>${props.price}</Td>
            {props.showBalance ? <Td>{props.balance}</Td> : null}
            <Td>
                <form action="#" method="POST">
                    <button onClick={handleClick}>
                        Refresh
                    </button>
                </form>
            </Td>
        </tr>
    );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}