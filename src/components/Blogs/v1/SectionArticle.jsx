import React from 'react';

const SectionArticle = ({ id, styles = {}, content = {}, children }) => {
    return (
        <section id={id || "Blog"}
            className={`onixContainer scroll-mt-16 flex flex-col justify-center items-center py-16 h-full ${styles.article}`}>
            {children ? (
                children
            ) : (
                <>
                    {/* Description Section */}
                    <div className={`w-full ${styles.containerDescription}`}>
                        <div>
                            <h2 className={`font-semibold md:w-1/2 ml-auto text-end ${styles.h2 || "text-xl md:text-2xl"}`}>
                                {content.h2 || "This is a default subtitle"}
                            </h2>
                            <p className={`md:w-1/2 ml-auto mb-4 text-end ${styles.p}`}>
                                {content.p || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae impedit maxime quibusdam, suscipit laudantium tenetur. Odit aliquam, quis molestias, cum vel dolor debitis sunt esse modi ex minima quo"}
                            </p>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div style={{ backgroundImage: `url('${content?.img || "/previuImg-1.png"}')` }}
                        role="img"
                        className={`bg-cover bg-center bg-no-repeat flex flex-col justify-end items-start ${styles.img || "h-[400px] w-full"}`}>
                        {/* Article Content */}
                        <article className={`m-2 ${styles.containerArticle || "w-[50%] md:m-4"}`}>
                            <h3 className={`font-semibold text-2xl ${styles.h3 || "md:text-3xl"}`}>
                                {content.h3 || "Default Article"}
                            </h3>
                            <p className={styles.text || "text-sm md:text-md"}>
                                {content.text || "This is a default article description Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias odio, commodi maxime modi sunt quam molestias ea ipsum, assumenda saepe officia temporibus laudantium unde repellendus ducimus, velit dolores corrupti."}
                            </p>
                        </article>
                    </div>
                </>
            )}
        </section>
    );
};

export default SectionArticle;
