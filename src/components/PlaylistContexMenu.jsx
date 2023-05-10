

import PlaylistContexMenuItem from "./PlaylistContexMenuItem";




export default function PlaylistContexMenu({menuItems, classes}) {
    return (
        <>
            <ul className={classes}>
                
                {menuItems.map(({label, subMenuItems}) => (
                    <PlaylistContexMenuItem key={label} subMenuItems={subMenuItems}>
                        {label}
                    </PlaylistContexMenuItem>
                ))}
                
                
               
            </ul>
        </>
    )
}