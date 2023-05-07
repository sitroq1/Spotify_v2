const label = ['Cookies', 'Privacy']

export default function TheFooter() {
    return (
      <>
        <footer className="mt-auto mb-8 ml-6">
          <ul>
            {label.map((item) => (
               <li key={item}>
                 <a href="/" className="text-[11px] hover:underline py-2">
                   {item}
                 </a>
               </li>
            ))}
          </ul>
        </footer>
      </>
    );
}