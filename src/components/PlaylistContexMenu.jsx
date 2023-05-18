import React from "react";

import PlaylistContexMenuItem from "./PlaylistContexMenuItem";



 function PlaylistContexMenu({menuItems, classes}, ref) {

   

    
    
    


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