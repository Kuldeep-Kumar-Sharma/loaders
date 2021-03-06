import styled from "styled-components";

export const DotLoader = styled.div`
  flex: 1;
  width:50px;
  height:12px;
  background: radial-gradient(circle closest-side,currentColor 90%,#0000) 0 0/33% 100% space;
  clip-path: inset(0 100% 0 0);
  animation:d1 1s steps(4) infinite;

  @keyframes d1 {
      to
      {
        clip-path: inset(0 -34% 0 0)
    }
}
`;
