--
-- PostgreSQL database dump
--

\restrict wPoVod8k0m0WieLRH0Zk7jH8FqehihwVdPVPJIBZYr70Zv2NMfoCWXpWaN51aab

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-03-04 15:59:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16398)
-- Name: news; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    content text NOT NULL,
    author character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.news OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16412)
-- Name: news_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.news_id_seq OWNER TO postgres;

--
-- TOC entry 5016 (class 0 OID 0)
-- Dependencies: 220
-- Name: news_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_id_seq OWNED BY public.news.id;


--
-- TOC entry 4856 (class 2604 OID 16413)
-- Name: news id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news ALTER COLUMN id SET DEFAULT nextval('public.news_id_seq'::regclass);


--
-- TOC entry 5009 (class 0 OID 16398)
-- Dependencies: 219
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news (id, title, slug, content, author, created_at) FROM stdin;
1	Bag of Happiness: Dukung Ketersediaan Pangan Warga Pengungsi di Desa Hutanabolon	bag-of-happiness-dukung-ketersediaan-pangan-warga-pengungsi-di-desa-hutanabolon	Banjir melanda Desa Hutanabolon, Kecamatan Tukka, Tapanuli Selatan, pada akhir November 2025. Air dan lumpur merusak permukiman warga serta memaksa banyak keluarga meninggalkan rumah yang tidak lagi aman. Sebagian bangunan rusak berat, bahkan hilang, sehingga ratusan warga memilih bertahan di tenda pengungsian hingga saat ini.\n\nDi pengungsian, hampir 800 kepala keluarga menjalani hari dengan keterbatasan. Anak-anak, orang dewasa, dan lansia berbagi ruang yang sama. Hingga hampir dua bulan berlalu, aktivitas warga belum pulih. Sebagian besar pengungsi bekerja sebagai petani perkebunan. Namun, kerusakan lahan membuat mereka belum bisa kembali bekerja dan memperoleh penghasilan.\n\nSelain kehilangan sumber nafkah, warga juga menghadapi kondisi lingkungan yang menantang. Saat hujan turun, lumpur membuat area tenda licin dan berisiko. Sebaliknya, ketika cuaca cerah, panas dan debu mengganggu aktivitas harian. Di sisi lain, warga masih berupaya memenuhi kebutuhan air bersih dan sarana MCK yang terbatas.\n\nDalam kondisi tersebut, Bag of Happiness berupa paket sembako membantu menjaga kebutuhan pangan harian warga. Paket ini menyediakan bahan makanan untuk diolah bersama dan dimanfaatkan dalam dapur komunal. Karena itu, warga mengatur konsumsi secara sederhana, berbagi peran, dan saling menguatkan di tengah keterbatasan.\n\nDistribusi Bag of Happiness menjaga ketersediaan bahan pangan saat penghasilan belum kembali. Paket sembako memberi kepastian bagi keluarga pengungsian untuk memenuhi kebutuhan makan, sehingga rutinitas harian tetap berjalan dengan lebih tertata.\n	Human Initiative	2026-03-04 12:34:16.472032
2	Di Tengah Keterbatasan Akses Pangan, Makanan Hangat Menguatkan Keluarga Palestina	di-tengah-keterbatasan-akses-pangan-makanan-hangat-menguatkan-keluarga-palestina	Keluarga penyintas di Palestina menghadapi keterbatasan akses pangan setiap hari. Distribusi bahan makanan belum stabil, sementara kebutuhan makan terus berjalan. Karena itu, banyak keluarga membutuhkan solusi yang cepat dan praktis untuk menjaga asupan harian, terutama bagi anak-anak, ibu, dan lansia.\n\nMelalui program Bag of Happiness, Human Initiative menyalurkan makanan hangat siap santap kepada keluarga yang membutuhkan. Untuk itu, tim berkoordinasi dengan mitra lokal, menyusun daftar penerima manfaat, lalu mengatur jadwal distribusi sesuai kondisi lapangan. Dengan langkah terencana tersebut, tim memastikan makanan hangat sampai kepada keluarga secara tertib dan tepat sasaran.\n\nMakanan hangat ini bukan sekadar sajian siap santap. Bagi banyak keluarga, seporsi makanan hangat membantu mereka menjalani hari dengan lebih tenang. Selain itu, anak-anak dapat makan tanpa harus menunggu bahan tersedia. Sementara itu, para ibu tidak perlu memikirkan proses memasak di tengah keterbatasan. Lansia pun dapat menikmati makanan yang mudah dikonsumsi. Dengan demikian, kehangatan dari sajian sederhana ini memberi jeda sejenak dari situasi yang menekan.\n\nHuman Initiative menjalankan program dengan pengelolaan yang jelas dan pengawasan yang konsisten. Selanjutnya, tim mencatat setiap kontribusi, memantau distribusi, serta menyusun laporan penyaluran secara berkala. Melalui tata kelola yang tertib, organisasi menjaga kepercayaan publik dan memastikan setiap dukungan memberi manfaat sesuai perencanaan.\n\nKebersamaan memperkuat setiap langkah kemanusiaan. Oleh sebab itu, ketika individu, komunitas, dan perusahaan terlibat, jangkauan distribusi meluas dan lebih banyak keluarga menerima makanan hangat.\n\nHuman Initiative mengajak masyarakat untuk berpartisipasi melalui solusipeduli.org dan mendukung distribusi makanan hangat bagi penyintas Palestina. Dengan partisipasi tersebut, lebih banyak keluarga dapat memperoleh asupan yang layak secara konsisten dan bertanggung jawab.	Human Initiative	2026-03-04 14:59:39.394386
3	Bersama Sahabat Inisiator, Bag of Happiness Jangkau 26.960 Penerima Hak Program di 192 Titik	bersama-sahabat-inisiator-bag-of-happiness-jangkau-26960-penerima	Sahabat Inisiator, di tengah berbagai tantangan sosial dan ekonomi, banyak keluarga terus berupaya menjaga ketahanan hidupnya. Orang tua memastikan kebutuhan makan tetap terpenuhi, sementara anak-anak mempertahankan semangat belajar di tengah keterbatasan. Karena itu, dukungan yang terarah dan berkelanjutan menjadi kebutuhan nyata.\n\nMelalui program Bag of Happiness, Human Initiative menggerakkan kolaborasi kebaikan bersama masyarakat dan dukungan donatur yang mempercayakan amanahnya. Hingga 1 Maret 2026, program ini menjangkau 26.960 pemegang hak program di 192 titik wilayah Indonesia dan Palestina. Dengan capaian tersebut, Human Initiative memperluas manfaat secara terukur sekaligus menjaga kualitas pelaksanaan di setiap wilayah sebaran.\n\nSecara bertahap, tim menyalurkan 11.110 paket makanan siap saji dan 4.534 paket bahan pangan untuk membantu keluarga menjaga kebutuhan konsumsi hariannya. Selain itu, program ini juga menyalurkan 590 paket baju baru, 15 paket perlengkapan sekolah, 15 paket perlengkapan ibadah, serta 160 hadiah kebaikan. Melalui langkah ini, setiap bentuk dukungan menjawab kebutuhan yang muncul langsung dari lapangan.\n\nDi satu sisi, makanan dan bahan pangan memperkuat ketahanan keluarga. Di sisi lain, perlengkapan sekolah dan ibadah membantu menjaga semangat belajar serta kedekatan spiritual. Dengan demikian, program tidak hanya menyasar kebutuhan fisik, tetapi juga memperhatikan aspek sosial dan emosional penerima manfaat.\n\nKebersamaan membuat setiap perjalanan menjadi lebih bermakna. Saat kita bergerak bersama, tidak ada jarak yang terasa terlalu jauh atau beban yang terasa terlalu berat. Dalam kebersamaan, kita menemukan kekuatan untuk terus melangkah, berbagi, dan menumbuhkan harapan bagi sesama. Semakin banyak pihak terlibat, termasuk melalui dukungan donatur, semakin luas pula dampak yang dapat kita rasakan bersama.\n\nOleh sebab itu, Human Initiative terus meningkatkan koordinasi, memperkuat pengawasan, dan menyampaikan perkembangan program secara terbuka kepada publik. Bag of Happiness menunjukkan bahwa kerja bersama mampu memperluas manfaat secara berkelanjutan. Mari kolaborasikan kebaikan melalui solusipeduli.org dan ambil peran dalam memperkuat dukungan bagi lebih banyak keluarga.	Human Initiative	2026-03-04 15:01:06.607698
\.


--
-- TOC entry 5017 (class 0 OID 0)
-- Dependencies: 220
-- Name: news_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_id_seq', 4, true);


--
-- TOC entry 4859 (class 2606 OID 16420)
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- TOC entry 4861 (class 2606 OID 16427)
-- Name: news news_unique_slug; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_unique_slug UNIQUE (slug);


-- Completed on 2026-03-04 15:59:56

--
-- PostgreSQL database dump complete
--

\unrestrict wPoVod8k0m0WieLRH0Zk7jH8FqehihwVdPVPJIBZYr70Zv2NMfoCWXpWaN51aab

