import React from 'react';
import styled from 'styled-components';

function Mainboard() {
  return (
    <Wrapper>

      <Container></Container>

    </Wrapper>
  )
}

export default Mainboard

const Wrapper = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  background-color: purple;
`