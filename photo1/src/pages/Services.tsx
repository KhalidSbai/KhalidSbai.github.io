import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "Mode & Éditorial",
    description: "Une approche narrative qui transcende le simple vêtement pour raconter une histoire d'élégance et de caractère. Idéal pour les marques de luxe et les publications de mode.",
    image: "https://picsum.photos/seed/serv1/1200/1600",
    details: ["Direction artistique", "Stylisme lumière", "Retouche haute-fidélité"]
  },
  {
    id: "02",
    title: "Portrait d'Art",
    description: "Capturer l'âme derrière le regard. Des séances intimistes où chaque ombre et chaque lumière sont sculptées pour révéler votre essence véritable.",
    image: "https://picsum.photos/seed/serv2/1200/1600",
    details: ["Séances privées", "Portraits corporate de luxe", "Noir & Blanc artistique"]
  },
  {
    id: "03",
    title: "Produit & Lifestyle",
    description: "Mettre en scène vos créations dans l'atmosphère envoûtante de Marrakech. Une valorisation visuelle qui crée le désir et l'exclusivité.",
    image: "https://picsum.photos/seed/serv3/1200/1600",
    details: ["Packshot créatif", "Mise en situation", "Contenu réseaux sociaux"]
  }
];

export default function Services() {
  return (
    <div className="pt-40 pb-32">
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6 block">Expertise</span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9] mb-12">
            L'Art de la <br /> Lumière
          </h1>
          <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed">
            Chaque projet est une collaboration unique. Mon approche éditoriale garantit des visuels qui ne se contentent pas d'exister, mais qui racontent une histoire mémorable.
          </p>
        </div>
      </section>

      <div className="space-y-64">
        {services.map((service, i) => (
          <section key={service.id} className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className={i % 2 === 0 ? "flex flex-col md:flex-row gap-16 md:gap-32" : "flex flex-col md:flex-row-reverse gap-16 md:gap-32"}>
              <div className="flex-1">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="aspect-[3/4] overflow-hidden bg-secondary/20"
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-8">
                <span className="text-4xl md:text-6xl font-extrabold opacity-10">{service.id}</span>
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">{service.title}</h2>
                <p className="text-lg font-light opacity-60 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold">
                      <div className="w-8 h-px bg-foreground/20" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Button 
                    variant="outline" 
                    className="px-10 py-6 text-xs uppercase tracking-[0.2em] border-foreground/20"
                    asChild
                  >
                    <Link to="/contact">Sur Devis — S'informer</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-64 px-6 md:px-12 py-32 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mb-8">Prêt à raconter votre histoire ?</h2>
        <Button 
          variant="outline" 
          className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-12 py-8 text-sm uppercase tracking-[0.3em]"
          asChild
        >
          <Link to="/contact">Démarrer un projet</Link>
        </Button>
      </section>
    </div>
  );
}
