import React from "react";
import styled from "styled-components";

const ContentBoxes1 = (props) => {
  const {
    images,
    titles,
    subtitles,
    texts,
    backgroundColor,
    textColor,
  } = props;

  const getOptionToLoopOver = () => {
    // finds the longest array out of the selected content data below and returns a object key
    const contentData = { titles, subtitles, texts, images };
    let longestArrayIndex = null;
    let longestArray = 0;

    Object.values(contentData).forEach((content, index) => {
      if (content?.length > longestArray) {
        longestArray = content.length;
        longestArrayIndex = index;
      }
    });
    return Object.keys(contentData)[longestArrayIndex];
  };

  return (
    <Container
      {...props}
      backgroundColor={backgroundColor}
      textColor={textColor}>
      {props[getOptionToLoopOver()].map((option, index) => {
        return (
          <Box>
            <ImageColumn>
              <Image src={images[index]} alt="contentpic" />
            </ImageColumn>
            <ContentColumn>
              {titles && <Title>{titles[index]}</Title>}
              {subtitles && <Subtitle>{subtitles[index]}</Subtitle>}
              {texts && <Text>{texts[index]}</Text>}
            </ContentColumn>
          </Box>
        );
      })}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  color: ${({ textColor }) => textColor && textColor};
`;
const Box = styled.div`
  flex-grow: 1;
  max-width: 300px;
  margin: 1rem;
`;

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  max-width: 80px;
  margin: 0 auto;
`;

const ContentColumn = styled.div`
  box-sizing: border-box;
  & :last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.h3`
  margin: 0rem;
  font-size: 1.75rem;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin: 0rem;
`;

const Text = styled.p`
  margin: 1rem 0;
  opacity: 0.7;
`;

export default ContentBoxes1;

ContentBoxes1.defaultProps = {
  images: [""],
  titles: [""],
  subtitles: [""],
  texts: [""],
  textColor: "",
};
