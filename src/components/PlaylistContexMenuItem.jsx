

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import PlaylistContexMenu from './PlaylistContexMenu'
import { useRef, useState } from 'react'

export default function PlaylistContexMenuItem({ children: label, subMenuItems }) {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [subContexMenuClasses, setSubContexMenuClasses] = useState('left-full');
    const menuItemRef = useRef(null);

    function toContexMenuClasses() {
        
        const menuItem = menuItemRef.current;
        const menuItemWidth = menuItem.offsetWidth;
        const windowWidth = window.innerWidth;
        const menuItemEndCoordinate = menuItem.getBoundingClientRect().right;
        const shouldMoveLeft = menuItemWidth > windowWidth - menuItemEndCoordinate;

        return shouldMoveLeft ? 'right-full': 'left-full';
        
    }

    function openMenu() {
        setIsMenuOpen(true)

        setSubContexMenuClasses(toContexMenuClasses())


    }

    function closeMenu() {
        setIsMenuOpen(false)
    }


    if (subMenuItems) {

        return (
            <>
                <li className='relative' onMouseLeave={closeMenu} onMouseOver={openMenu}>
                    <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                        {label} <ChevronRightIcon className='h-4 w-4' />
                    </button>
                    {isMenuOpen &&
                        <PlaylistContexMenu menuItems={subMenuItems} ref={menuItemRef} classes={`absolute top-0 bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default ${subContexMenuClasses}`} />
                    }

                </li>
            </>
        )



    }



    return (
        <>
            <li>
                <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
                    {label}
                </button>
                
            </li>
        </>
    )
}