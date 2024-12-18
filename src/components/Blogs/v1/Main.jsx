import React from 'react'

const Main = ({ id, styles = {}, content = {}, children }) => {
    return (
        <>
            <main id={id || "Main"}
                className={`onixContainer scroll-mt-24 h-full mt-24 pt-5 md:h-screen md:mt-0 flex flex-col gap-5 items-center md:flex-row ${styles.main || 'bg-transparent'}`}>
                {children ? (
                    children
                ) : (
                    <>
                        <div className={`md:w-1/2 md:pr-10 h-[230px] flex flex-col justify-center items-start gap-5 ${styles.containerDescription}`}>
                            <h2 className={"text-5xl font-semibold text-center" || styles.h2}>
                                {content?.h2 || "Title Of Your Blog"}
                            </h2>
                            <p className={styles.p}>
                                {content?.p || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis vero, nihil similique veniam ad accusantium distinctio, suscipit cum itaque dicta ea ipsum vitae ipsam officiis officia error. Eveniet, consequatur"}
                            </p>
                            <a href={content?.path} className={`cursor-pointer rounded-md transition-all ease-in-out duration-100 ${styles.button || "bg-[#F3F4F6] hover:bg-[#c9c9c9] px-6 py-3"}`}>
                                {content?.button || "Learn More"}
                            </a>
                        </div>
                        <div className={`h-[400px] md:h-[500px] w-full md:w-1/2 flex flex-col justify-center items-center mt-5 ${styles.containerMedia}`}>
                            {content?.video ? (
                                <iframe
                                    src={content.video}
                                    title="Video"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="h-full w-full"
                                />
                            ) : (
                                <div
                                    style={{ backgroundImage: `url('${content?.img || "/previuVideo-1.png"}')` }}
                                    className={`bg-cover bg-center bg-no-repeat h-full w-full ${styles.img}`} role='img' >
                                </div>
                            )}
                        </div>
                    </>
                )}
            </main>
        </>
    )
}

export default Main
