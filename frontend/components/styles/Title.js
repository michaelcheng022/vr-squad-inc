import styled from 'styled-components';

const Title = styled.h3`
  margin: 0;
  text-align: center;
  margin-top: 0;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${props => props.theme.red};
    display: inline;
    line-height: 1.3;
    font-size: 14pt;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;

export default Title;
