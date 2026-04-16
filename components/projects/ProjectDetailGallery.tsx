/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from "lucide-react";
import { Project } from "@/lib/projects";
import Wrapper from "../shared/Wrapper";

interface ProjectDetailGalleryProps {
  project: Project;
}

export default function ProjectDetailGallery({
  project,
}: ProjectDetailGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const startDrag = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const onDrag = (e: React.MouseEvent) => {
    if (dragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  const endDrag = () => {
    setDragging(false);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => {
    const newZoom = Math.max(zoom - 0.5, 1);
    setZoom(newZoom);
    if (newZoom === 1) setPosition({ x: 0, y: 0 });
  };
  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % project.gallery.length);
    resetZoom();
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length,
    );
    resetZoom();
  };

  const enterFullscreen = () => {
    setIsFullScreen(true);
    resetZoom();
  };

  const exitFullscreen = () => {
    setIsFullScreen(false);
    resetZoom();
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullScreen) exitFullscreen();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [exitFullscreen, isFullScreen, nextImage, prevImage]);

  if (!project.gallery || project.gallery.length === 0) {
    return null;
  }

  return (
    <section className='bg-linear-to-b from-background via-primary/5 to-background'>
      <Wrapper>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-4xl md:text-6xl font-black text-foreground tracking-tight'>
            Visual Showcase
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Exploration of the design systems and interfaces crafted for <span className="text-primary font-bold">{project.title}</span>.
          </p>
        </div>

        <div className='max-w-6xl mx-auto'>
          {/* Main Display Image */}
          <Card className='mb-10 overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm shadow-premium rounded-[40px] p-0 relative group'>
            <div className='relative aspect-video overflow-hidden min-h-[400px] md:min-h-[600px]'>
              <Image
                src={project.gallery[selectedImage] || "/placeholder.svg"}
                alt={`${project.title} - View ${selectedImage + 1}`}
                fill
                priority
                className='object-cover transition-transform duration-1000 group-hover:scale-105'
              />

              <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

              {/* Navigation Controls */}
              {project.gallery.length > 1 && (
                <>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-slate-900 rounded-2xl h-14 w-14 shadow-heavy opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0'
                    onClick={prevImage}
                  >
                    <ChevronLeft className='h-8 w-8' />
                  </Button>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-slate-900 rounded-2xl h-14 w-14 shadow-heavy opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0'
                    onClick={nextImage}
                  >
                    <ChevronRight className='h-8 w-8' />
                  </Button>
                </>
              )}

              {/* Expand to Fullscreen */}
              <Button
                variant='secondary'
                size='icon'
                className='absolute top-8 right-8 bg-white/90 hover:bg-primary hover:text-white text-slate-900 rounded-2xl h-14 w-14 shadow-heavy opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100'
                onClick={enterFullscreen}
              >
                <Maximize2 className='h-6 w-6' />
              </Button>

              {/* Counter Badge */}
              <div className='absolute bottom-8 left-8 bg-black/50 backdrop-blur-lg border border-white/20 text-white px-5 py-2 rounded-2xl text-sm font-bold tracking-widest'>
                {selectedImage + 1} / {project.gallery.length}
              </div>
            </div>
          </Card>

          {/* Thumbnail Strip */}
          {project.gallery.length > 1 && (
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-2'>
              {project.gallery.map((image, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer overflow-hidden border-2 transition-all duration-500 p-0 rounded-2xl group/thumb relative ${
                    selectedImage === index
                      ? "border-primary shadow-xl shadow-primary/30 scale-105 active-thumb"
                      : "border-transparent opacity-60 hover:opacity-100 hover:border-primary/40"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className='relative aspect-[4/3] bg-muted'>
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Thumb ${index + 1}`}
                      fill
                      className='object-cover transition-transform duration-700 group-hover/thumb:scale-110'
                      sizes='(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 150px'
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                        <div className="w-1.5 h-full bg-primary absolute right-0" />
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Wrapper>

      {/* Fullscreen Overlay */}
      {isFullScreen && (
        <div className='fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col'>
          {/* Header */}
          <div className="flex justify-between items-center p-6 bg-black/40 border-b border-white/10">
            <h3 className="text-white text-lg font-bold truncate pr-4">{project.title} - Visual {selectedImage + 1}</h3>
            <div className="flex gap-2">
               <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={handleZoomIn}><ZoomIn size={20}/></Button>
               <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={handleZoomOut}><ZoomOut size={20}/></Button>
               <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={resetZoom}><RotateCcw size={20}/></Button>
               <div className="w-px h-8 bg-white/10 mx-2" />
               <Button variant="ghost" size="icon" className="text-white hover:bg-red-500/20 hover:text-red-400" onClick={exitFullscreen}><X size={24}/></Button>
            </div>
          </div>

          {/* Large View Stage */}
          <div className="flex-1 overflow-hidden flex items-center justify-center p-8 relative cursor-grab active:cursor-grabbing" onMouseDown={startDrag} onMouseMove={onDrag} onMouseUp={endDrag} onMouseLeave={endDrag}>
             <div 
               className="relative w-full h-full max-w-7xl"
               style={{
                 transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                 transition: dragging ? "none" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
               }}
             >
               <Image
                 src={project.gallery[selectedImage]}
                 alt="Enlarged view"
                 fill
                 className="object-contain"
                 priority
                 draggable={false}
               />
             </div>

             {/* Inner Controls */}
             {project.gallery.length > 1 && (
                <>
                  <Button variant='ghost' size='icon' className='absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 h-20 w-12 rounded-full' onClick={prevImage}>
                    <ChevronLeft className='h-10 w-10' />
                  </Button>
                  <Button variant='ghost' size='icon' className='absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:bg-white/10 h-20 w-12 rounded-full' onClick={nextImage}>
                    <ChevronRight className='h-10 w-10' />
                  </Button>
                </>
             )}
          </div>
        </div>
      )}
    </section>
  );
}
