import React from 'react'

const FooterBlog = ({ id, styles, content, children }) => {
    return (
        <>
            <footer className={`${styles || 'bg-[#F3F4F6] py-2'}`}>
                {
                    children ? (children) : (
                        <div className="onixContainer">
                            <div className="container mx-auto flex justify-between items-center">
                                <p className="text-sm">
                                    © {new Date().getFullYear()} {content?.name || "FramerOnix Este proyecto es de libre uso y distribución"}
                                </p>

                                <a href={id || "#Home"}>
                                    <div style={{ backgroundImage: `url('${content?.img || "/FrameOnixLogo.png"}')` }}
                                        className={`bg-cover bg-center bg-no-repeat w-12 h-12 rounded-lg`}>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                }
            </footer>
        </>
    )
}

export default FooterBlog