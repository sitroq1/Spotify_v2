/* eslint-disable react/prop-types */
import PlaylistContexMenuItem from "./PlaylistContexMenuItem";




export default function PlaylistContexSubmenu({subMenuItems}) {

    return (
        <>
            <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                
                {subMenuItems.map(({ label }) => (
                    <PlaylistContexMenuItem key={label}>
                        {label}
                    </PlaylistContexMenuItem>
                ))}
        
            </ul>
        </>
    )
}