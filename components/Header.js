export default function Header() {
    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
                <img src="/logo.png" className="h-10" />

                <nav className="space-x-6 hidden md:block">
                    <a href="#" className="font-medium hover:text-primary">Beranda</a>
                    <a href="#" className="font-medium hover:text-primary">Program</a>
                    <a href="#" className="font-medium hover:text-primary">Berita</a>
                    <a href="#" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-darkBlue">
                        Donasi
                    </a>
                </nav>
            </div>
        </header>
    );
}