/* eslint-disable react/no-unknown-property */
import PlaylistButtonPlay from "./PlaylistButtonPlay";
import PlaylistCover from "./PlaylistCover";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistContexMenu from "./PlaylistContexMenu";
import { useState } from "react";

const menuItems = [
    {
        label: 'Add to Your Library'
    },
    {
        label: 'Share',
        subMenuItems: [
            {
                label: 'Copy link to playlist'
            },
            {
                label: 'Embed playlist'
            }
        ]
    },
    {
        label: 'About recommendations'
    },
    {
        label: 'Open in Desktop app'
    }
];





export default function Playlist({coverUrl, title, description, classes}) {
    const [isContexMenuOpen, setIsContexMenuOpen] = useState(false);

    function OpenContexMenu (event) {
    
        event.preventDefault();
        setIsContexMenuOpen(true)

    }

    function onCloseContextMenu() {
        setIsContexMenuOpen(false)
        console.log('Playlist.jsx')
    }

    return (
        <>
            <a href="/" className={`relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group ${classes}`} onContextMenu={OpenContexMenu} onClick={(event) => event.preventDefault()}>
                <div className="relative">
                    <PlaylistCover url={coverUrl}  />
                    <PlaylistButtonPlay />
                </div>
                <PlaylistTitle title={title}/>
                <PlaylistDescription description={description} />
                {isContexMenuOpen && (
                    <PlaylistContexMenu menuItems={menuItems} onClose={onCloseContextMenu} classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10"/>
                )}
                
            </a>
        </>
    )
}

