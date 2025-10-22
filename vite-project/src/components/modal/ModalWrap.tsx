/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import Overlay from '../item/Overlay';


const StyledModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
`
const ModalContent = styled.div<{ size: 'sm' | 'md' | 'lg' }>`
    position: absolute;
    top: 50%;
    left: 50%;
    width:${({size}) =>
        size === "sm"? "300px" :
        size === "md" ? "500px" : 
        size === "lg" ? "800px" :
        "auto"
    };
    height:${({size}) =>
        size === "sm"? "300px" :
        size === "md" ? "500px" : 
        size === "lg" ? "800px" :
        "auto"
    };
    background: #fff;
    border-radius: 15px;
    transform: translate(-50%,-50%);
    z-index: 101;
`
const ModalTit = styled.h3`

`
const ModalBody = styled.div`

`
const ModalFoot = styled.div`

`

type ModalProps = {
    title: string,
    size: 'sm' | 'md' | 'lg',
    body: ReactNode,
    footer?: ReactNode
}


function ModalWrap(props:ModalProps){
    return (
        <StyledModalWrap>
            <ModalContent size={props.size} className={`modal-${props.size}`}>
                <ModalTit>{props.title}</ModalTit>
                <ModalBody>
                    {props.body}
                </ModalBody>
                <ModalFoot>
                    {props.footer}
                </ModalFoot>
            </ModalContent>
            <Overlay />
        </StyledModalWrap>
    )
}

export default ModalWrap;