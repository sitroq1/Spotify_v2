/* eslint-disable react/prop-types */

export default function FooterListItem({children: item}) {
    return (
        <>
            <li>
                <a href="/" className="text-[11px] hover:underline py-2">
                    {item}
                </a>
            </li>
        </>
    )
}