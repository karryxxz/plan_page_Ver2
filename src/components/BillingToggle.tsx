import React from 'react';

type BillingToggleProps = {
  isYearly: boolean;
  onChange: (isYearly: boolean) => void;
};

export function BillingToggle({ isYearly, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(!isYearly)}
        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#091E42] focus-visible:ring-opacity-75"
        style={{ backgroundColor: isYearly ? '#091E42' : '#E5E7EB' }}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform ${
            isYearly ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>

      <div className="flex items-center gap-2">
        <span className={`text-sm ${isYearly ? 'text-[#091E42] font-medium' : 'text-gray-500'}`}>
          年間契約
        </span>
        <span className="bg-[#091E42] text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
         Save 20%
        </span>
      </div>
    </div>
  );
}