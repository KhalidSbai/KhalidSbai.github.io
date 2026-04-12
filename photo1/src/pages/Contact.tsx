import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
        <div className="space-y-16">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block">Contact</span>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9]">
              Parlons de <br /> votre projet
            </h1>
            <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed max-w-md">
              Que ce soit pour une collaboration éditoriale ou une séance privée, je serais ravi d'entendre votre histoire.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block mb-1">Email</span>
                <span className="text-sm font-bold tracking-widest">contact@sbaimouad.com</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block mb-1">Téléphone</span>
                <span className="text-sm font-bold tracking-widest">+212 6 00 00 00 00</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block mb-1">Studio</span>
                <span className="text-sm font-bold tracking-widest">Guéliz, Marrakech, Maroc</span>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block mb-6">Suivre l'aventure</span>
            <div className="flex gap-8">
              <Instagram className="w-6 h-6 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold cursor-pointer hover:opacity-50 transition-opacity">Behance</span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold cursor-pointer hover:opacity-50 transition-opacity">LinkedIn</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-secondary/20 p-8 md:p-12"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] opacity-40">Nom Complet</Label>
              <Input 
                id="name" 
                placeholder="Votre nom" 
                className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-foreground transition-all placeholder:opacity-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] opacity-40">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="votre@email.com" 
                className="bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-foreground transition-all placeholder:opacity-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-[10px] uppercase tracking-[0.2em] opacity-40">Service souhaité</Label>
              <select 
                id="service" 
                className="w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:outline-none focus-visible:border-foreground transition-all text-sm appearance-none"
              >
                <option value="">Sélectionner un service</option>
                <option value="fashion">Mode & Éditorial</option>
                <option value="portrait">Portrait d'Art</option>
                <option value="product">Produit de Luxe</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] opacity-40">Message</Label>
              <textarea 
                id="message" 
                placeholder="Décrivez votre vision..." 
                className="w-full min-h-[150px] bg-transparent border-0 border-b border-border rounded-none px-0 py-6 focus-visible:outline-none focus-visible:border-foreground transition-all text-sm placeholder:opacity-20 resize-none"
              />
            </div>

            <Button className="w-full py-8 text-xs uppercase tracking-[0.3em] font-bold">
              Envoyer la demande
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
