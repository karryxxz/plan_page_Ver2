import React from 'react';
import { moduleColors } from '../utils/colors';
import { useModuleContext } from '../contexts/ModuleContext';

type PremiumPVMessageProps = {
  show: boolean;
};

export function PremiumPVMessage({ show }: PremiumPVMessageProps) {
  const { selectedModule } = useModuleContext();
  const colors = moduleColors[selectedModule];

  if (!show) return null;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4" style={{ color: colors.primary }}>
          50万PV以上の場合
        </h3>
        <p className="text-gray-600 mb-6">
          詳細な料金プランについては、お問い合わせください。
        </p>
        <a
          href="https://www.ptengine.jp/contact_us/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: colors.primary }}
        >
          お問い合わせ
        </a>
      </div>
    </div>
  );
}