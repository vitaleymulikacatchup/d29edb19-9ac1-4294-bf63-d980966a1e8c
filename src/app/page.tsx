"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, ChefHat, Crown, Heart, MessageCircle, Sparkles, Star, Trophy } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Ristorante Roma"
          button={{
            text: "Prenota Tavolo",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Autentica Cucina Italiana nel Cuore di Roma"
          description="Scopri i sapori tradizionali dell'Italia in un'atmosfera di lusso e raffinatezza. La nostra cucina celebra le ricette autentiche con ingredienti premium selezionati."
          tag="Ristorante di Lusso"
          tagIcon={Crown}
          imageSrc="https://images.pexels.com/photos/27822830/pexels-photo-27822830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant Italian restaurant interior in Rome"
          buttons={[
            {
              text: "Prenota Ora",
              href: "contact"
            },
            {
              text: "Scopri Menu",
              href: "product"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="La Nostra Storia"
          description="Da tre generazioni portiamo avanti la tradizione culinaria italiana con passione e dedizione, creando esperienze gastronomiche indimenticabili nel cuore di Roma."
          tag="Tradizione"
          tagIcon={Heart}
          imageSrc="https://images.pexels.com/photos/3771814/pexels-photo-3771814.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Italian chef preparing traditional pasta"
          imagePosition="right"
          bulletPoints={[
            {
              title: "Ingredienti Premium",
              description: "Selezioniamo solo i migliori ingredienti dalle regioni italiane più rinomate",
              icon: Star
            },
            {
              title: "Ricette Autentiche",
              description: "Ogni piatto è preparato seguendo ricette tramandate da generazioni",
              icon: Award
            },
            {
              title: "Atmosfera Unica",
              description: "Un ambiente elegante che celebra la cultura e l'ospitalità italiana",
              icon: Sparkles
            }
          ]}
          buttons={[
            {
              text: "La Nostra Storia",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Piatti Signature"
          description="I nostri piatti più amati, preparati con maestria e presentati con eleganza"
          tag="Menu Speciale"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              brand: "Ristorante Roma",
              name: "Pasta al Tartufo Nero",
              price: "€45",
              rating: 5,
              reviewCount: "2.8k",
              imageSrc: "https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Gourmet pasta with black truffle"
            },
            {
              id: "2",
              brand: "Ristorante Roma",
              name: "Risotto ai Frutti di Mare",
              price: "€38",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: "https://images.pexels.com/photos/23627779/pexels-photo-23627779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Seafood risotto Italian style"
            },
            {
              id: "3",
              brand: "Ristorante Roma",
              name: "Osso Buco alla Milanese",
              price: "€52",
              rating: 5,
              reviewCount: "1.9k",
              imageSrc: "https://images.pexels.com/photos/1527602/pexels-photo-1527602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional Osso Buco Milanese"
            }
          ]}
          buttons={[
            {
              text: "Menu Completo",
              href: "menu"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Cosa Dicono i Nostri Ospiti"
          description="Le testimonianze di chi ha vissuto l'esperienza autentica della nostra cucina"
          tag="Recensioni"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sofia Benedetti",
              role: "Food Critic",
              company: "La Gazzetta Gastronomica",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4694327/pexels-photo-4694327.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sofia Benedetti",
              testimonial: "Un'esperienza culinaria straordinaria che celebra la vera tradizione italiana con eleganza moderna."
            },
            {
              id: "2",
              name: "Marco Antonelli",
              role: "CEO",
              company: "Antonelli Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6284910/pexels-photo-6284910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marco Antonelli",
              testimonial: "La qualità degli ingredienti e la maestria dello chef creano piatti indimenticabili."
            },
            {
              id: "3",
              name: "Elena & Giuseppe",
              role: "Ospiti Affezionati",
              company: "Roma",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9543888/pexels-photo-9543888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Elena and Giuseppe",
              testimonial: "Il nostro ristorante del cuore, dove ogni cena è una celebrazione della cucina italiana autentica."
            },
            {
              id: "4",
              name: "Alessandro Rossi",
              role: "Travel Writer",
              company: "Condé Nast Traveler",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6050331/pexels-photo-6050331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alessandro Rossi",
              testimonial: "Un gioiello gastronomico che rappresenta il meglio della tradizione culinaria romana."
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Riconoscimenti e Partnership"
          description="Siamo orgogliosi dei riconoscimenti ricevuti dalle più prestigiose guide gastronomiche"
          tag="Eccellenza"
          tagIcon={Trophy}
          logos={[
            "https://images.pexels.com/photos/12638564/pexels-photo-12638564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18424851/pexels-photo-18424851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Prenota il Tuo Tavolo"
          description="Riserva un'esperienza culinaria indimenticabile nel nostro ristorante. Il nostro team sarà lieto di accoglierti con la migliore ospitalità italiana."
          imageSrc="https://images.pexels.com/photos/27822830/pexels-photo-27822830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury restaurant interior with elegant tables"
          mediaPosition="right"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Nome e Cognome",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Telefono",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Data Prenotazione",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Numero Ospiti",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Richieste speciali o allergie alimentari...",
            rows: 4,
            required: false
          }}
          buttonText="Conferma Prenotazione"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          copyrightText="© 2025 | Ristorante Roma - Autentica Cucina Italiana"
          columns={[
            {
              title: "Ristorante",
              items: [
                {
                  label: "Menu",
                  href: "menu"
                },
                {
                  label: "Prenotazioni",
                  href: "contact"
                },
                {
                  label: "Eventi Privati",
                  href: "eventi"
                }
              ]
            },
            {
              title: "Info",
              items: [
                {
                  label: "La Nostra Storia",
                  href: "about"
                },
                {
                  label: "Chef",
                  href: "chef"
                },
                {
                  label: "Contatti",
                  href: "contact"
                }
              ]
            },
            {
              title: "Servizi",
              items: [
                {
                  label: "Catering",
                  href: "catering"
                },
                {
                  label: "Wine Tasting",
                  href: "wine"
                },
                {
                  label: "Cooking Class",
                  href: "cooking"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}