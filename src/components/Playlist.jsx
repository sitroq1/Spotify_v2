/* eslint-disable react/no-unknown-property */
import PlaylistButtonPlay from "./PlaylistButtonPlay";
import PlaylistCover from "./PlaylistCover";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistContexMenu from "./PlaylistContexMenu";
import { useState, useRef, useLayoutEffect, useEffect } from "react";

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

const clickPosition = {x: null, y: null};






export default function Playlist({coverUrl, title, description, classes, toggleScrolling}) {
    const [isContexMenuOpen, setIsContexMenuOpen] = useState(false);
    const contexMenuRef = useRef(null);

    

    
    const bgClasses = isContexMenuOpen ? 'bg-[#272727]' : 'bg-[#181818] hover:bg-[#272727]';

    function updateContexMenuHorizontalPosition() {

        const menuWidth = contexMenuRef.current.offsetWidth;
        const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;


        contexMenuRef.current.style.left = shouldMoveLeft ? `${clickPosition.x - menuWidth}px` : `${clickPosition.x}px`;

    }

    function updateContexMenuVerticalPosition() {
        const menuHeight = contexMenuRef.current.offsetHeight;
        const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;


        contexMenuRef.current.style.top = shouldMoveUp ? `${clickPosition.y - menuHeight}px` : `${clickPosition.y}px`;
    }

    function updateContexMenuPosition() {
        
        updateContexMenuHorizontalPosition();
        updateContexMenuVerticalPosition();

    }

    useLayoutEffect(() => {

        toggleScrolling(!isContexMenuOpen);
        
        if (isContexMenuOpen) {
            updateContexMenuPosition();
        }

    })

    useEffect(() => {

        if (!isContexMenuOpen) return;

        function handleClickAway(event) {
            if (!contexMenuRef.current.contains(event.target)) {
                onCloseContextMenu();
            }

        }

        function handleEsc(event) {
            if(event.keyCode === 27) {
                onCloseContextMenu();
            }
        }

        document.addEventListener('mousedown', handleClickAway);
        document.addEventListener('keydown', handleEsc);
        

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
            document.removeEventListener('keydown', handleClickAway);
        }
    })

    function OpenContexMenu (event) {
    
        event.preventDefault();
        setIsContexMenuOpen(true)

        clickPosition.x = event.clientX;
        clickPosition.y = event.clientY;


    }

    function onCloseContextMenu() {
        setIsContexMenuOpen(false)
        console.log('Playlist.jsx')
    }

    return (
        <>
            <a href="/" className={`relative p-4 rounded-md  duration-200 group ${classes} ${bgClasses}`} onContextMenu={OpenContexMenu} onClick={(event) => event.preventDefault()}>
                <div className="relative">
                    <PlaylistCover url={coverUrl}  />
                    <PlaylistButtonPlay />
                </div>
                <PlaylistTitle title={title}/>
                <PlaylistDescription description={description} />
                {isContexMenuOpen && (
                    <PlaylistContexMenu menuItems={menuItems} ref={contexMenuRef} classes="fixed bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10"/>
                )}
                
            </a>
        </>
    )
}

