export type PlanFeature = {
  text: string;
  included: boolean;
};

export type PricingTier = {
  pv: number;
  monthly: {
    insight: number;
    experience: number;
    bundle: number;
  };
  yearly: {
    insight: number;
    experience: number;
    bundle: number;
  };
};

export type ModuleFeatures = {
  free: PlanFeature[];
  growth: PlanFeature[];
  premium: PlanFeature[];
};

export type ModuleInfo = {
  title: string;
  name: string;
  description: string;
  features: ModuleFeatures;
  icon: React.ComponentType;
};