import React from 'react'

const HeaderBlog = ({ id, styles, content, children }) => {
    return (
        <>
            <header className={`w-full fixed ${styles || 'bg-[#F3F4F6] py-2'}`}>
                {children ? children : (
                    <div className="onixContainer flex justify-between">
                        <a href={id || "#Home"}>
                            <div style={{ backgroundImage: `url('${content?.img || "/FrameOnixLogo.png"}')` }}
                                className={`bg-cover bg-center bg-no-repeat w-12 h-12 rounded-lg`}>
                            </div>
                        </a>
                        <div className="flex justify-center items-center text-sm md:text-lg font-normal gap-5 transition-all ease-in-out duration-500">
                            {content?.nav?.map((name, index) => (
                                <a href={`#${name}`} key={index} className=''>
                                    {name}
                                </a>
                            )) || (
                                    <>
                                        <a href='#Home' className='hover:scale-110 hover:text-slate-500'>Home</a>
                                        <a href='#Posts' className='hover:scale-110 hover:text-slate-500'>Posts</a>
                                        <a href='#About' className='hover:scale-110 hover:text-slate-500'>About</a>
                                        <a href='#Blog' className='hover:scale-110 hover:text-slate-500'>Blog</a>
                                        <a href='#Contact' className='hover:scale-110 hover:text-slate-500'>Contact</a>
                                    </>
                                )}
                        </div>
                        <div className="flex justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default HeaderBlog