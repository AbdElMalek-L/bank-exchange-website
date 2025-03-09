
import { 
  DollarSign, 
  CreditCard, 
  Wallet, 
  Banknote, 
  BadgeDollarSign, 
  Coins, 
  ShoppingBag, 
  Send 
} from "lucide-react";

export type ExchangeService = {
  id: string;
  name: string;
  icon: any;
  description?: string;
  arabicName?: string;
  arabicDescription?: string;
}

export const EXCHANGE_SERVICES: ExchangeService[] = [
  {
    id: "paypal",
    name: "PayPal",
    arabicName: "باي بال",
    icon: DollarSign,
    description: "Send and receive money internationally",
    arabicDescription: "إرسال واستقبال الأموال دوليًا"
  },
  {
    id: "payeer",
    name: "Payeer",
    arabicName: "باير",
    icon: CreditCard,
    description: "Fast online payment system",
    arabicDescription: "نظام دفع إلكتروني سريع"
  },
  {
    id: "usdt",
    name: "USDT",
    arabicName: "تيثر",
    icon: Coins,
    description: "Tether stablecoin cryptocurrency",
    arabicDescription: "عملة تيثر المستقرة الرقمية"
  },
  {
    id: "skrill",
    name: "Skrill",
    arabicName: "سكريل",
    icon: CreditCard,
    description: "Digital wallet and online payment system",
    arabicDescription: "محفظة رقمية ونظام دفع إلكتروني"
  },
  {
    id: "perfectmoney",
    name: "Perfect Money",
    arabicName: "بيرفكت موني",
    icon: BadgeDollarSign,
    description: "E-currency and online payment system",
    arabicDescription: "عملة إلكترونية ونظام دفع عبر الإنترنت"
  },
  {
    id: "wise",
    name: "Wise",
    arabicName: "وايز",
    icon: Send,
    description: "International money transfers",
    arabicDescription: "تحويلات مالية دولية"
  },
  {
    id: "payoneer",
    name: "Payoneer",
    arabicName: "بايونير",
    icon: CreditCard,
    description: "Online payment and money transfer service",
    arabicDescription: "خدمة دفع وتحويل أموال عبر الإنترنت"
  },
  {
    id: "advcash",
    name: "Advcash",
    arabicName: "أدفكاش",
    icon: Wallet,
    description: "Digital payment solution",
    arabicDescription: "حلول دفع رقمية"
  },
  {
    id: "betwinner",
    name: "BetWinner",
    arabicName: "بيت وينر",
    icon: ShoppingBag,
    description: "Online betting platform",
    arabicDescription: "منصة رهان عبر الإنترنت"
  },
  {
    id: "1xbet",
    name: "1xBet",
    arabicName: "ون اكس بيت",
    icon: ShoppingBag,
    description: "Online gambling platform",
    arabicDescription: "منصة مراهنات عبر الإنترنت"
  },
  {
    id: "melbet",
    name: "MelBet",
    arabicName: "ميل بيت",
    icon: ShoppingBag,
    description: "Online betting and gambling platform",
    arabicDescription: "منصة رهان ومقامرة عبر الإنترنت"
  }
];

export const PAYMENT_METHODS = [
  "Cash Plus",
  "CIH Bank",
  "Attijariwafa Bank",
  "Al Barid Bank",
  "Inwi",
  "Orange"
];

export const ARABIC_PAYMENT_METHODS = [
  "كاش بلوس",
  "البنك التجاري الصناعي",
  "التجاري وفا بنك",
  "بريد بنك",
  "إنوي",
  "أورنج"
];

export const CONTACT_NUMBER = "+212 604-881890";
