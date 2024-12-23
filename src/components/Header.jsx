

function Header () {
    return (
        <>
            <header>
            <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
                <a className="font-bold text-xl tracking-tight" href="#">Melody&apos;s Portfolio</a>
                <div className="flex items-center">
                    <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/">About</a>
                    <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/portfolio">Portfolio</a>
                    <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/contacts">Contact</a>
                    <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/resume">Resume</a>
                </div>
            </nav>
            </header>
        </>
    )
}

export default Header;