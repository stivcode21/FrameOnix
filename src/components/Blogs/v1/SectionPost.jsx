import { MoveUpRight } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  scroll-margin-top: 4rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  padding: 0 4%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
  ${({ $styles }) => $styles?.posts && $styles.posts}
`;

const Heading = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  ${({ $styles }) => $styles?.h2 && $styles.h2}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  ${({ $styles }) => $styles?.grid && $styles.grid}
`;

const PostCard = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  &:hover {
    transform: scale(1.01);
  }
  ${({ $styles }) => $styles?.containerDescription && $styles.containerDescription}
`;

const Img = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 0.5rem;
  ${({ $styles }) => $styles?._img && $styles._img}
`;

const PostHeading = styled.h3`
  margin-top: 0.5rem;
  font-weight: 600;
  ${({ $styles }) => $styles?._h3 && $styles._h3}
`;

const PostDescription = styled.p`
  margin-bottom: 4px;
  ${({ $styles }) => $styles?._p && $styles._p}
`;

const PostLink = styled.a`
  width: fit-content;
  margin-left: auto;
  position: relative;
  border-radius: 4px;
  font-size: 19px;
  font-weight: 600;
  cursor: pointer;
  text-align: end;
  padding: 0px 20px;
  color: #000;
  transition: transform 0.2s ease-in-out;
  &:hover {
    color: #6b7280;
    & > div {
      bottom: 8px;
    }
  }
  ${({ $styles }) => $styles?._path && $styles._path}
`;

const ArrowRight = styled.div`
 position: absolute;
 right: 0%;
 bottom: 4px;
 transition: transform 0.2s ease-in-out;
`

const SectionPost = ({ id, styles = {}, content = {}, children }) => {
  return (
    <Section id={id || "Posts"}>
      {children ? (
        children
      ) : (
        <Container $styles={styles}>
          <Heading $styles={styles}>{content.h2 || "Latest Posts"}</Heading>
          <Grid $styles={styles}>
            {content?.posts?.length > 1 ? (
              content.posts.map((post, index) => (
                <PostCard key={index} $styles={styles}>
                  <Img
                    src={post._img}
                    alt={`previuPost${index}`}
                    $styles={styles}
                  />
                  <PostHeading $styles={styles}>{post._h3}</PostHeading>
                  <PostDescription $styles={styles}>{post._p}</PostDescription>
                  <PostLink
                    href={post._path}
                    target="_blank"
                    $styles={styles}>
                    {post._namePath}
                    <ArrowRight>
                      <MoveUpRight size={20} strokeWidth={3} />
                    </ArrowRight>
                  </PostLink>
                </PostCard>
              ))
            ) : (
              [...Array(4)].map((_, index) => (
                <PostCard key={index}>
                  <Img
                    src="https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FpreviuImg-2.png?alt=media&token=acfe8602-75e2-462a-9595-5f5dd761db78"
                    alt={`previuPost-${index}`}
                  />
                  <PostHeading>Post {index + 1}</PostHeading>
                  <PostDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias eligendi animi temporibus, officiis deserunt pariatur
                    quae accusantium nam ipsum consequuntur eius quidem
                  </PostDescription>
                  <PostLink href="#">Link
                    <ArrowRight>
                      <MoveUpRight size={20} strokeWidth={3} />
                    </ArrowRight>
                  </PostLink>
                </PostCard>
              ))
            )}
          </Grid>
        </Container>
      )}
    </Section>
  );
};

export default SectionPost;
