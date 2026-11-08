/**
 * KONFIGURASI SISTEM KEUANGAN & OPERASIONAL
 * NEIL RENT CAR NUSANTARA
 */
const APP_CONFIG = {
    appName: "Neil Rent Car - Terminal Operasional Armada",
    businessName: "Neil Rent Car Nusantara",
    subtitle: "Jasa Rental Mobil & Transportasi Profesional",
    periodName: "Operasional Aktif",
    currency: "IDR",
    currencySymbol: "Rp",

    // UI Customization & Otomotif Modern Premium Styling
    ui: {
        title: "Neil Rent Car - Terminal Operasional Armada",
        statusBadge: "Status Armada: Aktif",
        theme: {
            mode: "dark",
            primaryColor: "#0f172a",      // Dark Slate Navy
            secondaryColor: "#1e293b",    // Slate Card Background
            accentColor: "#f59e0b",       // Amber / Orange Accent
            accentHover: "#d97706",
            textColor: "#f8fafc",
            cardBg: "#1e293b",
            borderColor: "#334155"
        }
    },

    // Pengaturan Operasional Rental
    store: {
        address: "Jl. Nusantara Raya No. 99, Jakarta",
        phone: "0812-3456-7890",
        taxRate: 0,
        serviceRate: 0,
        receiptFooter: "Syarat sewa: Wajib verifikasi KTP, SIM A, dan deposit jaminan."
    },

    // Akun Keuangan & Rekening Pembayaran
    accounts: [
        { id: "cash", name: "Kas Tunai Kantor", type: "cash", active: true },
        { id: "qris", name: "QRIS All Payment", type: "e-wallet", active: true },
        { id: "bank_bca", name: "Bank Transfer BCA", type: "bank", active: true },
        { id: "bank_mandiri", name: "Bank Transfer Mandiri", type: "bank", active: true },
        { id: "edc_debit", name: "Mesin EDC / Debit Card", type: "edc", active: true }
    ],

    // Daftar Unit Sewa & Layanan Armada Default
    catalog: [
        {
            id: "unit-001",
            code: "INNOVA-ZNX",
            name: "Toyota Innova Zenix 2.0",
            category: "MPV Premium",
            price: 800000,
            duration: "24 Jam",
            type: "unit"
        },
        {
            id: "unit-002",
            code: "AVANZA-TSS",
            name: "Toyota Avanza TSS",
            category: "LMPV",
            price: 450000,
            duration: "24 Jam",
            type: "unit"
        },
        {
            id: "unit-003",
            code: "PAJERO-SPORT",
            name: "Mitsubishi Pajero Sport",
            category: "SUV Premium",
            price: 1200000,
            duration: "24 Jam",
            type: "unit"
        },
        {
            id: "unit-004",
            code: "HIACE-PREMIO",
            name: "Toyota Hiace Premio 14 Seat",
            category: "Commercial / Minibus",
            price: 1500000,
            duration: "Hari + Driver",
            type: "unit"
        },
        {
            id: "srv-001",
            code: "DRIVER-DK",
            name: "Tambahan Jasa Sopir Dalam Kota",
            category: "Layanan Sopir",
            price: 150000,
            duration: "12 Jam",
            type: "service"
        }
    ],

    // Chart of Accounts (COA) / Kategori Transaksi Keuangan
    transactionCategories: {
        income: [
            "[4-1001] Pendapatan Sewa Lepas Kunci",
            "[4-1002] Pendapatan Sewa All-In (Driver + BBM)",
            "[4-1003] Denda Keterlambatan / Overtime Sewa"
        ],
        expense: [
            "[5-1001] Beban BBM & E-Toll",
            "[5-1002] Beban Cuci & Salon Mobil",
            "[5-1003] Beban Servis Mesin, Ban, & Ganti Oli",
            "[5-1004] Gaji / Uang Jalan Sopir"
        ]
    },

    // Konfigurasi Database Firebase
    firebase: {
        apiKey: "AIzaSyBSxD060e_MyiS62hHsWkqlAhBqDuFYQMI",
        authDomain: "finance-ai-master-byneilverse.firebaseapp.com",
        projectId: "finance-ai-master-byneilverse",
        storageBucket: "finance-ai-master-byneilverse.firebasestorage.app",
        messagingSenderId: "120043241027",
        appId: "1:120043241027:web:ec78438f39440125b85ef6"
    }
};