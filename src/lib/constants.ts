
import { 
  Dollar, 
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
}

export const EXCHANGE_SERVICES: ExchangeService[] = [
  {
    id: "paypal",
    name: "PayPal",
    icon: Dollar,
    description: "Send and receive money internationally"
  },
  {
    id: "payeer",
    name: "Payeer",
    icon: CreditCard,
    description: "Fast online payment system"
  },
  {
    id: "usdt",
    name: "USDT",
    icon: Coins,
    description: "Tether stablecoin cryptocurrency"
  },
  {
    id: "skrill",
    name: "Skrill",
    icon: CreditCard,
    description: "Digital wallet and online payment system"
  },
  {
    id: "perfectmoney",
    name: "Perfect Money",
    icon: BadgeDollarSign,
    description: "E-currency and online payment system"
  },
  {
    id: "wise",
    name: "Wise",
    icon: Send,
    description: "International money transfers"
  },
  {
    id: "payoneer",
    name: "Payoneer",
    icon: CreditCard,
    description: "Online payment and money transfer service"
  },
  {
    id: "advcash",
    name: "Advcash",
    icon: Wallet,
    description: "Digital payment solution"
  },
  {
    id: "betwinner",
    name: "BetWinner",
    icon: ShoppingBag,
    description: "Online betting platform"
  },
  {
    id: "1xbet",
    name: "1xBet",
    icon: ShoppingBag,
    description: "Online gambling platform"
  },
  {
    id: "melbet",
    name: "MelBet",
    icon: ShoppingBag,
    description: "Online betting and gambling platform"
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

export const CONTACT_NUMBER = "+212 604-881890";
