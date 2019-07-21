import React from 'react';
import {ModalBox} from '../styles/Modal';

const Modal = ({show, children})=>{
    const showOrHide = show ? 'show-modal' : 'hide-modal'
    return(
        <ModalBox>
            <div className={showOrHide}>
                <section>
                    {children}
                </section>
            </div>
        </ModalBox> 
    )
}

export default Modal;