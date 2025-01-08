import React from 'react';
import styled from 'styled-components';

//styles
const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 5rem 4%;
  justify-content: center;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 10px;
    padding: 11rem 4%;
  }
  ${({ $styles }) => $styles?.main && $styles.main}
`;

const DescriptionContainer = styled.div`
  width: 100%;
  flex: 1;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  @media (min-width: 800px) {
    height: 230px;
  }
  ${({ $styles }) => $styles?.containerDescription && $styles.containerDescription}
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 14px 0;

  @media (min-width: 800px) {
    font-size: 3rem;
    line-height: 3rem;
  }
  ${({ $styles }) => $styles?.title && $styles.title}
`;

const Paragraph = styled.p`
  ${({ $styles }) => $styles?.description && $styles.description}
`;

const Button = styled.a`
  width: fit-content;
  padding: 12px 24px;
  border-radius: 8px;
  margin: 6px 0;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  background: #ccc;

  &:hover {
    transform: scale(1.05);
    background: #aaa;
  }
  ${({ $styles }) => $styles?.button && $styles.button}
`;

const MediaContainer = styled.div`
  width: 100%;
  flex: 1;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    height: 400px;
  }
  ${({ $styles }) => $styles?.containerMedia && $styles.containerMedia}
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  ${({ $styles }) => $styles?.img && $styles.img}
`;

// Default data
const defaultContent = {
  title: "Title Of Your Blog",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis vero, nihil similique veniam ad accusantium distinctio, suscipit cum itaque dicta ea ipsum vitae ipsam officiis officia error. Eveniet, consequatur",
  button: "Learn More",
  path: "#",
  img: "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FpreviuVideo-1.png?alt=media&token=e09c7b4b-b24a-4a10-be6b-d00084b932dd",
};

const Main = ({ id, styles = {}, content = {}, children }) => {
  // Merge default
  const mergedContent = {
    ...defaultContent,
    ...content
  };

  return (
    <MainContainer id={id || 'Main'}>
      {children ? (
        children
      ) : (
        <Container $styles={styles}>
          {/* Description Section */}
          <DescriptionContainer $styles={styles}>
            <Title $styles={styles}>{mergedContent.title}</Title>
            <Paragraph $styles={styles}>{mergedContent.description}</Paragraph>
            <Button href={mergedContent.path} $styles={styles}>
              {mergedContent.button}
            </Button>
          </DescriptionContainer>

          {/* Media Section */}
          <MediaContainer $styles={styles}>
            {content?.video ? (
              <iframe
                src={`${content.video}?autoplay=1&mute=1`}
                title="Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ width: '100%', height: '400px' }}
              />
            ) : (
              <Img $styles={styles} src={mergedContent.img} alt="preview" />
            )}
          </MediaContainer>
        </Container>
      )}
    </MainContainer>
  );
};

export default Main;
