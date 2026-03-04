import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#f5f9fc] text-[#1f2d3d] font-[Poppins]">

            {/* HERO */}
            <section className="bg-gradient-to-br from-[#268ECD] to-[#99D0F0] 
                          py-20 px-5 text-center text-white
                          rounded-b-[50px]">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Berita & Cerita
                </h1>
                <p className="mt-3 opacity-90">
                    Kisah inspiratif, program kemanusiaan, dan aksi nyata untuk perubahan.
                </p>
            </section>

            {/* FILTER */}
            <section className="flex justify-center gap-5 -mt-8 mb-16 px-5 flex-wrap">
                {["Berita", "Feature", "Aksi", "Collaborate"].map((item, index) => (
                    <button
                        key={index}
                        className={`px-7 py-3 rounded-full font-medium transition-all duration-300
              shadow-md ${index === 0
                                ? "bg-[#268ECD] text-white"
                                : "bg-white text-[#268ECD] hover:bg-[#268ECD] hover:text-white"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </section>

            {/* NEWS GRID */}
            <section className="max-w-6xl mx-auto px-5 pb-20 grid gap-10 
                          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {/* CARD 1 */}
                <div className="bg-white rounded-2xl overflow-hidden 
                        shadow-lg hover:-translate-y-3 hover:shadow-2xl 
                        transition-all duration-300">

                    <div className="relative">
                        <img
                            src="https://picsum.photos/400/250?1"
                            className="w-full"
                            alt="News"
                        />
                        <span className="absolute top-4 left-4 
                             bg-[#268ECD] text-white 
                             text-xs px-4 py-1 rounded-full">
                            Berita
                        </span>
                    </div>

                    <div className="p-6">
                        <span className="text-sm text-gray-500">
                            2 Maret 2026
                        </span>

                        <h3 className="my-3 font-semibold text-lg">
                            Bag of Happiness: Dukung Ketersediaan Pangan Warga
                        </h3>

                        <p className="text-sm text-gray-600 mb-4">
                            Banjir melanda Desa Hutanabolon, Kecamatan Tukka...
                        </p>

                        <Link
                            href="/berita/bag-of-happiness-dukung-ketersediaan-pangan-warga-pengungsi-di-desa-hutanabolon"
                            className="text-[#268ECD] font-medium hover:tracking-wide transition-all"
                        >
                            Selengkapnya →
                        </Link>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white rounded-2xl overflow-hidden 
                        shadow-lg hover:-translate-y-3 hover:shadow-2xl 
                        transition-all duration-300">

                    <div className="relative">
                        <img
                            src="https://picsum.photos/400/250?2"
                            className="w-full"
                            alt="News"
                        />
                        <span className="absolute top-4 left-4 
                             bg-[#268ECD] text-white 
                             text-xs px-4 py-1 rounded-full">
                            Feature
                        </span>
                    </div>

                    <div className="p-6">
                        <span className="text-sm text-gray-500">
                            1 Maret 2026
                        </span>

                        <h3 className="my-3 font-semibold text-lg">
                            Menguatkan Langkah Anak Kembali Percaya Diri
                        </h3>

                        <p className="text-sm text-gray-600 mb-4">
                            Setiap anak datang dengan harapan baru...
                        </p>

                        <Link
                            href="#"
                            className="text-[#268ECD] font-medium hover:tracking-wide transition-all"
                        >
                            Selengkapnya →
                        </Link>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white rounded-2xl overflow-hidden 
                        shadow-lg hover:-translate-y-3 hover:shadow-2xl 
                        transition-all duration-300">

                    <div className="relative">
                        <img
                            src="https://picsum.photos/400/250?3"
                            className="w-full"
                            alt="News"
                        />
                        <span className="absolute top-4 left-4 
                             bg-[#268ECD] text-white 
                             text-xs px-4 py-1 rounded-full">
                            Aksi
                        </span>
                    </div>

                    <div className="p-6">
                        <span className="text-sm text-gray-500">
                            28 Februari 2026
                        </span>

                        <h3 className="my-3 font-semibold text-lg">
                            Belajar di Tengah Keterbatasan
                        </h3>

                        <p className="text-sm text-gray-600 mb-4">
                            Banjir dan longsor melanda sejumlah wilayah...
                        </p>

                        <Link
                            href="#"
                            className="text-[#268ECD] font-medium hover:tracking-wide transition-all"
                        >
                            Selengkapnya →
                        </Link>
                    </div>
                </div>

            </section>

        </div>
    );
}