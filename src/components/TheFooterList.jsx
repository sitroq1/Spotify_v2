/* eslint-disable react/prop-types */

import FooterListItem from "./FooterListItem"

export default function TheFooterList({label}) {
    return (
        <>
            <ul>
                {label.map((item) => (
                    <FooterListItem key={item}>
                        {item}
                    </FooterListItem>
                ))}
            </ul>
        </>
    )
}