import { HomeIcon, MagnifyingGlassIcon, ViewColumnsIcon, PlusCircleIcon, HeartIcon} from '@heroicons/react/24/outline'

const navLinkClasses = "flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300";
const navLinkClassesActive = "flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded";

const nav = [
    {
        label: "Home",
        icon:<HomeIcon className="h-6 w-6"/>,
        classes: navLinkClassesActive
    },
    {
        label: "Search",
        icon: <MagnifyingGlassIcon className="h-6 w-6"/>,
        classes: navLinkClasses
    },
    {
        label: "Your Library",
        icon: <ViewColumnsIcon className="h-6 w-6"/>,
        classes: `${navLinkClasses} mb-6`
    },
    {
        label: "Create Playlist",
        icon: <PlusCircleIcon className="h-6 w-6"/>,
        classes: navLinkClasses
    },
    {
        label: "Liked Songs",
        icon: <HeartIcon className="h-6 w-6"/>,
        classes: navLinkClasses
    },
]
     


export default function TheNav() {
    return (
      <>
        <nav>
          {nav.map(({ classes, icon, label }) => (
            <a href="/" className={classes} key={label}>
              {icon}
              <span className="ml-4 text-sm font-semibold">{label}</span>
            </a>
          ))}
        </nav>
      </>
    );
}