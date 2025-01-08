import React from 'react';
import styled from 'styled-components';

//styles
const FooterContainer = styled.footer`
  padding: 0.5rem 4%;
  background: #ccc;
  border-top: 1px solid #888;
  ${({ $styles }) => $styles?.footer && $styles.footer}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ $styles }) => $styles?.containerDescription && $styles.containerDescription}
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  ${({ $styles }) => $styles?.description && $styles.description}
`;

const Img = styled.img`
  object-fit: cover;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  ${({ $styles }) => $styles?.img && $styles.img}
`;

const Footer = ({ id, styles = {}, content = {}, children }) => {
  return (
    <FooterContainer $styles={styles}>
      {children ? (
        children
      ) : (
        <Container $styles={styles}>
          <Paragraph $styles={styles}>
            {content?.description || `© ${new Date().getFullYear()} FramerOnix Este proyecto es de libre uso y distribución`}
          </Paragraph>

          <a href={id || "#Main"}>
            <Img
              src={content?.img || 'https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FFrameOnixLogo.png?alt=media&token=caeb140c-f605-4e3e-b023-e789e7dec315'}
              $styles={styles}
              alt='logo' />
          </a>
        </Container>
      )}
    </FooterContainer>
  );
};

export default Footer;
