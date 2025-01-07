import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavLink from '../../utils/Navlink';

//styles
const ContainerHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 50;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: none;
  padding: 8px 4%;
  background: white;
  @media (min-width: 800px) {
    justify-content: space-between;
    align-items: center;
  }
  ${({ $styles }) => $styles?.header && $styles.header}
`;

const ContainerLogo = styled.div`
  ${({ $styles }) => $styles?.containerImg && $styles.containerImg}
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
  ${({ $styles }) => $styles?.img && $styles?.img}
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  ${({ $styles }) => $styles?.nav && $styles.nav}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border: 1px solid black; 
  color: black; 
  transition: color 0.2s ease, border-color 0.2s ease;
  &:hover {
    color: #ccc; 
    border-color: #ccc;
  }
  ${({ $styles }) => $styles?.button && $styles.button}
`;

const Ul = styled.ul`
  display: flex; 
  padding-top: 1rem; 
  padding-bottom: 1rem;
  flex-direction: column;
  align-items: center; 
  margin-top: 0; 
  @media (min-width: 800px) {
    padding-top: 0; 
    padding-bottom: 0; 
    flex-direction: row; 
    column-gap: 0.5rem;
  }
  ${({ $styles }) => $styles?.ul && $styles.ul}
`;

const Li = styled.li`
  display: block; 
  text-transform: uppercase; 
  padding: 0.5rem; 
  font-size: 1rem; 
  font-weight: 600; 
  &:hover {
    color: #ccc; 
    scale: 1.07;
  }
  ${({ $styles }) => $styles?.li && $styles.li}
`;

const MenuDestok = styled.div`
  display: none;
    @media (min-width: 800px) {
    display: block;
    width: auto;
  }
  ${({ $styles }) => $styles?.menuDestok && $styles.menuDestok}
`;

const ContainerButtons = styled.div`
    @media (min-width: 800px) {
    display: none;
  }
  ${({ $styles }) => $styles?.ContainerButtons && $styles.ContainerButtons}
`;

const MenuMobile = styled.div`
  background: white;
  ${({ $styles }) => $styles?.menuMobile && $styles.menuMobile}
`;


//data
const defaultContent = {
    img: "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/frameonix%2FFrameOnixLogo.png?alt=media&token=caeb140c-f605-4e3e-b023-e789e7dec315",
    navLinks: [
        {
            title: "Main",
            path: "#Main"
        },
        {
            title: "Posts",
            path: "#Posts"
        },
        {
            title: "About",
            path: "#About"
        },
        {
            title: "Blog",
            path: "#Blog"
        },
        {
            title: "Contact",
            path: "#Contact"
        }
    ]
}

const Header = ({ id, styles = {}, content = {}, children }) => {

    const [NavbarOpen, setNavbarOpen] = useState(false);
    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 50) {
            setNavState(true)
        } else {
            setNavState(false)
        }
    }

    //control de data
    const mergedContent = {
        ...defaultContent,
        ...content,
    };

    //evento scroll
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll)

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);

    const handleMenuClose = () => {
        setNavbarOpen(false); // Cambia el estado para cerrar el menú
    };

    return (
        <ContainerHeader>
            {children ? (
                children
            ) : (
                <>
                    <Container $styles={styles}
                        style={{ boxShadow: !navState ? 'none' : '0 4px 6px #ccc' }}>
                        {/* Logo */}
                        <ContainerLogo $styles={styles}>
                            <a href={id || '#Main'}>
                                <Img src={mergedContent.img} $styles={styles} alt="logo" />
                            </a>
                        </ContainerLogo>

                        {/* menu navegacion */}
                        <Navbar $styles={styles}>
                            {/* botones móvil */}
                            <ContainerButtons>
                                {!NavbarOpen ? (
                                    <Button $styles={styles}
                                        onClick={() => setNavbarOpen(true)}>
                                        <Menu size={26} />
                                    </Button>
                                ) : (
                                    <Button $styles={styles}
                                        onClick={() => setNavbarOpen(false)} >
                                        <X size={26} />
                                    </Button>
                                )}
                            </ContainerButtons>

                            {/* Menú de escritorio */}
                            <MenuDestok>
                                <Ul $styles={styles}>
                                    {mergedContent.navLinks.map((link, index) => (
                                        <Li key={index} $styles={styles}>
                                            <NavLink href={link.path} title={link.title} />
                                        </Li>
                                    ))}
                                </Ul>
                            </MenuDestok>
                        </Navbar>
                    </Container>

                    {/* Menú desplegable móvil */}
                    <MenuMobile $styles={styles}>
                        {NavbarOpen ? (
                            <Ul $styles={styles}>
                                {mergedContent.navLinks.map((link, index) => (
                                    <Li key={index} onClick={handleMenuClose} $styles={styles}>
                                        <NavLink href={link.path} title={link.title} />
                                    </Li>
                                ))}
                            </Ul>
                        ) : null}
                    </MenuMobile>
                </>
            )}
        </ContainerHeader>
    );
};

export default Header;
