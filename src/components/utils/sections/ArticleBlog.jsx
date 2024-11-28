import React from 'react'

const ArticleBlog = ({ id, styles, content, children }) => {
    return (
        <section id={id || "Blog"}
            className={`onixContainer scroll-mt-20 ${styles || "flex flex-col h-full"}`}>
            {children ? (
                children
            ) : (
                <>
                    <div style={{ backgroundImage: `url('${content?.img || "/previuImg-1.png"}')` }}
                        className={`bg-cover bg-center bg-no-repeat h-[400px] w-full flex flex-col justify-end items-start`}>
                        {content?.articles?.map((article, index) => (
                            <article key={index} className="p-4">
                                <h2 className="text-xl md:text-3xl font-semibold">{article.h2}</h2>
                                <p className='text-sm md:text-md'>{article.p}</p>
                            </article>
                        )) || (
                                <article className='p-6 w-[80%]'>
                                    <h2 className="text-2xl md:text-3xl font-semibold">Default Article</h2>
                                    <p className='text-sm md:text-md'>
                                        This is a default article description <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias odio, commodi maxime modi sunt quam molestias ea ipsum, assumenda saepe officia temporibus laudantium unde repellendus ducimus, velit dolores corrupti.
                                    </p>
                                </article>
                            )}
                    </div>
                    <div className='w-full md:w-1/2 mt-6'>
                        {content?.paragraphs?.map((paragraph, index) => (
                            <div key={index}>
                                <h3 className='text-xl md:text-2xl font-semibold'>
                                    {paragraph.h3}
                                </h3>
                                <p>
                                    {paragraph.p}
                                </p>
                            </div>
                        )) || (
                                <>
                                    <h3 className='text-xl md:text-2xl font-semibold'>
                                        This is a default subtitle
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae impedit maxime quibusdam, suscipit laudantium tenetur. Odit aliquam, quis molestias, cum vel dolor debitis sunt esse modi ex minima quo.
                                    </p>
                                </>
                            )}
                    </div>
                </>
            )}
        </section>
    )
}

export default ArticleBlog