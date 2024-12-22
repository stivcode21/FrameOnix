import React from 'react';

const SectionAbout = ({ id, styles = {}, content = {}, children }) => {
    return (
        <>
            <section id={id || "About"}
                className={`onixContainer scroll-mt-16 flex justify-center items-center gap-5 flex-col md:flex-row-reverse md:h-screen py-10 ${styles.about}`}>
                {children ? (
                    children
                ) : (
                    <>
                        {/* Content Section */}
                        <div className={`md:w-1/2 lg:pl-10 ${styles.containerDescription}`}>
                            <h2
                                className={`text-center mb-4 text-4xl lg:text-5xl ${styles.h2 || "font-extrabold uppercase"}`}>
                                {content?.h2 || "About Me"}
                            </h2>
                            <div className="flex justify-center gap-5 items-center flex-col">
                                {content?.paragraphs?.length > 0 ? (
                                    content.paragraphs.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className={`text-sm lg:text-lg ${styles.p}`} >
                                            {paragraph.p}
                                        </p>
                                    ))
                                ) : (
                                    <>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, totam dolor? Ea rem ipsa nemo molestias architecto eligendi qui amet libero incidunt aperiam vitae impedit voluptas voluptatibus, illo esse non.
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim dolore soluta sit nesciunt quas exercitationem consequuntur aspernatur eum fugit! Vel, nemo ut sequi praesentium commodi aperiam laudantium cumque quas.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam repellendus inventore voluptas mollitia cum sapiente accusamus velit tempora soluta, veniam nam provident, reiciendis eligendi officiis et assumenda, quaerat pariatur.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Image Section */}
                        <img
                            src={content?.img || "/previuImg-3.png"}
                            alt="img-about"
                            className={`object-cover object-center bg-no-repeat flex flex-col justify-center items-center ${styles.img || "h-[400px] md:h-[500px] w-full md:w-1/2"}`}
                        />
                    </>
                )}
            </section>
        </>
    );
};

export default SectionAbout;
