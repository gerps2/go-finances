import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title, Icon, Button } from './styles';

interface Props extends RectButtonProps{
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
};

export function TransactionTypeButton({ title, type, isActive, ...rest } : Props) {
    return (
        <Container isActive={isActive} type={type}>
            <Button {...rest} isActive={isActive} type={type}>
                <Icon name={icon[type]} type={type}></Icon>
                <Title>{title}</Title>
            </Button>
        </Container>
    );
}
