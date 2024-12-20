import { useCallback } from 'react';
import { ModuleInfo, PricingTier } from '../types/pricing';

export function usePricing(
  module: ModuleInfo,
  pricing: PricingTier,
  isYearly: boolean,
  isPremiumExpanded: boolean
) {
  const getPriceForPlan = useCallback((planType: 'free' | 'growth' | 'premium') => {
    if (isPremiumExpanded) {
      if (planType === 'free' || planType === 'growth') {
        return '適用対象外';
      }
    }
    if (planType === 'free') return '無料';
    if (planType === 'premium') return 'お問い合わせ';
    
    const priceKey = module.title.toLowerCase();
    return isYearly ? pricing.yearly[priceKey] : pricing.monthly[priceKey];
  }, [module.title, pricing, isYearly, isPremiumExpanded]);

  const getButtonText = useCallback((defaultText: string, planType: 'free' | 'growth' | 'premium') => {
    if (isPremiumExpanded) {
      if (planType === 'free' || planType === 'growth') {
        return '適用対象外';
      }
    }
    return defaultText;
  }, [isPremiumExpanded]);

  const getSignupUrl = useCallback((moduleType: string, selectedPV: number) => {
    if (selectedPV >= 500000) return undefined;
    return `https://www.ptengine.jp/app/signup?plan=free&product=${moduleType}&level=${selectedPV}`;
  }, []);

  return {
    getPriceForPlan,
    getButtonText,
    getSignupUrl
  };
}