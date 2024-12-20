import { useState, useCallback, useEffect } from 'react';
import { pricingTiers } from '../data/pricingData';

export function useSlider(initialValue: number, onChange: (value: number) => void) {
  const [isPremiumExpanded, setIsPremiumExpanded] = useState(false);
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    setCurrentValue(initialValue);
  }, [initialValue]);

  const getCurrentIndex = useCallback((pv: number) => {
    return pricingTiers.findIndex(tier => tier.pv === pv);
  }, []);

  const handleDotClick = useCallback((pv: number) => {
    setIsPremiumExpanded(false);
    setCurrentValue(pv);
    onChange(pv);
  }, [onChange]);

  const handleSliderChange = useCallback((index: number) => {
    setIsPremiumExpanded(false);
    const newValue = pricingTiers[index].pv;
    setCurrentValue(newValue);
    onChange(newValue);
  }, [onChange]);

  const handlePremiumToggle = useCallback((expanded: boolean) => {
    setIsPremiumExpanded(expanded);
    if (expanded) {
      setCurrentValue(0);
      onChange(0);
    }
  }, [onChange]);

  return {
    isPremiumExpanded,
    currentValue,
    getCurrentIndex,
    handleDotClick,
    handleSliderChange,
    handlePremiumToggle
  };
}