import styled from "styled-components";

export const ProgressLoader = styled.div`
  flex: 1;
  width:120px;
  height:20px;
  background:
  linear-gradient(#000 0 0) left/0% 100% no-repeat #ddd;
  animation:p1 2s infinite linear;

  @keyframes p1 {
    100% {
      background-size:100% 100%
    }
  }
`;