import TheFooterList from "./TheFooterList";

const label = ['Cookies', 'Privacy']

export default function TheFooter() {
    return (
      <>
        <footer className="mt-auto mb-8 ml-6">
          <TheFooterList label={label}/>
        </footer>
      </>
    );
}