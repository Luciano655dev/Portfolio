import { FooterStyled, CopyrightTxt } from './footerStyle.js'

export default function Footer(){
    return (
       <FooterStyled>
        <CopyrightTxt>Copyright © 2022 Luciano Menezes</CopyrightTxt>
        <div>
          <p>Gmail: <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxTdSJwDvLvbSLcCbwdVzTFSvgZMpJRvdsGZVJffldzNFsJvtRGXGzRwMPndbbltbgQztC" target="_blank">lucianomenezes655@gmail.com</a> </p>
          <p>Discord: <a href="https://discord.com/invite/Luciano655#7898" target="_blank">Luciano655#7898</a></p>
        </div>
      </FooterStyled>
    )
}