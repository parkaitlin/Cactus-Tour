import React from 'react';
import styled from 'styled-components';

const ModalBox = styled.div`
    .hide-modal {
        display: none;
    }
    .show-modal {
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
    section {
        background-color: white;
    }
`
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