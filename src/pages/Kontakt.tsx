import PageIntro from "@/components/sections/PageIntro";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { extra } from "@/i18n/extra";

const Kontakt = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: t.contact.validationErrorTitle,
        description: t.contact.validationErrorDescription,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      setShowSuccessModal(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t.contact.sendErrorTitle,
        description: t.contact.sendErrorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-primary">
              {t.contact.successModalTitle}
            </DialogTitle>
            <DialogDescription className="text-center text-lg pt-4">
              {t.contact.successModalDescription}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <PageIntro title={t.contact.pageTitle} description={t.contact.pageSubtitle} image="kontakt" alt={extra[language].alt.cottages} />

          {/* Main Contact Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Call to Action */}
                <div className="text-center mb-12">
                  <Card className="bg-ocean-gradient text-white shadow-ocean">
                    <CardContent className="p-6 md:p-10">
                      <MessageCircle className="h-16 w-16 mx-auto mb-6" />
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t.contact.ctaTitle}
                      </h2>
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <Phone className="h-8 w-8" />
                        <a
                          href="tel:+48797392903"
                          className="text-3xl md:text-4xl font-bold hover:text-accent transition-colors"
                        >
                          +48 797 392 903
                        </a>
                      </div>
                      <p className="text-xl opacity-90">
                        {t.contact.ctaText}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <Card className="shadow-soft">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        {t.contact.formTitle}
                      </h3>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">{t.contact.firstName} *</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder={t.contact.firstNamePlaceholder}
                              className="mt-1"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">{t.contact.lastName} *</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder={t.contact.lastNamePlaceholder}
                              className="mt-1"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">{t.contact.email} *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t.contact.emailPlaceholder}
                            className="mt-1"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">{t.contact.phone}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t.contact.phonePlaceholder}
                            className="mt-1"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message">{t.contact.message} *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={t.contact.messagePlaceholder}
                            rows={5}
                            className="mt-1"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="reserve"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? t.contact.sending : t.contact.sendMessage}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <Card className="shadow-soft">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="bg-ocean-gradient p-3 rounded-full">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold">{t.contact.email}</h3>
                        </div>
                        <a
                          href="mailto:info@koralrusinowo.pl"
                          className="text-lg text-primary hover:text-primary-hover transition-colors"
                        >
                          info@koralrusinowo.pl
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="shadow-soft">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="bg-ocean-gradient p-3 rounded-full">
                            <Phone className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold">{t.contact.phoneTitle}</h3>
                        </div>
                        <a
                          href="tel:+48797392903"
                          className="text-lg text-primary hover:text-primary-hover transition-colors"
                        >
                          +48 797 392 903
                        </a>
                      </CardContent>
                    </Card>

                    <Card className="shadow-soft">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="bg-ocean-gradient p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold">{t.contact.addressTitle}</h3>
                        </div>
                        <div className="text-lg text-muted-foreground">
                          <p>Sosnowa 9</p>
                          <p>76-107 Rusinowo</p>
                          <p>{t.footer.country}</p>
                        </div>
                      </CardContent>
                    </Card>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section id="lokalizacja" className="scroll-mt-20 bg-accent/30 py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {t.contact.howToFindUs}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.contact.howToFindUsSubtitle}
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="shadow-soft">
                  <CardContent className="p-6 text-center">
                    <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Sosnowa%209%2C%2076-107%20Rusinowo"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-white hover:bg-primary-hover"
                  >
                    <MapPin aria-hidden="true" className="size-5" />
                    {t.home.learnMore}
                  </a>
                  </CardContent>
                </Card>

                <div className="text-center mt-6">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Sosnowa 9, 76-107 Rusinowo</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Kontakt;
