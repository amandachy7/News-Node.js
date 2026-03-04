import { NextResponse } from "next/server";

const idSlugMap = {
    "program sosial": "bag-of-happiness-dukung-ketersediaan-pangan-warga-pengungsi-di-desa-hutanabolon",
    "palestina": "di-tengah-keterbatasan-akses-pangan-makanan-hangat-menguatkan-keluarga-palestina",
};

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // match /detail/123
    const match = pathname.match(/^\/berita\/([^/]+)/);

    if (match) {
        const id = match[1];
        const slug = idSlugMap[id];

        if (slug) {
            const url = request.nextUrl.clone();
            url.pathname = `/berita/${slug}`;

            return NextResponse.redirect(url, 301);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/berita/:path*"],
};