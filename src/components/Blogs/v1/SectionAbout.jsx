import React from 'react';
import styled from 'styled-components';


//styles
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  padding: 2.5rem 4%;
  scroll-margin-top: 4rem;
  ${({ $styles }) => $styles?.section && $styles.section}

  @media (min-width: 800px) {
    flex-direction: row-reverse;
    height: 100vh;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  ${({ $styles }) => $styles?.containerDescription && $styles.containerDescription}
   @media (min-width: 800px) {
      width: 50%;
      padding-left: 15px;
   }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
  ${({ $styles }) => $styles?.title && $styles.title}
`;

const Paragraph = styled.p`
  font-size: 1rem;
  ${({ $styles }) => $styles?.p && $styles.p}
`;

const Img = styled.img`
  object-fit: cover;
  object-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-height: 400px;
  ${({ $styles }) => $styles?.img && $styles.img}

  @media (min-width: 800px) {
    max-height: 500px;
    width: 50%;
  }
`;

//data
const defaultContent = {
    title: "About Me",
    img: "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FpreviuImg-3.png?alt=media&token=758762f3-d65c-4a21-afe9-2cc70ccf8511",
    paragraphs: [
        { p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur saepe impedit non explicabo aliquam nisi tenetur enim, hic ipsa deserunt cupiditate laborum consectetur quam, sunt nobis temporibus, quod error nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur saepe impedit non explicabo aliquam nisi tenetur enim, hic ipsa deserunt cupiditate laborum consectetur quam, sunt nobis temporibus, quod error nihil!" },
        { p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur saepe impedit non explicabo aliquam nisi tenetur enim, hic ipsa deserunt cupiditate laborum consectetur quam, sunt nobis temporibus, quod error nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur saepe impedit non explicabo aliquam nisi tenetur enim, hic ipsa deserunt cupiditate laborum consectetur quam, sunt nobis temporibus, quod error nihil!" },
    ],
};

const SectionAbout = ({ id, styles = {}, content = {}, children }) => {

    const mergedContent = {
        ...defaultContent,
        ...content
    };

    return (
        <Section id={id || "About"} $styles={styles} >
            {children ? (
                children
            ) : (
                <>
                    {/* Content Section */}
                    <ContentContainer $styles={styles}>
                        <Title $styles={styles}>{mergedContent.title}</Title>
                        <div>
                            {mergedContent.paragraphs?.length <= 3 && (
                                mergedContent.paragraphs.map((paragraph, index) => (
                                    <Paragraph key={index} $styles={styles}>
                                        {paragraph.p}
                                        <br /><br />
                                    </Paragraph>
                                ))
                            )}
                        </div>
                    </ContentContainer>

                    {/* Image Section */}
                    <Img
                        src={mergedContent.img}
                        alt="img-about"
                        $styles={styles}
                    />
                </>
            )
            }
        </Section >
    );
};

export default SectionAbout;
