import React from "react";
import { Doctor } from "../../components/Doctor";

import {
  Container,
  List,
} from './styles'

const DATA = [
  {id: '1', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '2', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '3', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '4', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '5', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '6', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '7', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '8', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '9', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
  {id: '10', avatar: 'https://github.com/tayserosa.png', name:'Tayse', specialist:'neuro'},
];

export function Home(){
  return(
      <Container>
        <List 
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item })=> <Doctor type="primary" data={item} />}
          numColumns={2}
        />
      </Container>
  );
}