import React from 'react';
import styled from 'styled-components';

//styles
const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 4%;
  scroll-margin-top: 4rem;
  ${({ $styles }) => $styles?.article && $styles.article}
`;

const DescriptionContainer = styled.div`
  width: 100%;
  ${({ $styles }) => $styles?.containerDescription && $styles.containerDescription}
`;

const Subtitle = styled.h2`
  font-weight: 700;
  text-align: end;
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-end;
  font-size: 28px;

  @media (min-width: 800px) 
    { font-size: 38px; };
  ${({ $styles }) => $styles?.title && $styles.title}
`;

const ImageSection = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('${({ $img }) => $img}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ${({ $styles }) => $styles?.img && $styles.img}
`;

const Article = styled.article`
  padding: 10px;
  width: 100%;
  @media (min-width: 800px) 
    { margin: 1rem;
      width: 50%; }
  ${({ $styles }) => $styles?.containerArticle && $styles.containerArticle}
`;

const ArticleTitle = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  @media (min-width: 800px)
   { font-size: 1.9rem; }
  ${({ $styles }) => $styles?._tittle && $styles._title}
`;

const ArticleText = styled.p`
 font-size: 0.8rem;
 @media (min-width: 800px) 
 { font-size: 1rem; }
  ${({ $styles }) => $styles?.description && $styles.description}
`;

//data
const defaultContent = {
  title: 'This is a default subtitle',
  img: 'https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FpreviuImg-1.png?alt=media&token=b1bdd884-faf6-461b-ace3-37c114043295',
  _title: 'Default Article',
  description: 'This is a default article description Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias odio, commodi maxime modi sunt quam molestias ea ipsum, assumenda saepe officia temporibus laudantium unde repellendus ducimus, velit dolores corrupti.'
};

const SectionArticle = ({ id, styles = {}, content = {}, children }) => {

  const mergedContent = {
    ...defaultContent,
    ...content
  };

  return (
    <Section id={id || "Blog"} $styles={styles}>
      {children ? (
        children
      ) : (
        <>
          {/* Description Section */}
          <DescriptionContainer $styles={styles}>
            <Subtitle $styles={styles}>{mergedContent.title}</Subtitle>
          </DescriptionContainer>

          {/* Image Section */}
          <ImageSection $img={mergedContent.img} $styles={styles}>
            {/* Article Content */}
            <Article $styles={styles}>
              <ArticleTitle $styles={styles}>{mergedContent._title}</ArticleTitle>
              <ArticleText $styles={styles}>
                {mergedContent.description}
              </ArticleText>
            </Article>
          </ImageSection>
        </>
      )}
    </Section>
  );
};

export default SectionArticle;
