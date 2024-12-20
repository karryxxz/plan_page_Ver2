import React from 'react';
import { ModuleType, moduleColors } from '../utils/colors';
import { formatPV } from '../utils/format';

type SliderDotProps = {
  pv: number;
  isSelected: boolean;
  onClick: () => void;
  moduleType: ModuleType;
  isDisabled?: boolean;
};

export function SliderDot({ 
  pv, 
  isSelected, 
  onClick, 
  moduleType,
  isDisabled = false 
}: SliderDotProps) {
  const colors = moduleColors[moduleType];
  const isPremiumPV = pv >= 500000;

  return (
    <button 
      onClick={onClick}
      disabled={isDisabled || isPremiumPV}
      className={`
        flex flex-col items-center transition-all duration-200 focus:outline-none
        ${isSelected ? 'transform scale-110' : ''}
        ${isDisabled || isPremiumPV ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
      `}
      style={{ width: '60px' }}
    >
      <div 
        className={`
          w-5 h-5 rounded-full mb-3 transition-all duration-200
          ${isSelected ? 'ring-4 shadow-lg' : ''}
        `}
        style={{
          backgroundColor: isSelected ? colors.primary : '#E5E7EB',
          '--tw-ring-color': `${colors.primary}20`
        }}
      />
      <div className="h-12 flex flex-col justify-start items-center">
        <span 
          className={`
            text-center text-sm font-medium whitespace-nowrap transition-all duration-200
            ${isSelected ? 'scale-110' : 'text-gray-600'}
          `}
          style={{ color: isSelected ? colors.primary : undefined }}
        >
          {formatPV(pv)}
        </span>
        <span className="text-center text-xs text-gray-500">PV</span>
      </div>
    </button>
  );
}