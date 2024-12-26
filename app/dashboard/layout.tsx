export default function layout({children}:{children:React.Reactnode}){
    return(
        <>
            <header className="bg-teal-400 py-4">Dashboard header</header>
            <main>{children} </main>
            <footer className="bg-teal-400 py-4">Dashboard footer</footer>
        </>
    )
}