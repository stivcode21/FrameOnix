import React from "react";
import { HeaderBlog, FooterBlog, MainBlog, PostBlog, SectionAbout, ArticleBlog, ContactBlog } from "./utils";

const OnixBlog = ({ headerProps = {}, mainProps = {}, aboutProps = {}, articleProps = {}, contactProps = {}, postProps = {}, footerProps = {} }) => {

    return (
        <div className="min-h-screen flex flex-col gap-20 scroll-smooth">
            <HeaderBlog {...headerProps} />
            <MainBlog {...mainProps} />
            <PostBlog {...postProps} />
            <SectionAbout {...aboutProps} />
            <ArticleBlog {...articleProps} />
            <ContactBlog {...contactProps} />
            <FooterBlog {...footerProps} />
        </div>
    );
};

export default OnixBlog;
