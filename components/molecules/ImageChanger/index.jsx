import style from './style.module.less';

import { useEffect, useState } from 'react';

const ImageChanger = ({children}) => {

    let [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if(currentImage == children.length - 1) {
                setCurrentImage(0);
            } else {
                setCurrentImage(currentImage + 1);
            }
        }, 1000)
    })

    return(
        <div className={style['image-changer']}>
            {children[currentImage]}
        </div>
    )
}

export default ImageChanger;