
import Home from './pages/Home'
import Footer from './components/Footer'
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  align-items: center;
  flex: 1;
`;

function App() {

  return (
    <>
      <PageWrapper>
        <MainContent>
      <Home/>
      </MainContent>
      <Footer/>
    </PageWrapper>
    </>
  )
}

export default App
