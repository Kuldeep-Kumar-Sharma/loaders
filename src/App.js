import styled from "styled-components"
import { Navigation } from './components/Navigation';
import { BasicLoader } from "./loaders/BasicLoader";
import { DotLoader } from "./loaders/DotLoader";
import { ProgressLoader } from "./loaders/ProgressLoader";
function App() {
  return (
    <>
      <Navigation title="Styled Loaders.." />
      <Layout>
        <h1>Basic Loader</h1>
        <BasicLoader />
        <h1>Dot Loader</h1>
        <DotLoader />
        <h1>Progress Loader</h1>
        <ProgressLoader />
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
