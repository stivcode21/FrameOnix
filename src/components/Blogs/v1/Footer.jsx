import React from 'react'

const Footer = ({ id, styles = {}, content = {}, children }) => {
    return (
        <>
            <footer className={` py-2 ${styles.footer || 'bg-[#F3F4F6]'}`}>
                <div className="onixContainer">
                    {
                        children ? (children) : (

                            <div className={`flex justify-between items-center ${styles.containerDescription}`}>
                                <p className={styles.p || 'text-sm'}>
                                    {content.p || ` © ${new Date().getFullYear()} FramerOnix Este proyecto es de libre uso y distribución`}
                                </p>

                                <a href={id || "#Home"}>
                                    <div style={{ backgroundImage: `url('${content?.img || "/FrameOnixLogo.png"}')` }}
                                        className={`bg-cover bg-center bg-no-repeat ${styles.img || "w-12 h-12 rounded-lg"}`}>
                                    </div>
                                </a>
                            </div>

                        )}
                </div>
            </footer>
        </>
    )
}

export default Footer