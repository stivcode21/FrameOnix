import React from 'react';

const SectionPost = ({ id, styles = {}, content = {}, children }) => {
    return (
        <>
            <section id={id || "Posts"}
                className={`onixContainer scroll-mt-16 py-10 ${styles.posts || "bg-transparent"}`}>
                {children ? (
                    children
                ) : (
                    <>
                        {/* Section: Posts */}
                        <div className="w-full flex flex-col justify-center items-start gap-5">
                            <h2 className={styles.h2 || "text-4xl font-bold"}>
                                {content.h2 || "Latest Posts"}
                            </h2>
                            <div
                                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 ${styles.grid || ""}`}>
                                {content?.posts?.length > 1 ? (
                                    content.posts.map((post, index) => (
                                        <div
                                            key={index}
                                            className={`p-4 flex flex-col justify-between transition-all ease-in-out hover:scale-[1.01] ${styles.containerDescription || "border rounded-lg"}`}>
                                            <img
                                                src={post._img}
                                                alt={`previuPost${index}`}
                                                className={`w-full h-64 object-cover ${styles._img || "rounded-lg"}`}
                                            />
                                            <h3 className={`mt-2 ${styles._h3 || "font-semibold"}`}>
                                                {post._h3}
                                            </h3>
                                            <p className={styles._p}>
                                                {post._p}
                                            </p>
                                            <a
                                                href={post._path}
                                                target="_blank"
                                                className={`cursor-pointer ${styles._path || "underline text-blue-700 hover:text-gray-500"}`}>
                                                {post._namePath}
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    [...Array(4)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="p-4 border rounded-lg">
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FpreviuImg-2.png?alt=media&token=acfe8602-75e2-462a-9595-5f5dd761db78"
                                                alt={`previuPost-${index}`}
                                                className="w-full h-auto" />
                                            <h2 className="mt-2 text-lg font-semibold">
                                                Post {index + 1}
                                            </h2>
                                            <p className="mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi animi temporibus, officiis deserunt pariatur quae accusantium nam ipsum consequuntur eius quidem
                                            </p>
                                            <a
                                                href="#"
                                                className="underline text-blue-700">
                                                Link
                                            </a>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default SectionPost;
