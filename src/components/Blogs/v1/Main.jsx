import React from 'react';

const Main = ({ id, styles = {}, content = {}, children }) => {
    return (
        <>
            <main id={id || "Main"}
                className={`onixContainer scroll-mt-24 py-5 md:h-screen flex flex-col gap-16 md:gap-5 items-center justify-center md:flex-row ${styles.main || 'bg-transparent'}`}>
                {children ? (
                    children
                ) : (
                    <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                        {/* Section: Description */}
                        <div className={`md:w-1/2 md:pr-10 md:h-[230px] flex flex-col justify-center items-start gap-5 ${styles.containerDescription}`}>
                            <h1 className={`text-4xl md:text-5xl mt-14 md:mt-0 ${styles.h1 || "font-extrabold uppercase"}`}>
                                {content?.h1 || "Title Of Your Blog"}
                            </h1>
                            <p className={styles.p}>
                                {content?.p || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis vero, nihil similique veniam ad accusantium distinctio, suscipit cum itaque dicta ea ipsum vitae ipsam officiis officia error. Eveniet, consequatur"}
                            </p>
                            <a
                                href={content?.path}
                                className={`cursor-pointer rounded-md transition-all ease-in-out duration-100 px-6 py-3 ${styles.button || "bg-[#ccc] hover:bg-[#999]"}`}>
                                {content?.button || "Learn More"}
                            </a>
                        </div>

                        {/* Section: Media */}
                        <div className={`h-[300px] md:h-[400px] w-full md:w-1/2 flex flex-col justify-center items-center ${styles.containerMedia}`}>
                            {content?.video ? (
                                <iframe
                                    src={`${content.video}?autoplay=1&mute=1`}
                                    title="Video"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className={`h-full w-full rounded-lg ${styles.video}`}
                                />
                            ) : (
                                <div
                                    style={{ backgroundImage: `url('${content?.img || "/previuVideo-1.png"}')` }}
                                    className={`bg-cover bg-center bg-no-repeat h-full w-full ${styles.img}`}
                                    role="img"
                                />
                            )}
                        </div>
                    </div>
                )}
            </main>
        </>
    );
};

export default Main;
