import { useEffect, useRef } from "react";

import PlaylistContexMenuItem from "./PlaylistContexMenuItem";




export default function PlaylistContexMenu({menuItems, classes, onClose: handleClose}) {

    const menuRef = useRef(null);

    useEffect(() => {

        function handleClickAway(event) {
            if (!menuRef.current.contains(event.target)) {
                handleClose();
            }

        }

        document.addEventListener('mousedown', handleClickAway);
        

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
        }
    })
    
    


    return (
        <>
            <ul className={classes} ref={menuRef}>
                
                {menuItems.map(({label, subMenuItems}) => (
                    <PlaylistContexMenuItem key={label} subMenuItems={subMenuItems}>
                        {label}
                    </PlaylistContexMenuItem>
                ))}
                
                
               
            </ul>
        </>
    )
}