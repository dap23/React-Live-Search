import styled from 'styled-components';
import { useState } from 'react';
import { Course } from './data';

const Container = styled.div`
  height: 100%;
  padding: 1em 0;
`;

const Text = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  border: 1px solid;
  width: 300px;
  height: 100%;
  margin: 0 auto;
  padding: 1em;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  outline: none;
`;

const ListGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  margin-top: 30px;
`;

const List = styled.li`
  list-style: none;
  margin-bottom: 20px;
  border: 1px solid;
  padding: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

function App() {
  const [search, setSearch] = useState('');
  console.log(setSearch);
  return (
    <Container>
      <Text>Live search React</Text>
      <Wrapper>
        <Input
          placeholder='search'
          onChange={(e) => setSearch(e.target.value)}
        />
        <ListGroup>
          {Course.filter((v) => {
            if (v === '') {
              return v;
            } else if (v.toLowerCase().includes(search.toLowerCase())) {
              return v;
            }
            return null;
          }).map((e) => {
            return <List>{e}</List>;
          })}
        </ListGroup>
      </Wrapper>
    </Container>
  );
}

export default App;
