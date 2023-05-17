import React, {useLayoutEffect, useEffect} from "react";

import PlaylistContexMenuItem from "./PlaylistContexMenuItem";



 function PlaylistContexMenu({menuItems, classes, onClose: handleClose}, ref) {

   

    useLayoutEffect(() => {

        if (!handleClose) return;

        function handleClickAway(event) {
            if (!ref.current.contains(event.target)) {
                handleClose();
            }

        }

        function handleEsc(event) {
            if(event.keyCode === 27) {
                handleClose();
            }
        }

        document.addEventListener('mousedown', handleClickAway);
        document.addEventListener('keydown', handleEsc);
        

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
            document.removeEventListener('keydown', handleClickAway);
        }
    })
    
    


    return (
        <>
            <ul className={classes} ref={ref}>
                
                {menuItems.map(({label, subMenuItems}) => (
                    <PlaylistContexMenuItem key={label} subMenuItems={subMenuItems}>
                        {label}
                    </PlaylistContexMenuItem>
                ))}
                
                
               
            </ul>
        </>
    )
}

 export default React.forwardRef(PlaylistContexMenu);