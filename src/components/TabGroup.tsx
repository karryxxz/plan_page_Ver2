import React from 'react';
import { ModuleType, moduleColors } from '../utils/colors';
import { moduleData } from '../data/pricingData';
import { Tag, CheckCircle2 } from 'lucide-react';
import { useModuleContext } from '../contexts/ModuleContext';

const baseFeatures = {
  insight: ['ヒートマップ', 'アクセス解析', 'セグメント分析', 'コンバージョン/イベント計測'],
  experience: ['ABテスト(ABテスト体験)', 'Popup配信(Web接客体験)', 'ノーコードでサイト編集(ページ編集体験)', 'リダイレクトテスト(リダイレクト体験)'],
  bundle: ['Insightの全機能', 'Experienceの全機能', 'ABテストと連携したヒートマップ','インサイト発見から施策実装までワンストップ']
} as const;

export function TabGroup() {
  const tabs: ModuleType[] = ['insight', 'experience', 'bundle'];
  const { selectedModule, setSelectedModule, setShowPVSlider } = useModuleContext();

  const handleTabClick = (tab: ModuleType) => {
    setSelectedModule(tab);
    setShowPVSlider(true);
    
    setTimeout(() => {
      const step2Element = document.querySelector('[data-step="2"]');
      if (step2Element) {
        const headerOffset = 100;
        const elementPosition = step2Element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tabs.map((tab) => {
        const isSelected = selectedModule === tab;
        const module = moduleData[tab];
        const colors = moduleColors[tab];
        const Icon = module.icon;

        return (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`
              relative p-6 rounded-2xl transition-all duration-200 text-left
              ${isSelected ? 'ring-2 shadow-lg scale-105' : 'hover:shadow-md border hover:scale-102'}
            `}
            style={{
              borderColor: isSelected ? colors.primary : '#e5e7eb',
              backgroundColor: isSelected ? colors.secondary : 'white',
              ringColor: colors.primary,
              transform: isSelected ? 'scale(1.02)' : 'scale(1)',
              boxShadow: isSelected ? `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 2px ${colors.primary}` : undefined
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: colors.primary + '20' }}
                >
                  <Icon 
                    className="w-6 h-6"
                    style={{ color: colors.primary }}
                  />
                </div>
                <h3 className="text-xl font-bold" style={{ color: colors.primary }}>
                  {module.title}
                </h3>
              </div>
              {tab === 'bundle' && (
                <div className="flex items-center gap-2">
                  <div className="bg-[#091E42] text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    おすすめ
                  </div>
                  <div className="flex items-center justify-center bg-[#091E42] text-white text-xs px-2 py-1 rounded-full">
                    <Tag className="w-3 h-3 mr-1" />
                    20%お得
                  </div>
                </div>
              )}
            </div>

            <p className="text-gray-600 mb-6 min-h-[3rem]">
              {module.description}
            </p>

            <div className="space-y-3">
              <p className="font-medium text-gray-900">主な機能：</p>
              {baseFeatures[tab].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: colors.primary }}
                  />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </button>
        );
      })}
    </div>
  );
}