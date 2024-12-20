export const moduleColors = {
  insight: {
    primary: 'rgb(107, 200, 69)',
    secondary: 'rgb(225, 247, 215)',
    hover: 'rgb(10, 193, 131)',
    
  },
  experience: {
    primary: 'rgb(15, 98, 254)',
    secondary: 'rgb(222, 233, 255)',
    hover: 'rgb(104, 102, 240)',
  },
  bundle: {
    primary: 'rgb(255, 111, 0)',
    secondary: 'rgb(255, 237, 213)',
    hover: 'rgb(255, 159, 20)',
  },
} as const;

export type ModuleType = keyof typeof moduleColors;