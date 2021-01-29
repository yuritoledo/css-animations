import styled from 'styled-components'

const Header = styled.h1`
  color: green;
`

const Container = styled.div`
  display: grid;
  place-items: center;
  background-color: red;
`

const Page = () => {
  return (
    <Container>
      <Header>asdasd</Header>
    </Container>
  )
}

export default Page