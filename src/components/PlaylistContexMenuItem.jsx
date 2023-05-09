/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {ChevronRightIcon} from '@heroicons/react/24/outline'
import PlaylistContexSubmenu from './PlaylistContexSubmenu'

export default function PlaylistContexMenuItem({children: label, subMenuItems}) {

    let classes = "";
    let buttonClasses = "w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default";
    let icon = null;
    let subMenu = null;

    if(subMenuItems) {
        classes = 'relative';
        buttonClasses += ' flex justify-between items-center';
        icon = <ChevronRightIcon className='h-4 w-4'/>
        subMenu = <PlaylistContexSubmenu subMenuItems={subMenuItems}/>

    }
    


    return (
        <>
            <li className={classes}>
                <button className={buttonClasses}>{label} {icon}</button>
                {subMenu}
            </li>
        </>
    )
}