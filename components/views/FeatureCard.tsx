import { CardContent } from "@/components/ui/card";
import { MagicCard } from "../ui/magic-card";
import { FeatureCardProps } from "@/type/FeatureType";

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <MagicCard className="glass-card glass-card-hover group">
      <CardContent className="p-6">
        <Icon className="h-6 w-6 mb-3 text-zinc-400 group-hover:text-white transition-colors" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
      </CardContent>
    </MagicCard>
  );
};

export default FeatureCard;
