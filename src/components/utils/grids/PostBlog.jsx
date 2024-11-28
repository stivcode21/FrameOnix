import React from 'react'

const PostBlog = ({ id, styles, content, children }) => {
    return (
        <>
            <section id={id || "Posts"}
                className={`onixContainer scroll-mt-20 ${styles || "flex flex-col h-full"}`}>
                {children ? (
                    children
                ) : (
                    <>
                        <div className='w-full flex flex-col justify-center items-start'>
                            <h1 className='text-2xl font-semibold mb-4'>Latest Posts</h1>
                            <div className="md:onixContainer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8">
                                {
                                    content?.posts?.length > 3 ? (
                                        content?.posts?.map((post, index) => (
                                            <div key={index} className="mb-8 p-4 border rounded-lg">
                                                <img src={post.img} alt={`previuPost${index}`} className="w-full h-auto" />
                                                <h2 className="mt-2 font-semibold">{post.h2}</h2>
                                                <p className=''>{post.p}</p>
                                                <a href={post.path} target='_blank' className='underline'>{post.name}</a>
                                            </div>
                                        ))
                                    ) : (
                                        [...Array(4)].map((_, index) => (
                                            <div key={index} className=" p-4 border rounded-lg">
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

export default PostBlog