import { LineChart, LayoutGrid, Package } from 'lucide-react';
import { ModuleInfo, PricingTier } from '../types/pricing';

export const pricingTiers: PricingTier[] = [
  {
    pv: 3000,
    monthly: {
      insight: 6578,
      experience: 9878,
      bundle: 12980
    },
    yearly: {
      insight: 5478,
      experience: 8778,
      bundle: 10978
    }
  },
  {
    pv: 10000,
    monthly: {
      insight: 12980,
      experience: 21780,
      bundle: 27280
    },
    yearly: {
      insight: 10978,
      experience: 16280,
      bundle: 21780
    }
  },
  {
    pv: 50000,
    monthly: {
      insight: 27280,
      experience: 43780,
      bundle: 54780
    },
    yearly: {
      insight: 21780,
      experience: 32780,
      bundle: 43780
    }
  },
  {
    pv: 100000,
    monthly: {
      insight: 43780,
      experience: 65780,
      bundle: 87780
    },
    yearly: {
      insight: 32780,
      experience: 54780,
      bundle: 65780
    }
  },
  {
    pv: 200000,
    monthly: {
      insight: 65780,
      experience: 98780,
      bundle: 131780
    },
    yearly: {
      insight: 54780,
      experience: 87780,
      bundle: 109780
    }
  },
  {
    pv: 500000,
    monthly: {
      insight: 87780,
      experience: 142780,
      bundle: 186780
    },
    yearly: {
      insight: 76780,
      experience: 131780,
      bundle: 164780
    }
  }
];

export const moduleData: Record<string, ModuleInfo> = {
  insight: {
    title: "Insight",
    name: "Insight",
    description: "ヒートマップやアクセス解析で、ユーザー行動を可視化し、Webサイトの課題を発見",
    icon: LineChart,
    features: {
      free: [
        { text: "月間PV上限:3000PV", included: true },
        { text: "ヒートマップ解析(1ページ)", included: true },
        { text: "イベント計測(100イベント)", included: true },
        { text: "コンバージョン計測(3個)", included: true },
        { text: "データ保管期間：1ヶ月", included: true }
      ],
      growth: [
        { text: "ヒートマップ解析(無制限)", included: true },
        { text: "イベント計測(PV上限の10%)", included: true },
        { text: "コンバージョン計測(20個)", included: true },
        { text: "データ保管期間：6ヶ月", included: true },
        { text: "ファネル分析", included: true },
        { text: "離脱率分析", included: true }
      ],
      premium: [
        { text: "Growthプランの全機能", included: true },
        { text: "イベント計測（PV上限の15%〜）", included: true },
        { text: "カスタムレポート作成", included: true },
        { text: "データ保管期間：12ヶ月〜", included: true },
        { text: "専任サポート担当者", included: true }
      ]
    }
  },
  experience: {
    title: "Experience",
    name: "Experience",
    description: "A/Bテスト、Web接客、ノーコードサイト編集で、ユーザー体験を最適化",
    icon: LayoutGrid,
    features: {
      free: [
        { text: "作成できる体験数(2個)", included: true },
        { text: "体験表示回数(3,000回)", included: true },
        { text: "ABテストのゴール数(2個) ", included: true },
        { text: "ユーザーセグメント(2個)", included: true }
      ],
      growth: [
        { text: "作成できる体験数(20個)", included: true },
        { text: "体験表示回数(無制限)", included: true },
        { text: "ABテストのゴール数(20個) ", included: true },
        { text: "ユーザーセグメント(20個)", included: true },
        { text: "ノーコードサイト編集(開発者モード)", included: true },
        { text: "パーソナライズ配信", included: true }
      ],
      premium: [
        { text: "Growthプランの全機能", included: true },
        { text: "カスタムJavaScript", included: true },
        { text: "専任サポート担当者", included: true }
      ]
    }
  },
  bundle: {
    title: "Bundle",
    name: "Bundle",
    description: "InsightとExperienceを統合し、分析から改善までをシームレスに実現",
    icon: Package,
    features: {
      free: [
        { text: "月間PV上限:3000PV", included: true },
        { text: "ヒートマップ解析(1ページ)", included: true },
        { text: "データ保管期間：1ヶ月", included: true },
        { text: "体験表示回数(3,000回)", included: true },
        { text: "作成できる体験数(2個)", included: true },
        { text: "セルフサービスサポート", included: true }
      ],
      growth: [
        { text: "Insightの全Growth機能", included: true },
        { text: "Experienceの全Growth機能", included: true },
        { text: "高度なレポート機能", included: true },
        { text: "優先サポート", included: true }
      ],
      premium: [
        { text: "両製品の全Premium機能", included: true },
        { text: "カスタマイズ可能なプラン", included: true },
        { text: "専任サポート担当者", included: true }
      ]
    }
  }
};