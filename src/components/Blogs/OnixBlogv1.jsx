import React from "react";
import Header from "./v1/Header";
import Main from "./v1/Main";
import SectionPost from "./v1/SectionPost";
import SectionAbout from "./v1/SectionAbout";
import SectionArticle from "./v1/SectionArticle";
import SectionContact from "./v1/SectionContact";
import Footer from "./v1/Footer"


const OnixBlogv1 = ({ styleOnixBlog, headerProps = {}, mainProps = {}, aboutProps = {}, articleProps = {}, contactProps = {}, postProps = {}, footerProps = {} }) => {

    return (
        <div className={`"min-h-screen flex flex-col gap-20 scroll-smooth" ${styleOnixBlog}`}>
            <Header {...headerProps} />
            <Main {...mainProps} />|
            <SectionPost {...postProps} />
            <SectionAbout {...aboutProps} />
            <SectionArticle {...articleProps} />
            <SectionContact {...contactProps} />
            <Footer {...footerProps} />
        </div>
    );
};

export default OnixBlogv1;
