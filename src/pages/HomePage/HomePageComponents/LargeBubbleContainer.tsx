import '../HomePageCss/LargeBubble.css'
import React from 'react';

type LargeBubbleProps = {
    children:React.ReactNode
}
export function LargeBubble({children}: LargeBubbleProps){
    return(
        <>
        <div className="LargeBubble">
            {children}
        </div>
        </>
    )
}