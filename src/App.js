import styled from "styled-components"
import { Navigation } from './components/Navigation';
import { BasicLoader } from "./loaders/BasicLoader";

function App() {
  return (
    <>
      <Navigation title="Styled Loaders.." />
      <Layout>
        <h1>Basic Loader</h1>
        <BasicLoader />
      </Layout>
    </>
  );
}
      

const Layout = styled.div`
  flex-direction: column;
  max-width: 60em;
  margin: 0 auto;
`;


      


export default App;
