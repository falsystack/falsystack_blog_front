import {Career} from "@/components/molecules/Career";
import styled from "styled-components";

const Resume = () => {
    return (
        <Container>
            <Header>
                <div>
                    <Title>こんにちは、{"\n"}私はユンと申します。</Title>
                    서울에서 7년차 웹 프론트엔드 엔지니어로 일하고 있으며 아름다운 인터페이스와 애니메이션을 구현하는 것을 좋아합니다. 개발자의 가치는 비즈니스 가치를 구현하는데서 나온다고 믿습니다.
                    주도적으로 업무를 진행할 수 있는 환경을 선호합니다.
                </div>
            </Header>
            <Career/>
            <Career/>
            <Career/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 800px;
  height: 100%;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 453px;
  width: 100%;
  text-align: start;
`

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.2;
  white-space: pre-line;
`

export default Resume;