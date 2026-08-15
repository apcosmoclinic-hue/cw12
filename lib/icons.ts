import {
  Sparkles, Sun, CircleDot, Wind, Droplet, FlaskConical, Zap, CircleDashed,
  Layers, Heart, ShieldAlert, AlertCircle, Hand, Scissors, Gem, Star, Clock,
  Target, Circle, ShieldCheck, LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles, Sun, CircleDot, Wind, Droplet, FlaskConical, Zap, CircleDashed,
  Layers, Heart, ShieldAlert, AlertCircle, Hand, Scissors, Gem, Star, Clock,
  Target, Circle, ShieldCheck,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Sparkles;
}
