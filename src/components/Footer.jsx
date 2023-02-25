import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <MDBFooter style={{marginTop : "50px"}} className={styles.customFoot + ' text-center text-lg-left'}>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        CERP
      </div>
    </MDBFooter>
  );
}