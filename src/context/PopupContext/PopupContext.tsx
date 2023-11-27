'use client'
import { createContext, useState } from 'react';
import './PopupContext.scss';

const PopupContext = createContext<any>(null);

function PopupProvider({children}: any) {
    const [popupContent, setPopupContent] = useState<any[]>([]);
    const [hasBackdrop, setHasBackdrop] = useState<boolean>(true);
    
    const openPopup = (content: any) => {
        setPopupContent(prevPopups => {
            const currentPopUps = [...prevPopups];
            currentPopUps.push(content);

            return currentPopUps;
        });
    }

    const closePopup = () => {
        setPopupContent(prevPopups => {
            const currentPopUps = [...prevPopups];
            currentPopUps.pop();

            return currentPopUps;
        });
    }

    const closeBackdrop = (value: false) => {
        setHasBackdrop(value);
    }

    const handleBackdropClose = () => {
        closePopup();
    }

    const stopPropagation = (event: any) => {
        event.stopPropagation();
    }

    return (
        <PopupContext.Provider value={{openPopup, closePopup, closeBackdrop}}>
            {children}
            {(popupContent?.length > 0)?
            (popupContent.map((content, index) => 
                <div key={`popUp_${index}`} className="popUp_backdrop"
                onClick={handleBackdropClose}
                style={{zIndex: 100000 + index}}>
                    <div className='popUpContent_container'
                    onClick={(e) => stopPropagation(e)}>
                    {content}
                    </div>
                </div>
            ))
            :(null)}
        </PopupContext.Provider>
    );
}

export { PopupContext, PopupProvider };