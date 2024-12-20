import React from 'react';
import { moduleColors } from '../utils/colors';
import { useModuleContext } from '../contexts/ModuleContext';

const PV_POINTS = [
  { pv: 3000, label: '3千', unit: 'PV' },
  { pv: 10000, label: '1万', unit: 'PV' },
  { pv: 50000, label: '5万', unit: 'PV' },
  { pv: 100000, label: '10万', unit: 'PV' },
  { pv: 200000, label: '20万', unit: 'PV' },
  { pv: 500000, label: '50万', unit: 'PV' },
  { pv: 500001, label: '50万+', unit: 'PV' },
];

type PVSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

export function PVSlider({ value, onChange }: PVSliderProps) {
  const { selectedModule } = useModuleContext();
  const colors = moduleColors[selectedModule];
  const currentIndex = PV_POINTS.findIndex(point => point.pv === value);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value);
    const newValue = PV_POINTS[newIndex].pv;
    onChange(newValue);
  };

  const handleDotClick = (pv: number) => {
    const newIndex = PV_POINTS.findIndex(point => point.pv === pv);
    onChange(PV_POINTS[newIndex].pv);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-5"> {/* Changed from mb-40 to mb-6 */}
      <div 
        className="bg-white rounded-2xl shadow-lg p-8 border-2" 
        style={{ borderColor: colors.primary }}
      >
        {/* Rest of the component remains the same */}
        <div className="relative mb-8">
          <input
            type="range"
            min="0"
            max={PV_POINTS.length - 1}
            value={currentIndex}
            onChange={handleSliderChange}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2"
            style={{
              background: `linear-gradient(to right, ${colors.primary} ${(currentIndex / (PV_POINTS.length - 1)) * 100}%, #E5E7EB ${(currentIndex / (PV_POINTS.length - 1)) * 100}%)`,
              '--tw-ring-color': colors.primary
            }}
          />
        </div>

        <div className="grid grid-cols-7 gap-0">
          {PV_POINTS.map((point, index) => (
            <div 
              key={point.pv}
              className="flex flex-col items-center"
            >
              <button
                onClick={() => handleDotClick(point.pv)}
                className={`
                  focus:outline-none w-full flex flex-col items-center
                  transition-all duration-200
                  ${index === currentIndex ? 'transform scale-110' : ''}
                `}
              >
                <div 
                  className={`
                    w-3 h-3 rounded-full mb-3 transition-all duration-200
                    ${index === currentIndex ? 'ring-4' : ''}
                  `}
                  style={{
                    backgroundColor: index === currentIndex ? colors.primary : '#E5E7EB',
                    '--tw-ring-color': `${colors.primary}20`
                  }}
                />
                <div className="flex flex-col items-center h-[40px] justify-start">
                  <span 
                    className={`
                      text-sm font-medium whitespace-nowrap
                      ${index === currentIndex ? '' : 'text-gray-600'}
                    `}
                    style={{ color: index === currentIndex ? colors.primary : undefined }}
                  >
                    {point.label}
                  </span>
                  <span className="text-xs text-gray-500 mt-0.5">{point.unit}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}