import React from "react";
import Header from "./v1/Header";
import Main from "./v1/Main";
import SectionPost from "./v1/SectionPost";
import SectionAbout from "./v1/SectionAbout";
import SectionArticle from "./v1/SectionArticle";
import SectionContact from "./v1/SectionContact";
import Footer from "./v1/Footer"
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  ${({ $styleOnixBlogv1 }) => $styleOnixBlogv1}
`;



const OnixBlogv1 = ({ styleOnixBlogv1, headerProps = {}, mainProps = {}, aboutProps = {}, articleProps = {}, contactProps = {}, postProps = {}, footerProps = {} }) => {

    return (
        <>
            <GlobalStyle />
            <Container $styleOnixBlogv1={styleOnixBlogv1}>
                <Header {...headerProps} />
                <Main {...mainProps} />
                <SectionPost {...postProps} />
                <SectionAbout {...aboutProps} />
                <SectionArticle {...articleProps} />
                <SectionContact {...contactProps} />
                <Footer {...footerProps} />
            </Container>
        </>
    );
};

export default OnixBlogv1;
