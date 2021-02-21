import React from 'react'
import style from '../Footer/Footer.module.css'
import { FaFacebookF } from 'react-icons/fa'
import { SiTelegram } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import {BsFillHeartFill} from 'react-icons/bs'

function Footer() {
    return (
        <div className={style.main}>
            <div className={style.footer}>
                <div className={style.icons_footer}>
                    <div>
                        <SiTelegram />
                    </div>
                    <div>
                        <AiFillInstagram />
                    </div>
                    <div>
                        <FaFacebookF />
                    </div>
                </div>
                <p>Copyright ©2021 All rights reserved | This template is made with <BsFillHeartFill />  by HBBH</p>
            </div>
        </div>
    )
}

export default Footer