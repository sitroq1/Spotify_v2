
import PlaylistContexMenuItem from "./PlaylistContexMenuItem";


// eslint-disable-next-line no-unused-vars
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

export default function PlaylistContexMenu() {
    return (
        <>
            <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
                
                {menuItems.map(({label, subMenuItems}) => (
                    <PlaylistContexMenuItem key={label} subMenuItems={subMenuItems}>
                        {label}
                    </PlaylistContexMenuItem>
                ))}
                
                
               
            </ul>
        </>
    )
}