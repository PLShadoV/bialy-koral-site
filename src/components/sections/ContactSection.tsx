import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t.contact.sectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t.contact.sectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-soft hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-ocean-gradient p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t.contact.emailUs}</h3>
                <a href="mailto:info@koralrusinowo.pl" className="text-primary hover:text-primary-hover transition-colors">
                  info@koralrusinowo.pl
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-ocean-gradient p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t.contact.callUs}</h3>
                <a href="tel:+48797392903" className="text-primary hover:text-primary-hover transition-colors">
                  +48 797 392 903
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-ocean transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-ocean-gradient p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t.contact.visitUs}</h3>
                <p className="text-muted-foreground">
                  Sosnowa 9<br />
                  76-107 Rusinowo
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="reserve" size="lg">
              <Link to="/kontakt">{t.contact.emailUs}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
