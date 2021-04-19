import Image from 'next/image';

import style from './style.module.less';

const Logo = ({type = 'default'}) => {

    if(type == 'default') {
          return(
            <a href="/">
                <Image
                    src="/img/logo.svg"
                    alt="logotype"
                    width="130"
                    height="58px"
                />
            </a>
          )  
    }

    if(type == 'white') {
        return(
            <a href="/">
                <Image
                    src="/img/logo-white.svg"
                    alt="logotype"
                    width="130"
                    height="58px"
                />
            </a>
          )   
    }

}

export default Logo;