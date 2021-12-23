import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react';
import styles from './off.module.css'

function Off({ ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // to be used in buttons to route the user
    //const history = useHistory()
    const routeTo = (to) => {
      console.log(to)
    }
  
    return (
      <>
        <div className={styles.wrapperIcon}>
            <div onClick={handleShow} className={styles.menuIcon}>
                <i className='fas fa-bars'></i>
            </div>
        </div>
        
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className={styles.pLink} onClick={()=>{routeTo('/')}}>Home</p>
            <p className={styles.pLink} onClick={()=>{routeTo('/Games')}}>Games</p>

            <div className={styles.smallContainer}>
              <p className={styles.pLink} onClick={()=>{routeTo('/Games')}}>VR Games</p>
              <p className={styles.pLink} onClick={()=>{routeTo('/Games')}}>Escape room</p>
            </div>
            
            <p className={styles.pLink} onClick={()=>{routeTo('/Contact')}}>Contact</p>
            <p className={styles.pLink} onClick={()=>{routeTo('/About')}}>About</p>            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
  
export default Off