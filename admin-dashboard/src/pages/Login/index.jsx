import React from 'react';

import Container from './styles';

export default function Login() {
  return (
    <Container>
        Usuario:
        <input  placeholder="usuario" />
        Senha:
        <input placeholder="senha" />
    </Container>
  );
}
