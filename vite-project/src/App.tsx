import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Main from './views/Main';
import FlowPage from './views/FlowPage';
import FlowSample from './views/FlowSample';
import TabSample from './views/TabSample';

const Wrap = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    overflow: hidden;
`

const Content = styled.div`
    height: 100%;
`
function RouteWrap(){
    return (
        <>
        <Wrap>
            <Header />
            <Content>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/flowPage" element={<FlowPage/>}></Route>
                    <Route path="/flowSample" element={<FlowSample/>}></Route>
                    <Route path="/tabSample" element={<TabSample/>}></Route>
                </Routes>
            </Content>
        </Wrap>
        </>
    )
}

function App(){
    return (
        <BrowserRouter>
            <RouteWrap />
        </BrowserRouter>
    );
};

export default App;