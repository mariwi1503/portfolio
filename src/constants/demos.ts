import type { Language } from "@/constants/translations";

type Localized<T> = Record<Language, T>;

export interface DemoApp {
  id: string;
  title: string;
  platform: "Web" | "Mobile";
  category: Localized<string>;
  description: Localized<string>;
  features: Localized<string[]>;
  theme: "mint" | "sky" | "lilac";
  screenshot: string | null;
  url: string | null;
  linkType: "demo" | "preview";
}

// Sample content: replace these entries with your own prototypes.
// Store screenshots in public/demos and use a path such as /demos/pos.png.
// Set url to the prototype URL to enable its button.
export const demoApps: DemoApp[] = [
  {
    id: "psyhealth",
    title: "Psyhealth",
    platform: "Web",
    category: { en: "Counseling & Psychology", id: "Konseling & Psikologi" },
    description: {
      en: "An all-in-one application for ordering, managing, and scheduling mental health and psychological consultations for patients, psychologists, and administrators.",
      id: "Aplikasi all in one untuk pesan, kelola dan jadwal konsultasi kesehatan mental dan psikologi untuk pasien, psikolog dan admin",
    },
    features: {
      en: ["Service Booking", "Psychologist Dashboard", "Clinic Management"],
      id: ["Bokign Layanan", 'Dashboard Psiklog', 'Manajmen Klinik'],
    },
    theme: "mint",
    screenshot: '/prototype/psyhealth.png',
    url: 'https://psyhealth.vercel.app/',
    linkType: "demo",
  },
  {
    id: "tadika",
    title: "Tadika Ceria",
    platform: "Web",
    category: { en: "Educational Services", id: "Layanan Pendidikan" },
    description: {
      en: "A management application that makes it easy for parents, teachers, and administrators to monitor children's learning activities.",
      id: "Aplikasi manajemen yang memudahkan wali murid, Guru dan juga admin dalam mengontrol kegiatan belajar anak",
    },
    features: {
      en: ['Dashboard', 'Activity Tracking', 'Grade Tracking', 'Calendar & Schedule'],
      id: ["Dashboard", 'Pantau Kegiatan', 'Pantau Nilai', 'Kelender dan Jadwal'],
    },
    theme: "sky",
    screenshot: '/prototype/tadika.png',
    url: 'https://tadika-one.vercel.app/',
    linkType: "demo",
  },
  {
    id: "faiz",
    title: "Mini Market Faiz",
    platform: "Web",
    category: { en: "Retail & Online Shopping", id: "Ritel dan Belanja Online" },
    description: {
      en: "A retail application with online shopping and POS capabilities",
      id: "Aplikasi ritel dengan fitur belanja online dan POS",
    },
    features: {
      en: ["Dashboard", 'Product Catalog', 'Shoping','POS (Point of Sales) Services'],
      id: ["Dashboard", 'Katalog Produk', 'Belanja', 'Layanan Kasir (POS)'],
    },
    theme: "lilac",
    screenshot: '/prototype/faiz.png',
    url: 'https://faiz-shop-chi.vercel.app/',
    linkType: "demo",
  },
  {
    id: "washflow",
    title: "WashFlow Carwash",
    platform: "Web",
    category: { en: "Car Wash Management System", id: "Aplikasi Manajemen Cuci Kendaraan" },
    description: {
      en: "A car wash business application featuring an initial inspection service to determine pricing. This application is used by Admins, Cashiers, and Operators or staff members responsible for vehicle inspection and washing.",
      id: "Aplikasi untuk usaha carwash dengan layanan inspeksi awal untuk menentukan harga. Aplikasi ini digunakan oleh Admin, Kasir dan Operator atau petugas yang melakukan inspeksi dan mencuci kendaraan",
    },
    features: {
      en: ["Master Data", "Vehicle Inspection", "POS (Point of Sales) Services"],
      id: ["Master Data", "Inspeksi kendaraan", "Layanan Kasir (POS)"],
    },
    theme: "mint",
    screenshot: '/prototype/carwash.png',
    url: 'https://carwash-amber.vercel.app/',
    linkType: "demo",
  },
  {
    id: "vivid",
    title: "VIVID Activation",
    platform: "Web",
    category: { en: "Brand & Even Activation", id: "Brand & Even Activation" },
    description: {
      en: "Landing page for a brand activation and event business",
      id: "Landing page untuk bisnis aktifasi merek dan event",
    },
    features: {
      en: ["Dashboard", 'Product & Service', 'Gallery', 'Article'],
      id: ["Dashboard", 'Produk & Layanan', 'Galeri', 'Artikel'],
    },
    theme: "sky",
    screenshot: '/prototype/vivid.png',
    url: 'https://brand-event.vercel.app/',
    linkType: "demo",
  },
];
