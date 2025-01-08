import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

//styles
const Section = styled.section`
  padding: 50px 4%;
  background: #ccc;
  ${({ $styles }) => $styles?.contact && $styles.contact};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-end;
  }
  ${({ $styles }) => $styles?.containerContent && $styles.containerContent};
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2.5rem;
  ${({ $styles }) => $styles?.title && $styles.title};
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 0.5rem;
  ${({ $styles }) => $styles?.containerIcons && $styles.containerIcons};
`;

const IconLink = styled.a`
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
    color: #aaa;
  }
  ${({ $styles }) => $styles?.icon && $styles.icon};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 1rem;
  padding: 0;

  @media (min-width: 800px) {
    width: 50%;
    padding: 0 1.5rem;
  }
  ${({ $styles }) => $styles?.form && $styles.form};
`;

const FormTitle = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  ${({ $styles }) => $styles?._title && $styles._title};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  background: #e2e8f0;
  color: #4a5568;
  ${({ $styles }) => $styles?.input && $styles.input};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  border-radius: 8px;
  background: #e2e8f0;
  color: #4a5568;
  ${({ $styles }) => $styles?.textArea && $styles.textArea};
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background: black;
  color: white;
  &:hover {
    background: #1a202c;
  }
  ${({ $styles }) => $styles?.button && $styles.button};
`;

// Default data
const defaultContent = {
  title: 'Follow Us',
  _title: 'CONTACT',
  button: 'Contact Us'
};

const SectionContact = ({ id, styles = {}, content = {}, children }) => {

  const mergedContent = {
    ...defaultContent,
    ...content
  };

  return (
    <Section id={id || "Contact"} $styles={styles}>
      {children ? (
        children
      ) : (
        <Container $styles={styles}>
          {/* container Icons */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title $styles={styles}>{mergedContent.title}</Title>
            <IconsContainer $styles={styles}>
              {content?.icons ? (
                content.icons.map((icon, index) => (
                  <IconLink key={index} href={icon.path} $styles={styles}>
                    {icon.icon}
                  </IconLink>
                ))
              ) : (
                <>
                  {/* Default Icons */}
                  <IconLink $styles={styles}>
                    <Facebook size={40} />
                  </IconLink>
                  <IconLink $styles={styles}>
                    <Instagram size={40} />
                  </IconLink>
                  <IconLink $styles={styles}>
                    <Github size={40} />
                  </IconLink>
                  <IconLink $styles={styles}>
                    <Twitter size={40} />
                  </IconLink>
                </>
              )}
            </IconsContainer>
          </div>

          {/* Contact Form */}
          <Form $styles={styles}>
            <FormTitle $styles={styles}>{mergedContent._title}</FormTitle>
            <Input
              type="text"
              placeholder={content?.placeholderA || "Name"}
              $styles={styles} />
            <TextArea
              placeholder={content?.placeholderB || "Message"}
              $styles={styles}></TextArea>
            <Button type="submit" $styles={styles}>
              {mergedContent.button}
            </Button>
          </Form>
        </Container>
      )}
    </Section>
  );
};

export default SectionContact;
