import React from "react";
import { Doctor } from "../../components/Doctor";
import {
  Container,
  Texto
} from './styles'

export function Home(){
  return(
      <Container>
        <Doctor type="secondary"/>
      </Container>
  );
}