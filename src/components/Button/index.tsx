import { ButtonProps } from 'react-native'
import React from 'react'
import { Container, Loading, Title, TypeProps } from './styles'


type Props = ButtonProps & {
    type?: TypeProps;
    title?: string;
    isLoading?: boolean;
}

export default function Button({ 
    title,
    type, 
    isLoading = false, 
    ...rest
 }: Props) {
  return (
    <Container type={type} {...rest} enabled={!isLoading} >
        {isLoading ? <Loading /> :
         <Title>
            {title}     
        </Title>}
    </Container>
  )
}