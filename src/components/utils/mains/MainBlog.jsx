import React from 'react'

const MainBlog = ({ id, styles, content, children }) => {
    return (
        <>
            <section id={id || "Home"}
                className={`onixContainer scroll-mt-24 ${styles || 'h-full mt-24 md:h-screen md:mt-0 flex gap-5 flex-col items-center md:flex-row'}`}>
                {children ? (
                    children
                ) : (
                    <>
                        <div className='md:w-1/2 md:pr-10 h-[230px] flex flex-col justify-between items-start'>
                            <h2 className='text-5xl font-semibold'>
                                {content?.h2 || "Title Of Your Blog"}
                            </h2>
                            <p className=''>
                                {content?.p || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo debitis vero, nihil similique veniam ad accusantium distinctio, suscipit cum itaque dicta ea ipsum vitae ipsam officiis officia error. Eveniet, consequatur"}
                            </p>
                            <a href={content?.path} className='rounded-md px-6 py-3 bg-[#F3F4F6] hover:bg-[#c9c9c9] transition-all ease-in-out duration-100'>
                                {content?.button || "Learn More"}
                            </a>
                        </div>
                        <div style={{ backgroundImage: `url('${content?.img || "/previuVideo-1.png"}')` }}
                            className='bg-cover bg-center bg-no-repeat h-[300px] md:h-[500px] w-full md:w-1/2 flex flex-col justify-center items-center'>
                        </div>
                    </>
                )}
            </section>
        </>
    )
}

export default MainBlog