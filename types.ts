export type Language = 'zh' | 'en';

export interface ContentData {
  nav: {
    home: string;
    about: string;
    products: string;
    cases: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    tags: string[];
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  tech: {
    title: string;
    acTitle: string;
    ecTitle: string;
    acDesc: string[];
    ecDesc: string[];
    comparison: {
      label: string;
      valAC: number;
      valEC: number;
      unit: string;
    }[];
  };
  cases: {
    title: string;
    savingsLabel: string;
    items: {
      client: string;
      location: string;
      savings: string;
    }[];
  };
  contact: {
    title: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    copyright: string;
  };
  customization: {
    title: string;
    managerLabel: string;
    manager: string;
    phoneLabel: string;
    phone: string;
    qrAlt: string;
  };
}