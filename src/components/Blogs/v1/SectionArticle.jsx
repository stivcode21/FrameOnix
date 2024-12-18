import React from 'react'

const SectionArticle = ({ id, styles = {}, content = {}, children }) => {
    return (
        <section id={id || "Blog"}
            className={`onixContainer scroll-mt-20 flex flex-col h-full ${styles.article}`}>
            {children ? (
                children
            ) : (
                <>
                    <div className={`my-6 w-full md:w-1/2 ${styles.containerDescription}`}>
                        {(
                            <div>
                                <h2 className={`font-semibold ${styles.h2 || "text-xl md:text-2xl"}`}>
                                    {content.h2}</h2>
                                <p className={styles.p}>{content.p}</p>
                            </div>
                        ) || (
                                <div>
                                    <h2 className='text-xl md:text-2xl font-semibold'>
                                        This is a default subtitle
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae impedit maxime quibusdam, suscipit laudantium tenetur. Odit aliquam, quis molestias, cum vel dolor debitis sunt esse modi ex minima quo.
                                    </p>
                                </div>
                            )}
                    </div>
                    <div style={{ backgroundImage: `url('${content?.img || "/previuImg-1.png"}')` }} role='img'
                        className={`bg-cover bg-center bg-no-repeat flex flex-col justify-end items-start ${styles.img || 'h-[400px] w-full'}`}>
                        {content?.articles?.map((article, index) => (
                            <article key={index} className={`p-4 ${styles.containerArticles || "w-[80%]"}`}>
                                <h3 className={`font-semibold ${styles._h3 || "text-xl md:text-3xl"}`}>{article._h3}</h3>
                                <p className={styles._P || "text-sm md:text-md"}>{article._p}</p>
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

                </>
            )}
        </section>
    )
}

export default SectionArticle