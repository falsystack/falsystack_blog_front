import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <List>
                <ListItem>Blog</ListItem>
                <ListItem>Resume</ListItem>
            </List>
        </Container>
    )
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: antiquewhite;
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  
  padding-inline: 20px;
  width: 150px;
  font-size: 16px;
  font-weight: 700;
`

const ListItem = styled.li`
`