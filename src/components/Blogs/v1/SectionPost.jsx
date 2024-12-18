import React from 'react'

const SectionPost = ({ id, styles = {}, content = {}, children }) => {
    return (
        <>
            <section id={id || "Posts"}
                className={`onixContainer scroll-mt-20 ${styles.Posts || "bg-transparent"}`}>
                {children ? (
                    children
                ) : (
                    <>
                        <div className='w-full flex flex-col justify-center items-start gap-5'>
                            <h2 className={styles.h2 || "text-3xl font-semibold"}>
                                {content.h2 || "Latest Posts"}
                            </h2>
                            <div className={`md:onixContainer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 ${styles.grid || ""}`}>
                                {
                                    content?.posts?.length > 1 ? (
                                        content?.posts?.map((post, index) => (
                                            <div key={index} className={`p-4 ${styles.containerDescription || "p-4 border rounded-lg"}`}>
                                                <img src={post._img} alt={`previuPost${index}`} className={styles._img || "w-full h-auto"} />
                                                <h3 className={`mt-2 ${styles._h3 || "font-semibold"}`}>{post._h3}</h3>
                                                <p className={styles._p}>{post._p}</p>
                                                <a href={post._path} target='_blank' className={styles._path || "underline text-blue-700"}>{post._namePath}</a>
                                            </div>
                                        ))
                                    ) : (
                                        [...Array(4)].map((_, index) => (
                                            <div key={index} className="p-4 border rounded-lg">
                                                <img src="/previuImg-2.png" alt={`previuPost-${index}`} className="w-full h-auto" />
                                                <h2 className="mt-2 text-lg font-semibold">Post {index + 1}</h2>
                                                <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi animi temporibus, officiis deserunt pariatur quae accusantium nam ipsum consequuntur eius quidem</p>
                                                <a href="#" className='underline text-blue-700'>Link</a>
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    </>
                )}
            </section >
        </>
    )
}

export default SectionPost