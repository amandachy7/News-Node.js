import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedCard from "@/components/RelatedCard";
import { notFound } from "next/navigation";

async function getNews(slug) {
    const res = await fetch(
        `http://localhost:8000/api/news/view?slug=${slug}`,
        { cache: "no-store" }
    );

    if (!res.ok) return null;
    return res.json();
}

export default async function NewsDetail({ params }) {
    const { slug } = await params;

    const data = await getNews(slug);
    if (!data || !data.data) notFound();

    const news = data.data;

    const formattedDate = new Date(news.created_at).toLocaleDateString(
        "id-ID",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );

    return (
        <div className="bg-[#F4FAFF] min-h-screen text-[#1E293B]">
            <Header />

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#268ECD] via-[#2C95D6] to-[#1F6FA8] text-white py-24 px-6">
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>

                <div className="relative max-w-4xl mx-auto">
                    <p className="text-[#99D0F0] text-sm tracking-wide">
                        Beranda / Berita
                    </p>

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4 mb-6">
                        {news.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm opacity-90">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                👤
                            </div>
                            <span>{news.author || "Tim Human Initiative"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            📅 <span>{formattedDate}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN */}
            <main className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-14">

                {/* CONTENT */}
                <article className="lg:col-span-2 bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12 transition hover:shadow-[0_25px_70px_rgba(0,0,0,0.1)]">

                    <div
                        className="prose max-w-none prose-headings:text-[#1E293B] prose-p:text-[#64748B] prose-p:leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: news.content.replace(/\n/g, "<br/>"),
                        }}
                    />

                    {/* SHARE */}
                    <div className="mt-12 pt-8 border-t flex items-center gap-4">
                        <span className="text-sm font-medium">Bagikan:</span>

                        <button className="px-4 py-2 bg-[#268ECD] text-white rounded-full text-sm hover:bg-[#1F6FA8] transition">
                            Facebook
                        </button>

                        <button className="px-4 py-2 bg-[#99D0F0] text-white rounded-full text-sm hover:opacity-90 transition">
                            Twitter
                        </button>

                        <button className="px-4 py-2 bg-green-500 text-white rounded-full text-sm hover:opacity-90 transition">
                            WhatsApp
                        </button>
                    </div>
                </article>

                {/* SIDEBAR */}
                <aside>
                    <h3 className="text-xl font-semibold mb-8">
                        Berita Terkait
                    </h3>

                    <RelatedCard
                        item={{
                            category: "Program",
                            title: "Bersama Sahabat Inisiator, Bag of Happiness Jangkau 26.960 Penerima Hak Program di 192 Titik",
                            excerpt: "Program sosial",
                            image: "https://human-initiative.b-cdn.net/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-19.57.37-1.jpeg",
                        }}
                    />

                    <RelatedCard
                        item={{
                            category: "Kegiatan",
                            title: "Di Tengah Keterbatasan Akses Pangan, Makanan Hangat Menguatkan Keluarga Palestina",
                            excerpt: "Palestina",
                            image: "https://human-initiative.b-cdn.net/wp-content/uploads/2026/02/2026_02_17_14_21_10_IMG_5107-scaled.jpg",
                        }}
                    />
                </aside>
            </main>

            <Footer />
        </div>
    );
}