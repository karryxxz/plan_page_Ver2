import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PricingSection } from './PricingSection';
import { PVSlider } from './PVSlider';
import { BillingToggle } from './BillingToggle';
import { TabGroup } from './TabGroup';
import { moduleData, pricingTiers } from '../data/pricingData';
import { moduleColors } from '../utils/colors';
import { Header } from './Header';
import { useModuleContext } from '../contexts/ModuleContext';
import { PremiumPVMessage } from './PremiumPVMessage';

export function PricingContent() {
  const [selectedPV, setSelectedPV] = useState(3000);
  const [isYearly, setIsYearly] = useState(false);
  const { selectedModule, showPVSlider } = useModuleContext();

  const selectedTier = pricingTiers.find(tier => tier.pv === selectedPV) || pricingTiers[0];
  const currentModule = moduleData[selectedModule];
  const colors = moduleColors[selectedModule];
  const isPremiumPlusMode = selectedPV > 500000;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4">
        <div className="pt-36 pb-12">
          <p className="text-xl text-gray-600 text-center mb-14">
            ビジネスの規模に合わせて最適なプランを選びましょう！
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">ステップ 1：製品を選択</h2>
              </div>
              <TabGroup />
            </div>
          </motion.div>

          <AnimatePresence>
            {showPVSlider && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                data-step="2"
              >
                <div className="mt-32 mb-8 scroll-mt-24">
                  <div className="flex items-center justify-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">ステップ 2：月間PV数を選択</h2>
                  </div>

                  <div className="space-y-4">
                    <PVSlider value={selectedPV} onChange={setSelectedPV} />
                    {isPremiumPlusMode && <PremiumPVMessage show={true} />}

                    <div className="flex flex-col mt-16 mb-8">
                      <div className="flex justify-between items-center mt-12"> {/* Changed from mt-5 to mt-12 */}
                        <h2 className="text-2xl font-bold text-gray-900">
                          現在選択中の製品は <span style={{ color: colors.primary }}>{currentModule.name}</span>
                        </h2>
                        <BillingToggle isYearly={isYearly} onChange={setIsYearly} />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">※料金の表記は全て税込金額となります。</p>
                    </div>

                    <PricingSection
                      module={currentModule}
                      selectedPV={selectedPV}
                      pricing={selectedTier}
                      isYearly={isYearly}
                      moduleType={selectedModule}
                      isPremiumPlusMode={isPremiumPlusMode}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center text-gray-600">
          <div className="max-w-3xl mx-auto space-y-4">
            <p>すべてのプランに14日間の無料トライアル期間が付きます。</p>
            <p>年間契約は12ヶ月の料金を一括でお支払いいただく形になります。</p>
            <p>月間PV数は、タグが入っているページの1ヶ月間の合計PV数です。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}