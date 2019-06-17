import styled from 'styled-components';

const Title = styled.h3`
  margin: 0;
  padding: 10px 15px;
  text-align: center;
  margin-top: 0;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: white;
    display: flex;
    line-height: 1.3;
    font-size: 16pt;
    text-align: center;
    text-decoration: none;
    color: black;
    padding: 0 1rem;
  }
  a:hover {
    color: blue; 
  }
`;

export default Title;
