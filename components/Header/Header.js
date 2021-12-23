import styles from './header.module.css'
import { useEffect, useState } from 'react';
import  Off  from './Offcanavas';
import { NavDropdown } from 'react-bootstrap'
import Link from 'next/link';

function Header(props) {
  /// Menu or buttons
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 700) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
    return () => {
      window.removeEventListener('resize' , showButton)
    }
  }, []);
  useEffect(() => {
    window.addEventListener('resize', showButton);
  })

  // transparent header
  const trans = props.trans
  let transparentStyle = {backgroundColor:'transparent',backdropFilter:'none'};
  let normalStyle = {backgroundColor:'white'};
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const trans = props.trans
      if (trans) {
      window.onscroll = () => {
      setOffset(window.pageYOffset)
      }}
  }, [props]);
  const style = (!trans ? normalStyle : (offset? normalStyle:transparentStyle))
  
  return (
    <>
    

    <div className={styles.Header} style={ style } >
      <div className={styles.LogoContainer}>
          <Link href='/'><p className={styles.logo}>OPPO Store</p></Link>
      </div>
    
      {button?
      <div className={styles.buttonsContainer}>
        <Link href='/'><a className={styles.myA} > Home </a></Link>
        <Link href='About'><a className={styles.myA} > About </a></Link>
        <Link href='Contact'><a className={styles.myA} > Contact </a></Link>
        <NavDropdown title="Games" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Games">VR Games</NavDropdown.Item>
          <NavDropdown.Item href="/Games">Escape room</NavDropdown.Item>
        </NavDropdown>
      </div>
      :
      undefined
      }
      {!button?
      <Off/>
      :
      undefined
      }
    </div>
    </>
  )
}

export default Header