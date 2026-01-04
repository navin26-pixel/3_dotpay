// Mock data for 3dotpay

export const supportedCountries = [
  {
    id: 1,
    name: 'Thailand',
    flag: '🇹🇭',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=500&fit=crop',
    currency: 'THB',
    network: 'PromptPay'
  },
  {
    id: 2,
    name: 'Vietnam',
    flag: '🇻🇳',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=500&fit=crop',
    currency: 'VND',
    network: 'VietQR'
  },
  {
    id: 3,
    name: 'Philippines',
    flag: '🇵🇭',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&h=500&fit=crop',
    currency: 'PHP',
    network: 'QR Ph'
  },
  {
    id: 4,
    name: 'Singapore',
    flag: '🇸🇬',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=500&fit=crop',
    currency: 'SGD',
    network: 'SGQR'
  },
  {
    id: 5,
    name: 'Malaysia',
    flag: '🇲🇾',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=500&fit=crop',
    currency: 'MYR',
    network: 'DuitNow'
  },
  {
    id: 6,
    name: 'Cambodia',
    flag: '🇰🇭',
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=400&h=500&fit=crop',
    currency: 'KHR',
    network: 'KHQR'
  }
];

export const howItWorks = [
  {
    step: 1,
    title: 'Add Payment Method',
    description: 'Choose from secure deposit methods including bank connections, bank transfers, or cards. Your information is protected every step of the way.'
  },
  {
    step: 2,
    title: 'Add Funds',
    description: 'Top up instantly using your preferred payment method. No hidden fees, no waiting.'
  },
  {
    step: 3,
    title: 'Scan QR Code',
    description: "Use the 3dotpay app to scan the merchant's standard QR code, compatible with the country's local payment networks."
  },
  {
    step: 4,
    title: 'Review & Confirm',
    description: 'Double-check your payment details, including the amount, FX rate, and merchant name, before completing the transaction.'
  },
  {
    step: 5,
    title: 'Payment Complete',
    description: 'Your wallet seamlessly converts to the local currency, ensuring the merchant gets paid instantly.'
  }
];

export const qrNetworks = [
  { id: 1, name: 'KHQR', country: 'Cambodia', logo: 'https://www.nbc.org.kh/images/logo/khqr-logo.png' },
  { id: 2, name: 'PromptPay', country: 'Thailand', logo: 'https://www.bot.or.th/content/dam/bot/icons/icon-promptpay.svg' },
  { id: 3, name: 'VietQR', country: 'Vietnam', logo: 'https://vietqr.net/portal-service/portal/default-logo.png' },
  { id: 4, name: 'DuitNow', country: 'Malaysia', logo: 'https://www.duitnow.my/assets/images/logo/duitnow-logo.png' },
  { id: 5, name: 'SGQR', country: 'Singapore', logo: 'https://www.mas.gov.sg/-/media/MAS/News-and-Publications/Speeches/2018/SGQR-logo.png' },
  { id: 6, name: 'QR Ph', country: 'Philippines', logo: 'https://www.bsp.gov.ph/Payments/QRPh/qrph-logo.png' }
];

export const rateComparison = [
  {
    provider: '3dotpay',
    supportsQR: true,
    rate: 31.44,
    fees: -5.00,
    feeNote: '1% cashback',
    spendingPower: 15877.20,
    isCheapest: true
  },
  {
    provider: 'Wise',
    supportsQR: false,
    rate: 31.25,
    fees: 8.75,
    feeNote: '',
    spendingPower: 15351.56,
    savings: 525.64
  },
  {
    provider: 'Revolut',
    supportsQR: false,
    rate: 31.13,
    fees: 10.00,
    feeNote: '',
    spendingPower: 15253.70,
    savings: 623.50
  },
  {
    provider: 'Cash ATM',
    supportsQR: false,
    rate: 30.97,
    fees: 7.95,
    feeNote: '',
    spendingPower: 15234.34,
    savings: 642.86
  }
];

export const securityFeatures = [
  {
    id: 1,
    title: 'Protected Funds',
    description: 'Your funds are insured and stored in trusted banks, kept separate and secure.',
    icon: 'Shield'
  },
  {
    id: 2,
    title: 'Identity Verification',
    description: 'Powered by machine learning, every account is verified to block bad actors.',
    icon: 'UserCheck'
  },
  {
    id: 3,
    title: '24/7 Monitoring',
    description: 'Our security team monitors transactions around the clock with human support.',
    icon: 'Eye'
  },
  {
    id: 4,
    title: 'Licensed & Regulated',
    description: 'Registered and licensed under strict financial security standards.',
    icon: 'BadgeCheck'
  },
  {
    id: 5,
    title: 'Real-time Alerts',
    description: 'Instant updates on account activity to help you spot anything suspicious.',
    icon: 'Bell'
  },
  {
    id: 6,
    title: 'Access Protection',
    description: 'If we spot a login from an unusual location, we act fast to secure your account.',
    icon: 'Lock'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Alex Chen',
    handle: '@alexadventures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    quote: 'Game changer for traveling in Southeast Asia! No more ATM hunting or carrying cash.',
    followers: '125K'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    handle: '@sarahexplores',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    quote: 'The exchange rates are unbeatable. Saved so much money on my Thailand trip!',
    followers: '89K'
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    handle: '@digitalnomadlife',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    quote: 'As a digital nomad, this app is essential. Works everywhere I go.',
    followers: '210K'
  },
  {
    id: 4,
    name: 'Emma Thompson',
    handle: '@emmatravels',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    quote: 'Finally an app that understands travelers. The cashback is a nice bonus too!',
    followers: '67K'
  }
];

export const faqs = [
  {
    id: 1,
    question: 'How do I make payments with 3dotpay at merchant stores?',
    answer: 'Simply open the 3dotpay app, scan the QR code displayed at the merchant, enter the amount, and confirm. The payment is processed instantly in local currency.'
  },
  {
    id: 2,
    question: 'What exchange rate does 3dotpay use?',
    answer: 'We use mid-market exchange rates with full transparency. You always see the exact rate before confirming any transaction.'
  },
  {
    id: 3,
    question: 'What are the fees for deposits and withdrawals?',
    answer: 'Bank transfers are free. Card deposits have a small processing fee. Withdrawals to your bank are always free.'
  },
  {
    id: 4,
    question: 'What are the fees for payments?',
    answer: 'Payments are free! Plus, you earn 1% cashback on all transactions.'
  },
  {
    id: 5,
    question: 'What countries is 3dotpay available in?',
    answer: 'Currently available in Thailand, Vietnam, Philippines, Singapore, Malaysia, and Cambodia. We are expanding to more countries soon!'
  },
  {
    id: 6,
    question: 'Is 3dotpay secure for transactions?',
    answer: 'Absolutely. We use bank-level encryption, are fully licensed and regulated, and have 24/7 fraud monitoring. Your funds are always protected.'
  }
];
