"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Crown, Facebook, Instagram, Linkedin, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="fluid"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919180808-2pgp2oof.jpg"
          logoAlt="Alpine Retreat Hotel"
          brandName="Alpine Retreat"
          button={{
            text: "Reserve Now",
            href: "contact"
          }}
          className="backdrop-blur-sm"
          buttonClassName="px-6 py-2"
          buttonTextClassName="font-semibold tracking-wide"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Experience Alpine Luxury"
          description="Nestled in the heart of the Swiss Alps, discover unparalleled elegance and timeless beauty in our premium mountain sanctuary."
          tag="Swiss Alpine Retreat"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919181620-ipj3bgud.jpg"
          imageAlt="Swiss Alps mountain landscape at sunrise"
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "pricing"
            }
          ]}
          className="min-h-screen"
          titleClassName="text-5xl md:text-7xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-xl leading-relaxed max-w-2xl"
          tagClassName="uppercase text-sm font-medium letter-spacing-wider"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Heritage"
          description="Established in 1987, Alpine Retreat has become synonymous with Swiss hospitality excellence. We blend timeless traditions with contemporary luxury, offering discerning guests an authentic Alpine experience. Every detail reflects our commitment to perfection."
          className="py-20"
          tagClassName="text-primary-cta"
          descriptionClassName="text-foreground"
        />
      </div>

      <div id="amenities" data-section="amenities" className="max-w-6xl mx-auto px-4 md:px-6">
        <FeatureCardSeven
          title="World-Class Amenities"
          description="Indulge in our signature services crafted to elevate your mountain retreat"
          tag="Exceptional Experiences"
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Spa & Wellness",
              description: "Rejuvenate at our full-service spa featuring Alpine-inspired treatments, sauna facilities, and therapeutic massage services in a serene mountain setting.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919184596-fijlb4gl.jpg",
              imageAlt: "Luxury spa wellness center"
            },
            {
              id: 2,
              title: "Fine Dining",
              description: "Award-winning cuisine prepared by our Michelin-trained chefs, showcasing regional Alpine specialties and international gastronomy with floor-to-ceiling mountain views.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919185180-lylokmvw.jpg",
              imageAlt: "Fine dining restaurant interior"
            },
            {
              id: 3,
              title: "Luxury Suites",
              description: "Exquisitely appointed rooms featuring private balconies, heated floors, and panoramic mountain views. Each suite offers ultimate comfort and sophisticated design.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919185749-260bw74q.jpg",
              imageAlt: "Luxury hotel suite with mountain view"
            },
            {
              id: 4,
              title: "Fitness & Activities",
              description: "State-of-the-art fitness center, yoga studios, hiking trails, and seasonal activities. Maintain your wellness routine while surrounded by Alpine beauty.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919186611-lo7oq3bt.jpg",
              imageAlt: "Modern fitness center"
            }
          ]}
          className="py-20"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg text-foreground/80"
        />
      </div>

      <div id="pricing" data-section="pricing" className="max-w-7xl mx-auto px-4 md:px-6">
        <PricingCardTwo
          title="Premium Accommodations"
          description="Choose from our exquisite room categories, each offering unique views and bespoke amenities"
          tag="Room Types"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "deluxe",
              badge: "Deluxe Room",
              badgeIcon: Star,
              price: "CHF 450",
              subtitle: "Perfect for couples seeking mountain charm",
              buttons: [
                {
                  text: "Reserve Now",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "#"
                }
              ],
              features: [
                "32 sq.m. elegant bedroom",
                "Premium mountain view",
                "Marble en-suite bathroom",
                "Complimentary WiFi",
                "Daily breakfast service",
                "Spa access included"
              ]
            },
            {
              id: "suite",
              badge: "Premium Suite",
              badgeIcon: Crown,
              price: "CHF 750",
              subtitle: "Luxury experience with exclusive privileges",
              buttons: [
                {
                  text: "Reserve Now",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "#"
                }
              ],
              features: [
                "65 sq.m. luxury living space",
                "Panoramic mountain vistas",
                "Marble bathroom with soaking tub",
                "Private balcony with seating",
                "Premium refreshments",
                "Concierge service 24/7"
              ]
            },
            {
              id: "presidential",
              badge: "Presidential Suite",
              badgeIcon: Crown,
              price: "CHF 1,200",
              subtitle: "Ultimate Alpine luxury and exclusivity",
              buttons: [
                {
                  text: "Reserve Now",
                  href: "contact"
                },
                {
                  text: "View Details",
                  href: "#"
                }
              ],
              features: [
                "120 sq.m. penthouse suite",
                "Three-sided mountain views",
                "Spa-inspired marble bathrooms",
                "Private plunge pool",
                "Fine dining delivery",
                "Personal butler service"
              ]
            }
          ]}
          className="py-20"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg text-foreground/80"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="max-w-6xl mx-auto px-4 md:px-6">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from our distinguished guests about their unforgettable Alpine Retreat experiences"
          tag="Guest Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Laurent Beaumont",
              role: "Travel Connoisseur",
              testimonial: "Alpine Retreat redefined luxury for me. The attention to detail, impeccable service, and breathtaking views create an unforgettable sanctuary. I return every season.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919187138-mt9s2p9j.jpg",
              imageAlt: "Laurent Beaumont"
            },
            {
              id: "2",
              name: "Sofia Rosselli",
              role: "Executive Director",
              testimonial: "The perfect escape from the corporate world. Every moment here reflects sophistication and tranquility. The spa treatments are transformative, the cuisine divine.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919188495-9mbw6abd.jpg",
              imageAlt: "Sofia Rosselli"
            },
            {
              id: "3",
              name: "Catherine Dubois",
              role: "Art Collector",
              testimonial: "A masterpiece of hospitality. The hotel's design sensibility rivals the finest galleries I've visited. Pure elegance in every corner.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919188495-9mbw6abd.jpg",
              imageAlt: "Catherine Dubois"
            },
            {
              id: "4",
              name: "Marcus von Steiger",
              role: "Chairman, Premium Hotels",
              testimonial: "In my decades of hotel experience, Alpine Retreat stands apart. The mountain setting, impeccable standards, and genuine warmth make it incomparable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919189090-xvnjogu9.jpg",
              imageAlt: "Marcus von Steiger"
            },
            {
              id: "5",
              name: "Emma Richardson",
              role: "Wellness Educator",
              testimonial: "The wellness programs here are exceptional. Combining mountain tranquility with expert guidance, it's rejuvenating for body and spirit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919188495-9mbw6abd.jpg",
              imageAlt: "Emma Richardson"
            },
            {
              id: "6",
              name: "Alexander Müller",
              role: "Luxury Travel Writer",
              testimonial: "Alpine Retreat represents the pinnacle of Swiss hospitality. Worth every moment, every franc. A destination I enthusiastically recommend to discerning travelers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763919190335-83vcz4ys.jpg",
              imageAlt: "Alexander Müller"
            }
          ]}
          className="py-20"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg text-foreground/80"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Plan Your Stay"
          title="Begin Your Alpine Journey"
          description="Reserve your luxury mountain retreat with our concierge team. We'll craft the perfect experience tailored to your preferences."
          inputPlaceholder="your@email.com"
          buttonText="Request Information"
          termsText="We respect your privacy. Your information helps us curate your perfect Alpine experience."
          className="py-20"
          titleClassName="text-3xl md:text-4xl font-bold"
          descriptionClassName="text-lg text-foreground/80 max-w-2xl mx-auto"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Alpine Retreat"
          copyrightText="© Alpine Retreat Hotel, 2025. A luxury mountain sanctuary in the Swiss Alps."
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "About Us", href: "about" },
                { label: "Rooms & Suites", href: "pricing" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "amenities" }
              ]
            },
            {
              title: "Guest Services",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Concierge", href: "contact" },
                { label: "Activities", href: "amenities" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cancellation Policy", href: "#" },
                { label: "Gift Cards", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
          className="bg-background/50"
          logoTextClassName="text-2xl font-bold tracking-wide"
          copyrightTextClassName="text-sm text-foreground/60"
          columnTitleClassName="font-semibold text-foreground mb-4"
          columnItemClassName="text-sm text-foreground/70 hover:text-primary-cta transition-colors"
        />
      </div>
    </ThemeProvider>
  );
}