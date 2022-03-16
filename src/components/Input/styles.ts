import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type TypeProps = 'primary' | 'secondary';

type Props = {
    type: TypeProps;
}

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
    placeholderTextColor: type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.PRIMARY_50,
}))`
    width: 100%;
    height: 60px;
    border-radius: 8px;
    padding: 0 16px;
    font-size: 14px;
    margin-bottom: 16px;

    ${({ theme, type }) => css`
        font-family: ${theme.FONTS.TEXT};
        border: 1px solid ${theme.COLORS.SHAPE};
        color: ${type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.TITLE};
    `};
`;