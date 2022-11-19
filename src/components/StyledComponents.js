import styled from 'styled-components'

export const HomepageBackground = styled.div`
  height: 100vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
  @media screen and (max-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
  }
  background-size: cover;
`

export const Hr = styled.hr`
  border: 1.9px solid #b6c5ff;
  background-color: #b6c5ff;
  width: 100%;
`
