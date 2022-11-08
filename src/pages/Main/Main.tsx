import Sidebar from "@/Layout/Sidebar"
import Header from "@/Layout/Header"
import styled from 'styled-components'

const MainBox = styled.div`
width: 1700px;
height: 1050px;
background-color: salmon;

    
`

const Main = () => {

    return(<>
    <Header></Header>
    <MainBox>
    <div>메인 홈페이지</div>
    <Sidebar></Sidebar>
    </MainBox>
    </>)
}

export default Main