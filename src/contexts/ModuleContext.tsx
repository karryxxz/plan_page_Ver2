import React, { createContext, useContext, useState } from 'react';
import { ModuleType } from '../utils/colors';

type ModuleContextType = {
  selectedModule: ModuleType;
  setSelectedModule: (module: ModuleType) => void;
  showPVSlider: boolean;
  setShowPVSlider: (show: boolean) => void;
};

const ModuleContext = createContext<ModuleContextType | undefined>(undefined);

export function ModuleProvider({ children }: { children: React.ReactNode }) {
  const [selectedModule, setSelectedModule] = useState<ModuleType>('bundle');
  const [showPVSlider, setShowPVSlider] = useState(false);

  return (
    <ModuleContext.Provider value={{ 
      selectedModule, 
      setSelectedModule,
      showPVSlider,
      setShowPVSlider
    }}>
      {children}
    </ModuleContext.Provider>
  );
}

export function useModuleContext() {
  const context = useContext(ModuleContext);
  if (context === undefined) {
    throw new Error('useModuleContext must be used within a ModuleProvider');
  }
  return context;
}