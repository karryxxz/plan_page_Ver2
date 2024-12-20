import React from 'react';
import { Check } from 'lucide-react';
import { PlanFeature } from '../types/pricing';
import { moduleColors } from '../utils/colors';

type PricingCardProps = {
  title: string;
  price: string | number;
  features: PlanFeature[];
  buttonText: string;
  isYearly: boolean;
  colors: typeof moduleColors[keyof typeof moduleColors];
  contactUrl?: string;
  disabled?: boolean;
};

export function PricingCard({
  title,
  price,
  features,
  buttonText,
  isYearly,
  colors,
  contactUrl,
  disabled = false
}: PricingCardProps) {
  const formattedPrice = typeof price === 'number' 
    ? `¥${price.toLocaleString()}` 
    : price;

  const handleClick = () => {
    if (contactUrl) {
      window.open(contactUrl, '_blank', 'noopener noreferrer');
    }
  };

  const billingPeriod = isYearly ? '月×12（年間契約）' : '月（単月契約）';

  return (
    <div 
      className={`
        relative rounded-2xl border p-8 shadow-lg transition-all duration-200 
        ${!disabled ? 'hover:scale-105' : 'opacity-75'}
      `}
      style={{
        borderColor: '#e5e7eb',
        backgroundColor: 'white'
      }}
    >
      <div className="mb-5">
        <h3 className="text-xl font-bold" style={{ color: disabled ? '#6B7280' : colors.primary }}>
          {title}
        </h3>
      </div>

      <div className="mb-5">
        {typeof price === 'string' ? (
          <div className="flex items-center gap-2">
            <span className="text-2xl text-gray-500 font-medium">{formattedPrice}</span>
          </div>
        ) : (
          <div>
            <span className="text-4xl font-bold">{formattedPrice}</span>
            <span className="text-gray-600">/{billingPeriod}</span>
          </div>
        )}
      </div>

      <ul className="mb-8 space-y-4">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check 
              className="h-5 w-5" 
              style={{ color: feature.included ? (disabled ? '#9CA3AF' : colors.primary) : '#e5e7eb' }}
            />
            <span className={`${feature.included ? (disabled ? 'text-gray-400' : 'text-gray-700') : 'text-gray-400'}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <button 
        onClick={handleClick}
        className={`
          w-full rounded-lg py-3 font-medium transition-all duration-200
          ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'hover:opacity-90'}
        `}
        style={!disabled ? { 
          backgroundColor: colors.secondary,
          color: colors.primary
        } : undefined}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  );
}