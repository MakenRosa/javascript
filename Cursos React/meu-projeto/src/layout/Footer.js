import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import styles  from './Footer.module.css';

function Footer() {
    return (
        <div>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
            </ul>
            <p className={styles.txt_rodape}> Todos os direitos reservados</p>
        </div>
    )
}


export default Footer;