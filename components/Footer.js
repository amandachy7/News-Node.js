export default function Footer() {
    return (
        <footer className="bg-[#268ECD] text-white mt-20">
            <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold">Human Initiative</h3>
                    <p>Menggerakkan kebaikan untuk kemanusiaan.</p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Newsletter</h4>
                    <div className="flex">
                        <input className="bg-[#FFF] px-3 py-2 text-black rounded-l-md" placeholder="Masukkan email" />
                        <button className="bg-[#1E293B] px-4 rounded-r-md">Subscribe</button>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold">Kontak</h4>
                    <p>Email: info@human-initiative.org</p>
                    <p>Telp: +62 812 0000 0000</p>
                </div>
            </div>

            <div className="bg-[#155a89] text-center py-4 text-sm">
                © 2026 Human Initiative. All Rights Reserved.
            </div>
        </footer>
    );
}