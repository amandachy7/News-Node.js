export default function RelatedCard({ item }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 mb-8 cursor-pointer">

            <div className="relative overflow-hidden">
                <span className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full z-10">
                    {item.category}
                </span>

                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            <div className="p-5">
                <h4 className="font-semibold text-sm mb-2 group-hover:text-[#268ECD] transition">
                    {item.title}
                </h4>

                <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.excerpt}
                </p>
            </div>
        </div>
    );
}