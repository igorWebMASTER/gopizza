import Input from '@components/Input';
import Button from '@components/Button';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';


import { Container  } from './styles';

export function SignIn(){
    return(
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Input 
                    placeholder="Email"
                    type="secondary"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                
                <Input 
                    placeholder="Senha"
                    type="secondary"
                    secureTextEntry
                />

                <Button 
                    title="Entrar"
                    type="secondary" 
                    onPress={() => console.log(`sas`)}
                    isLoading={false}
                />
            </KeyboardAvoidingView>
        </Container>
    )
}