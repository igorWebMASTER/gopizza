import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
    type: TypeProps;
}

export const Container = styled(RectButton) <ContainerProps>`
    flex:1;
    width: 100%;
    max-height: 56px;
    min-height: 56px;   
    border-radius: 12px;
    justify-content: center;
    align-items: center;

    background: ${({ theme, type }) => type === 'primary' ? 
    theme.COLORS.PRIMARY_900 : theme.COLORS.PRIMARY_800};
`;

export const Title = styled.Text`
    color: 14px;


    ${({ theme }) => css`
        color: ${theme.COLORS.TITLE};
        font-family: ${theme.FONTS.TEXT};
    `} 
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({

}))``;  
