import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {useTranslation} from "react-i18next";

const HeaderSocials = () => {

    const { t } = useTranslation()

    return (
        <div className='header__socials'>
            <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com' target='_blank'><FaGithub /></a>
        </div>
    )
}

export default HeaderSocials
