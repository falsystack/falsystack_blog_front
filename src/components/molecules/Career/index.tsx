import styled from "styled-components";

export const Career = () => {

    return (
        <Container>
            <SideBar>
                Tomato
            </SideBar>
            <Main>
                Tomato is sucks
            </Main>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1024px;

`

const SideBar = styled.div`
  width: 30%;
  border-right: 1px solid cadetblue;
  padding-left: 10px;
`

const Main = styled.main`
  width: 70%;
  padding-left: 50px;
`