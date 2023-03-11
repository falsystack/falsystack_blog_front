import styled from "styled-components";
import Link from "next/link";

const Header = () => {
    return (
        <Container>
            <List>
                <Link href={'/blog'} >
                    <ListItem>Blog</ListItem>
                </Link>
                <Link href={'/resume'}>
                    <ListItem>Resume</ListItem>
                </Link>
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
  background-color: cadetblue;
  margin-bottom: 50px;
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