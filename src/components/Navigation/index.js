import styled from 'styled-components';

export function Navigation(props) {
    return (
      <Wrapper>
        <Header>
            <H1>{props.title}</H1>
        </Header>
      </Wrapper>
    );
}

const Wrapper = styled.div`
	max-width: 60em;
	margin: 0 auto;
`;

/* Styling the header */

const Header = styled.header`
  background: linear-gradient(to right, #396afc, #2948ff);
  @media (min-width: 769px) {
    padding: 0.35em;
    width: 100%;
  }
`;

const H1 = styled.h1`
    color: white;
    @media (min-width: 200px) and (max-width: 480px ) {
		margin-top: 0;
		padding: .25em;
		text-align: center;
	}
    @media (min-width: 481px) and (max-width: 768px) {
        margin-top: 0;
		padding: .60em;
		text-align: center;
    }
    @media (min-width: 769px) {
        display: inline;
		margin-top: 0;
    }
`;

