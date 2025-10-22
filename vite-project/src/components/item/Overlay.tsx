import styled from '@emotion/styled';

const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
    background: rgba(0,0,0,0.4);
`

function Overlay(){
    return <StyledOverlay />
}

export default Overlay;