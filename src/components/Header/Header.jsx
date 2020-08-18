import React, { Component } from 'react'
import logo from './logo.jpg';
import styled from 'styled-components'

const img = styled.img`
    height: 5rem;
    pointer-events: none;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%;
    display: center;
    felx-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const H1 = styled.h1`
    font-size: 2rem;
    line-height: 4rem;
    fold-weight: bold;
    min-width: 300px;
`;

export default class ExchangeHeader extends Component {
    render() {
        return (
            <div>
                <Header>
                    <img src={logo} alt="React-logo" />
                    <div>
                        <H1>
                             Price Tracker
                        </H1>
                    </div>

                </Header>
            </div>
        )
    }
}
