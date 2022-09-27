import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: flex-start;
  width: 30vw;
  border: 1px solid black;
  align-items: flex-start;
  padding-left: 20px;
`
export const MainHeading = styled.h1`
  color: #0070c1;
  margin-top: 20px;
`
export const Labler = styled.label`
  border-radius: 10px;
  padding: 5px;
  width: 80%;
`

export const inputEl = styled.input`
  padding: 5px;
  width: 80%;
`
export const selectElement = styled.select`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  font-size: medium;
`

export const ButtonEl = styled.button`
  background-color: #0070cc;
  color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  margin-top: 25px;
  border-radius: 10px;
`
export const DisplayContainer = styled.div`
  height: 40vh;
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin-top: 40%;
  padding-right: 10px;
  background-image: url(${props => props.bgImgUrl});
  background-size: cover;
`
export const ContentHeading = styled.h1`
  font-size: ${props => props.fontSize}px;
`
