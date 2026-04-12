import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "Tout" },
  { id: "fashion", name: "Mode" },
  { id: "portrait", name: "Portrait" },
  { id: "product", name: "Produit" },
  { id: "architecture", name: "Architecture" },
];

const items = [
  { id: 1, category: "fashion", size: "tall", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" },
  { id: 2, category: "portrait", size: "normal", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "product", size: "wide", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200" },
  { id: 4, category: "architecture", size: "normal", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "fashion", size: "normal", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "portrait", size: "tall", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
  { id: 7, category: "product", size: "normal", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
  { id: 8, category: "architecture", size: "wide", image: "https://images.unsplash.com/photo-1449156001437-3a1621acda2e?auto=format&fit=crop&q=80&w=1200" },
  { id: 9, category: "fashion", size: "tall", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Galerie</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none">
            Portfolio <br /> Immersif
          </h1>
        </div>

        <nav className="flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-bold transition-all border-b-2 pb-1",
                activeCategory === cat.id ? "border-foreground opacity-100" : "border-transparent opacity-30 hover:opacity-60"
              )}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "relative group overflow-hidden bg-secondary/20",
                item.size === "wide" && "md:col-span-2",
                item.size === "tall" && "md:row-span-2"
              )}
            >
              <img 
                src={item.image} 
                alt={`Portfolio ${item.id}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-[10px] text-white/60 uppercase tracking-[0.3em] mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-extrabold uppercase tracking-tighter">
                    Vision {item.id}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
