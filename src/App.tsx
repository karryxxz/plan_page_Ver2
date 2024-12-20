import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PricingSection } from './components/PricingSection';
import { PVSlider } from './components/PVSlider';
import { BillingToggle } from './components/BillingToggle';
import { TabGroup } from './components/TabGroup';
import { moduleData, pricingTiers } from './data/pricingData';
import { ModuleType, moduleColors } from './utils/colors';
import { Header } from './components/Header';
import { ModuleProvider } from './contexts/ModuleContext';
import { PricingContent } from './components/PricingContent';

function App() {
  return (
    <ModuleProvider>
      <PricingContent />
    </ModuleProvider>
  );
}

export default App;