import React from 'react';
import styled from 'styled-components';

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
  ${({ $styles }) => $styles?.h2 && $styles.h2}
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

const SectionAbout = ({ id, styles = {}, content = {}, children }) => {
    return (
        <Section id={id || "About"} $styles={styles} >
            {children ? (
                children
            ) : (
                <>
                    {/* Content Section */}
                    <ContentContainer $styles={styles}>
                        <Title $styles={styles}>{content?.h2 || "About Me"}</Title>
                        <div>
                            {content?.paragraphs?.length <= 3 ? (
                                content.paragraphs.map((paragraph, index) => (
                                    <Paragraph key={index} $styles={styles}>
                                        {paragraph.p}
                                    </Paragraph>
                                ))
                            ) : (
                                <>
                                    <Paragraph $styles={styles}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, totam dolor? Ea rem ipsa nemo molestias architecto eligendi qui amet libero incidunt aperiam vitae impedit voluptas voluptatibus, illo esse non.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim dolore soluta sit nesciunt quas exercitationem consequuntur aspernatur eum fugit! Vel, nemo ut sequi praesentium commodi aperiam laudantium cumque quas.
                                        <br /> <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam repellendus inventore voluptas mollitia cum sapiente accusamus velit tempora soluta, veniam nam provident, reiciendis eligendi officiis et assumenda, quaerat pariatur.
                                    </Paragraph>
                                </>
                            )}
                        </div>
                    </ContentContainer>

                    {/* Image Section */}
                    <Img
                        src={content?.img || "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FpreviuImg-3.png?alt=media&token=758762f3-d65c-4a21-afe9-2cc70ccf8511"}
                        alt="img-about"
                        $styles={styles}
                    />
                </>
            )}
        </Section>
    );
};

export default SectionAbout;
