import React from 'react';
import { 
  Globe, 
  Facebook, 
  Search, 
  Video, 
  Briefcase, 
  Target, 
  Smartphone, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Users, 
  Eye, 
  Instagram, 
  RefreshCw, 
  Palette, 
  Image, 
  Sparkles, 
  BarChart3, 
  Tv, 
  Clapperboard, 
  DollarSign, 
  Compass, 
  MessageSquareHeart, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Mail, 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  Plus, 
  Star,
  Award,
  Heart,
  ChevronLeft
} from 'lucide-react';

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Facebook,
  Search,
  Video,
  Briefcase,
  Target,
  Smartphone,
  Layout,
  Zap,
  ShieldCheck,
  Users,
  Eye,
  Instagram,
  RefreshCw,
  Palette,
  Image,
  Sparkles,
  BarChart3,
  Tv,
  Clapperboard,
  DollarSign,
  Compass,
  MessageSquareHeart,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
  Menu,
  X,
  Plus,
  Star,
  Award,
  Heart,
  ChevronLeft
};

interface LucideIconProps {
  name: string;
  className?: string;
  fallback?: React.ComponentType<{ className?: string }>;
}

export default function LucideIcon({ name, className = "w-5 h-5", fallback = Globe }: LucideIconProps) {
  // Try exact match or fallback
  const IconComponent = icons[name] || fallback;
  return <IconComponent className={className} />;
}
