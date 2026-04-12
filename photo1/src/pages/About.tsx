import React from "react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-40 pb-32">
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6 block">L'Âme derrière l'objectif</span>
              <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9]">
                Sbai <br /> Mouad
              </h1>
            </div>
            
            <div className="space-y-8 text-lg md:text-xl font-light opacity-70 leading-relaxed">
              <p>
                Basé au cœur de Marrakech, je consacre ma vie à capturer la poésie invisible du quotidien. Mon travail n'est pas une simple documentation, mais une interprétation émotionnelle de la lumière et du silence.
              </p>
              <p className="italic font-medium text-foreground opacity-100">
                "Le silence entre les moments est là où réside la véritable histoire."
              </p>
              <p>
                Spécialisé dans la photographie de luxe, j'accompagne les marques et les individus qui cherchent à transcender l'image pour créer une aura narrative unique. Chaque cliché est une quête d'équilibre entre l'héritage culturel de Marrakech et une esthétique contemporaine épurée.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-8">
              <div>
                <span className="text-3xl font-extrabold tracking-tighter uppercase block mb-2">10+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">Années d'expérience</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold tracking-tighter uppercase block mb-2">500+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">Projets réalisés</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="aspect-[4/5] overflow-hidden bg-secondary/20 grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" 
              alt="Sbai Mouad Portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary/20 py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">Ma Philosophie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Minimalisme</h3>
              <p className="text-sm opacity-60 leading-relaxed">Éliminer le superflu pour ne laisser que l'essentiel. La force d'une image réside dans sa simplicité.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Authenticité</h3>
              <p className="text-sm opacity-60 leading-relaxed">Capturer des moments vrais, non mis en scène, où l'émotion brute prend le dessus sur la technique.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Lumière</h3>
              <p className="text-sm opacity-60 leading-relaxed">Travailler la lumière comme une matière première, sculptant les formes et les ambiances avec précision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="aspect-video overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1920" 
            alt="Marrakech Inspiration" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Inspiration Locale</span>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Marrakech, Maroc</span>
        </div>
      </section>
    </div>
  );
}
