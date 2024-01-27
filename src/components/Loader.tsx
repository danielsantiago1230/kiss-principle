import React from 'react';
import styled from 'styled-components';

interface LoaderProps {
    loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
    const display = loading ? 'flex' : 'none';
    return (
        <Modal style={{ display }}>
            <ActivityIndicatorWrapper>
                <ActivityIndicator />
            </ActivityIndicatorWrapper>
        </Modal>
    );
};

export default Loader;

// Styled Components
const Modal = styled.div`
    display: flex; // set to flex by default and control the visibility using the inline style
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ActivityIndicatorWrapper = styled.div`
    background-color: #ffffff;
    height: 100px;
    width: 100px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ActivityIndicator = styled.div`
    border: 6px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top: 6px solid #000000;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;