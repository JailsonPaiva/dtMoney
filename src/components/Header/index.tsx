import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';
import { useState } from 'react';

interface HanderProps {
    onOperNewTrasactionModal: () => void;
}

export function Header({ onOperNewTrasactionModal }: HanderProps) {
    


    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />

                <button type='button' onClick={onOperNewTrasactionModal}>
                    Nova transação
                </button>

               
            </Content>
        </Container>
    )
}