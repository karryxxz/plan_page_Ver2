import React from 'react';
import { ModuleType, moduleColors } from '../utils/colors';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type PremiumPlanCTAProps = {
  moduleType: ModuleType;
  isExpanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
};

export function PremiumPlanCTA({ 
  moduleType, 
  isExpanded, 
  onExpandedChange 
}: PremiumPlanCTAProps) {
  const colors = moduleColors[moduleType];

  return (
    <div className="flex flex-col items-center" style={{ width: '120px' }}>
      <button
        onClick={() => onExpandedChange(!isExpanded)}
        className={`
          group flex flex-col items-center transition-all duration-200 
          hover:scale-105 focus:outline-none
          ${isExpanded ? 'scale-110' : ''}
        `}
      >
        <div 
          className={`
            w-5 h-5 rounded-full mb-3 transition-all duration-200 shadow-lg
            ${isExpanded ? 'ring-4' : ''}
          `}
          style={{
            backgroundColor: isExpanded ? colors.primary : '#E5E7EB',
            '--tw-ring-color': `${colors.primary}20`
          }}
        />
        <div className="h-12 flex flex-col justify-start items-center">
          <span 
            className={`
              text-center text-sm font-medium whitespace-nowrap transition-all duration-200
              ${isExpanded ? 'scale-110' : 'text-gray-600'}
            `}
            style={{ color: isExpanded ? colors.primary : undefined }}
          >
            50万+
          </span>
          <span className="text-center text-xs text-gray-500">PV</span>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-center"
          >
            <p className="text-sm text-gray-600 mb-2">詳細はお問い合わせください</p>
            <a
              href="https://www.ptengine.jp/contact_us/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1 px-4 py-2 rounded-lg 
                text-sm font-medium text-white whitespace-nowrap 
                transition-all duration-200 hover:scale-105 shadow-lg
              "
              style={{ backgroundColor: colors.primary }}
            >
              お問い合わせ <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}