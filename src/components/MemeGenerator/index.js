import {Component} from 'react'
import './index.css'

import {
  MainContainer,
  InnerContainer,
  MainHeading,
  Labler,
  ButtonEl,
  DisplayContainer,
  ContentHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    fontSize: fontSizesOptionsList[0].displayText,
    imageUrl: '',
    topText: '',
    bottomText: '',
    display: false,
  }

  updateImageUrl = event => {
    this.setState({imageUrl: event.target.value, display: false})
  }

  updateTopText = event => {
    this.setState({topText: event.target.value, display: false})
  }

  updateBottomText = event => {
    this.setState({bottomText: event.target.value, display: false})
  }

  updateFontSize = event => {
    this.setState({fontSize: event.target.value, display: false})
  }

  initiateGeneration = () => {
    this.setState({display: true})
  }

  generateImage = () => {
    const {fontSize, imageUrl, topText, bottomText, display} = this.state
    if (display) {
      return (
        <DisplayContainer bgImgUrl={imageUrl}>
          <ContentHeading fontSize={fontSize}>{topText}</ContentHeading>
          <ContentHeading fontSize={fontSize}>{bottomText}</ContentHeading>
        </DisplayContainer>
      )
    }
    return null
  }

  render() {
    return (
      <MainContainer>
        <InnerContainer>
          <MainHeading>Meme Generator</MainHeading>
          <Labler htmlFor="ImgUrl">Image URL</Labler>
          <input
            id="ImgUrl"
            className="inputContainer"
            type="text"
            placeholder="Enter the Image URL"
            onChange={this.updateImageUrl}
          />
          <Labler htmlFor="TopText">Top Text</Labler>
          <input
            id="TopText"
            className="inputContainer"
            type="text"
            placeholder="Enter the Top Text"
            onChange={this.updateTopText}
          />
          <Labler htmlFor="BottomText">Bottom Text</Labler>
          <input
            id="BottomText"
            className="inputContainer"
            type="text"
            placeholder="Enter the Bottom Text"
            onChange={this.updateBottomText}
          />
          <Labler htmlFor="selectContainer">Font Size</Labler>
          <select
            className="selectElement"
            onChange={this.updateFontSize}
            id="selectContainer"
          >
            {fontSizesOptionsList.map(each => (
              <option>{each.displayText}</option>
            ))}
          </select>

          <ButtonEl onClick={this.initiateGeneration}>Generate</ButtonEl>
        </InnerContainer>
        <InnerContainer>{this.generateImage()}</InnerContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
