import React from 'react'

const Header = ({ id, styles = {}, content = {}, children }) => {
    return (
        <>
            <header className={`w-full fixed py-2 ${styles.header || "bg-[#F3F4F6]"}`}>
                {children ? children : (
                    <div className="onixContainer flex justify-between">
                        <div className={styles.containerImg}>
                            <a href={id || "#Home"}>
                                <div style={{ backgroundImage: `url('${content?.img || "/FrameOnixLogo.png"}')` }}
                                    className={`bg-cover bg-center bg-no-repeat  ${styles.img || "w-12 h-12"}`}>
                                </div>
                            </a>
                        </div>
                        <div className={`flex justify-center items-center gap-5 transition-all ease-in-out duration-500`}>
                            {content?.nav?.map((name, index) => (
                                <a href={`#${name}`} key={index} className={styles.nav || "text-sm md:text-lg font-normal"}>
                                    {name}
                                </a>
                            )) || (
                                    <div className='flex justify-center items-center gap-5 text-sm md:text-lg font-normal'>
                                        <a href='#Main' className='hover:scale-110 hover:text-slate-500'>Main</a>
                                        <a href='#Posts' className='hover:scale-110 hover:text-slate-500'>Posts</a>
                                        <a href='#About' className='hover:scale-110 hover:text-slate-500'>About</a>
                                        <a href='#Blog' className='hover:scale-110 hover:text-slate-500'>Blog</a>
                                        <a href='#Contact' className='hover:scale-110 hover:text-slate-500'>Contact</a>
                                    </div>
                                )}
                        </div>
                        <div className={`flex justify-center items-center gap-1 md:gap-4`}>
                            {
                                content?.icon ? (
                                    <div key={index} className={styles.icon}>
                                        {content.icon}
                                    </div>
                                ) : (
                                    <div className='transition-all ease-in-out hover:scale-110 hover:cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default Header