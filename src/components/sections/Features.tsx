import { Wifi, Users, ChefHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Wifi, title: t.features.wifiTitle, description: t.features.wifiDesc },
    { icon: Users, title: t.features.capacityTitle, description: t.features.capacityDesc },
    { icon: ChefHat, title: t.features.kitchenTitle, description: t.features.kitchenDesc },
  ];

  return (
    <section className="py-16 bg-sky-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.features.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm shadow-soft hover:shadow-ocean transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-ocean-gradient p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
