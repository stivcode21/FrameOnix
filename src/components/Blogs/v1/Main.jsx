import React from 'react';
import styled from 'styled-components';

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
  ${({ $styles }) => $styles?.main && $styles.main}

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 10px;
    padding: 11rem 4%;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  flex: 1;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  ${({ $styles }) => $styles?.containerDescription && $styles.containerDescription}

  @media (min-width: 768px) {
    height: 230px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 14px;
  ${({ $styles }) => $styles?.h1 && $styles.h1}

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Paragraph = styled.p`
  ${({ $styles }) => $styles?.p && $styles.p}
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
  ${({ $styles }) => $styles?.containerMedia && $styles.containerMedia}

  @media (min-width: 768px) {
    height: 400px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  ${({ $styles }) => $styles?.img && $styles.img}
`;

const Main = ({ id, styles = {}, content = {}, children }) => {
  return (
    <MainContainer id={id || 'Main'}>
      {children ? (
        children
      ) : (
        <Container $styles={styles}>
          {/* Description Section */}
          <DescriptionContainer $styles={styles}>
            <Title $styles={styles}>{content?.h1 || "Title Of Your Blog"}</Title>
            <Paragraph $styles={styles}>
              {content?.p || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis vero, nihil similique veniam ad accusantium distinctio, suscipit cum itaque dicta ea ipsum vitae ipsam officiis officia error. Eveniet, consequatur"}
            </Paragraph>
            <Button
              href={content?.path}
              $styles={styles}>
              {content?.button || "Learn More"}
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
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <Img $styles={styles} src={content?.img || "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FpreviuVideo-1.png?alt=media&token=e09c7b4b-b24a-4a10-be6b-d00084b932dd"} alt='previu' />
            )}
          </MediaContainer>
        </Container>
      )}
    </MainContainer>
  );
};

export default Main;
