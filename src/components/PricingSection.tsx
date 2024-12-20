import React from 'react';
import { ModuleInfo, PricingTier } from '../types/pricing';
import { ModuleType, moduleColors } from '../utils/colors';
import { PricingCard } from './PricingCard';

type PricingSectionProps = {
  module: ModuleInfo;
  selectedPV: number;
  pricing: PricingTier;
  isYearly: boolean;
  moduleType: ModuleType;
  isPremiumPlusMode: boolean;
};

export function PricingSection({ 
  module, 
  selectedPV, 
  pricing, 
  isYearly, 
  moduleType,
  isPremiumPlusMode 
}: PricingSectionProps) {
  const colors = moduleColors[moduleType];

  const getPrice = (planType: 'free' | 'growth' | 'premium') => {
    if (isPremiumPlusMode && planType !== 'premium') return '適用対象外';
    if (planType === 'free') return '無料';
    if (planType === 'premium') return 'お問い合わせ';
    return isYearly ? pricing.yearly[moduleType] : pricing.monthly[moduleType];
  };

  const getButtonText = (planType: 'free' | 'growth' | 'premium') => {
    if (isPremiumPlusMode && planType !== 'premium') return '適用対象外';
    switch (planType) {
      case 'free': return '無料で始める';
      case 'growth': return '14日間無料トライアル';
      case 'premium': return 'お問い合わせ';
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      <PricingCard
        title="無料プラン"
        price={getPrice('free')}
        features={module.features.free}
        buttonText={getButtonText('free')}
        isYearly={isYearly}
        colors={colors}
        disabled={isPremiumPlusMode}
      />
      <PricingCard
        title="Growthプラン"
        price={getPrice('growth')}
        features={module.features.growth}
        buttonText={getButtonText('growth')}
        isYearly={isYearly}
        colors={colors}
        disabled={isPremiumPlusMode}
      />
      <PricingCard
        title="プレミアムプラン"
        price={getPrice('premium')}
        features={module.features.premium}
        buttonText={getButtonText('premium')}
        isYearly={isYearly}
        colors={colors}
        contactUrl="https://www.ptengine.jp/contact_us/"
      />
    </div>
  );
}