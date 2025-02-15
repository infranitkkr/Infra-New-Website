import React from 'react'
import logo3 from '../images/logo3.png'
import CircularText from '../Animations/CircularText'

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <CircularText
                text="INFRASTRUCTURE*SOCIETY*NIT KURUKSHETRA*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            />
        </div>
    )
}

export default LoadingPage