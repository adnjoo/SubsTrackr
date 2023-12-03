/**
 * Subscription icons
 *
 * Company logos
 * */
export const SubscriptionIcons = {
  // CONSUMER
  PRIME: "prime",
  TESLA: "tesla",
  // Media
  APPLETV: "appletvplus",
  DISNEY: "disneyplus",
  HULU: "hulu",
  MAX: "max",
  NETFLIX: "netflix",
  YOUTUBE_PREMIUM: "youtubepremium",
  // Music
  APPLEMUSIC: "applemusic",
  SPOTIFY: "spotify",
  // SAAS - design
  ADOBE: "adobe",
  CANVA: "canva",
  // SAAS - productivity
  MICROSOFT365: "microsoft365",
  NOTION: "notion",
  ZAPIER: "zapier",
  // SAAS - AI
  CHATGPT: "chatgpt",
  MIDJOURNEY: "midjourney",
  // SAAS - developer productivity
  COPILOT: "copilot",
};

/**
 * Expense icons
 *
 * Not necessarily related to subscriptions but still expenses
 * */
export const ExpenseIcons = {
  CAR: "car",
  CAR_INSURANCE: "carinsurance",
  GYM: "gym",
  MORTGAGE: "mortgage",
  PHONE: "phone",
  UTILITIES: "utilities",
};

export const isIconAvailable = (icon: string) => {
  return (
    Object.values(ExpenseIcons).includes(icon) ||
    Object.values(SubscriptionIcons).includes(icon)
  );
};

/**
 * TODO: Business expense icons
 * */
