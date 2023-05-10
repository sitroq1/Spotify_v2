

import PlaylistButtonPlay from "./PlaylistButtonPlay";
import PlaylistCover from "./PlaylistCover";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistContexMenu from "./PlaylistContexMenu";

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
    return (
        <>
            <a href="/" className={`relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group ${classes}`}>
                <div className="relative">
                    <PlaylistCover url={coverUrl}  />
                    <PlaylistButtonPlay />
                </div>
                <PlaylistTitle title={title}/>
                <PlaylistDescription description={description} />
                <PlaylistContexMenu menuItems={menuItems} classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block"/>
            </a>
        </>
    )
}