import { ContentData } from './types';

export const content: Record<'zh' | 'en', ContentData> = {
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      products: "节能产品",
      cases: "项目案例",
      contact: "联系我们"
    },
    hero: {
      title: "安徽中源智慧节能科技有限公司",
      subtitle: "空调箱EC风机节能改造创领者，综合能源整体解决方案服务商",
      cta: "探索解决方案"
    },
    about: {
      title: "公司简介",
      description: "安徽中源智慧节能科技有限公司是安徽省唯一专注于空调箱EC风机节能改造的服务商。该节能产品由公司股东在上海首创，而后推广至安徽，短短一年时间即与安徽多家龙头企业达成合作。服务行业覆盖洁净厂房（半导体、面板、锂电）、商业办公及公共建筑。",
      tags: ["安徽省唯一", "多行业覆盖", "上海首创技术", "龙头企业合作"]
    },
    features: {
      title: "业务优势",
      subtitle: "为什么选择EC风机改造方案？",
      items: [
        {
          title: "原理简单",
          desc: "高效风机替换低效风机，纯粹的物理能效提升，客户一听就懂。",
          icon: "Zap"
        },
        {
          title: "效果直观",
          desc: "改造前后风量压力一致，但电流明显降低，节能效果看得见。",
          icon: "Eye"
        },
        {
          title: "节能率高",
          desc: "平均节能率30%+，最高可达60%以上，市面上鲜有同类业务。",
          icon: "TrendingUp"
        },
        {
          title: "回收期短",
          desc: "一般情况两到三年即可收回成本，符合绝大多数客户投资标准。",
          icon: "Clock"
        }
      ]
    },
    tech: {
      title: "核心技术对比",
      acTitle: "传统AC风机",
      ecTitle: "新一代EC风机",
      acDesc: [
        "异步感应电机，效率较低（<87%）",
        "依赖变频器调速，低速效率衰减明显",
        "皮带传动，维护成本高，有粉尘污染"
      ],
      ecDesc: [
        "永磁同步电机，效率极高（>90%）",
        "内置控制器，10-100%无级调速",
        "无电刷设计，寿命长，免维护"
      ],
      comparison: [
        { label: "电机效率", valAC: 87, valEC: 93, unit: "%" },
        { label: "传动效率", valAC: 95, valEC: 100, unit: "%" },
        { label: "系统总效率", valAC: 50, valEC: 71, unit: "%" }
      ]
    },
    cases: {
      title: "项目案例具体数据",
      items: [
        {
          client: "长鑫存储",
          location: "合肥",
          savings: "43%",
          powerRed: "10.9kW → 6.2kW"
        },
        {
          client: "阳光电源",
          location: "合肥",
          savings: "52%",
          powerRed: "12.5kW → 5.9kW"
        },
        {
          client: "联合利华",
          location: "合肥",
          savings: "30%",
          powerRed: "28.9kW → 20.3kW"
        }
      ]
    },
    partners: {
      title: "战略合作品牌",
      desc: "与国际一线品牌深度合作，确保核心部件品质。"
    },
    contact: {
      title: "联系我们",
      addressLabel: "地址",
      address: "合肥金融港B3座2112室",
      phoneLabel: "电话",
      phone: "0551-65661186",
      copyright: "© 2024 安徽中源智慧节能科技有限公司 版权所有"
    },
    customization: {
      title: "方案定制",
      managerLabel: "总经理",
      manager: "史总",
      phoneLabel: "手机",
      phone: "189 5321 5158",
      qrAlt: "微信二维码"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      cases: "Cases",
      contact: "Contact"
    },
    hero: {
      title: "Zhongyuan Energy Conservation",
      subtitle: "Leader in EC Fan Energy Saving Renovation & Comprehensive Energy Solutions",
      cta: "Explore Solutions"
    },
    about: {
      title: "About Us",
      description: "Anhui Zhongyuan Smart Energy Conservation Technology Co., Ltd. is the sole provider in Anhui focusing on EC fan renovation for air handling units. Pioneered in Shanghai and expanded to Anhui, we serve cleanrooms (Semicon, Battery), commercial offices, and public infrastructure.",
      tags: ["Sole Provider in Anhui", "Multi-Industry", "Pioneered in Shanghai", "Top Tier Clients"]
    },
    features: {
      title: "Key Advantages",
      subtitle: "Why choose our EC Fan Renovation?",
      items: [
        {
          title: "Simple Principle",
          desc: "Replacing inefficient fans with high-efficiency ones. Pure physical improvement.",
          icon: "Zap"
        },
        {
          title: "Visible Results",
          desc: "Consistent airflow/pressure with significantly lower current. Results are obvious.",
          icon: "Eye"
        },
        {
          title: "High Efficiency",
          desc: "Average saving rate 30%+, up to 60%. A leader in the market.",
          icon: "TrendingUp"
        },
        {
          title: "Short ROI",
          desc: "Investment recovered in 2-3 years typically. Meets most investment standards.",
          icon: "Clock"
        }
      ]
    },
    tech: {
      title: "Technology Comparison",
      acTitle: "Traditional AC Fan",
      ecTitle: "New Gen EC Fan",
      acDesc: [
        "Asynchronous Induction Motor (<87% Eff)",
        "VSD required, poor low-speed efficiency",
        "Belt drive, high maintenance, dust pollution"
      ],
      ecDesc: [
        "Permanent Magnet Sync Motor (>90% Eff)",
        "Built-in controller, 10-100% stepless speed",
        "Brushless design, long life, maintenance-free"
      ],
      comparison: [
        { label: "Motor Efficiency", valAC: 87, valEC: 93, unit: "%" },
        { label: "Drive Efficiency", valAC: 95, valEC: 100, unit: "%" },
        { label: "System Efficiency", valAC: 50, valEC: 71, unit: "%" }
      ]
    },
    cases: {
      title: "Success Stories",
      items: [
        {
          client: "Changxin Memory (CXMT)",
          location: "Hefei",
          savings: "43%",
          powerRed: "10.9kW → 6.2kW"
        },
        {
          client: "Sungrow",
          location: "Hefei",
          savings: "52%",
          powerRed: "12.5kW → 5.9kW"
        },
        {
          client: "Unilever",
          location: "Hefei",
          savings: "30%",
          powerRed: "28.9kW → 20.3kW"
        }
      ]
    },
    partners: {
      title: "Strategic Partners",
      desc: "Deep cooperation with top international brands."
    },
    contact: {
      title: "Contact Us",
      addressLabel: "Address",
      address: "Room 2112, Block B3, Hefei Financial Harbor",
      phoneLabel: "Phone",
      phone: "0551-65661186",
      copyright: "© 2024 Anhui Zhongyuan Smart Energy Conservation Technology Co., Ltd."
    },
    customization: {
      title: "Custom Solutions",
      managerLabel: "GM",
      manager: "Mr. Shi",
      phoneLabel: "Mobile",
      phone: "+86 189 5321 5158",
      qrAlt: "WeChat QR"
    }
  }
};