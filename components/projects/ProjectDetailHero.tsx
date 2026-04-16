"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, ExternalLink, Award } from "lucide-react";
import type { Project } from "@/lib/projects";
import Wrapper from "../shared/Wrapper";

interface ProjectDetailHeroProps {
  project: Project;
}

const ProjectDetailHero = ({ project }: ProjectDetailHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background with Brand Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-150 h-150 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-150 h-150 bg-secondary/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <Wrapper>
        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 backdrop-blur-md px-4 py-4 rounded-full font-medium">
                  {project.category}
                </Badge>
                <Badge className="bg-primary/20 text-foreground border-transparent px-4 py-4 rounded-full font-medium flex gap-2 items-center">
                  <Award size={14} />
                  Top Rated Project
                </Badge>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-primary shadow-soft">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Completed</p>
                    <p className="text-lg font-bold text-foreground">Dec 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-primary shadow-soft">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Client Industry</p>
                    <p className="text-lg font-bold text-foreground">Technology</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="h-14 px-8 rounded-2xl text-lg font-semibold bg-primary hover:bg-primary-hover shadow-button group">
                  <span className="flex items-center gap-2">
                    Live Preview <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl text-lg font-semibold border-border bg-card/50 backdrop-blur-sm hover:bg-card">
                  View Case Study
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Hero Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] lg:aspect-square"
            >
              <div className="absolute -inset-4 bg-linear-to-b from-primary/20 via-primary/5 to-transparent rounded-[40px] blur-2xl" />
              <div className="relative h-full w-full rounded-[40px] overflow-hidden border border-border/50 shadow-premium group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Branding Badge on Image */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-heavy transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/70 text-sm font-medium mb-1">Project Status</p>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">Live & Scaling</h3>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                      Operational
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProjectDetailHero;
