import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";

interface TypeProps {
    type: 'up' | 'down';
} 

interface ContainerProps {
    type: 'up' | 'down';
    isActive: boolean;
} 

export const Container = styled.View<ContainerProps>`
    width: 48%;
    border-width: ${({ isActive }) => isActive ? 0: 1.5}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;

    ${({ isActive, type }) => isActive && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.attention_light};
    `}

    ${({ isActive, type }) => isActive && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.success_light};
    `}
`;

export const Button = styled(RectButton)<ContainerProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

export const Icon = styled(Feather)<TypeProps> `
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    ${(props) => props.type === 'up' && css `
        color: ${({ theme }) => theme.colors.success};
    `};

    ${(props) => props.type === 'down' && css `
        color: ${({ theme }) => theme.colors.attention};
    `};
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
