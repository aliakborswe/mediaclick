"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Wrapper from "@/components/shared/Wrapper";

export default function NotFound() {
  return (
    <div className='min-h-[70vh] flex items-center justify-center'>
      <Wrapper>
        <div className='max-w-md mx-auto text-center'>
          <div className='relative mb-8'>
            <h1 className='text-9xl font-black text-primary/10 select-none'>
              404
            </h1>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='bg-primary/20 p-4 rounded-full animate-pulse'>
                <div className='bg-primary p-4 rounded-full'>
                  <Home className='w-12 h-12 text-primary-foreground' />
                </div>
              </div>
            </div>
          </div>

          <h2 className='text-3xl font-bold text-foreground mb-4'>
            Page Not Found
          </h2>
          <p className='text-muted-foreground mb-10'>
            Oops! The page you are looking for might have been moved, deleted,
            or doesn&apos;t exist. Let&apos;s get you back on track.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/'>
              <Button className='w-full sm:w-auto flex items-center gap-2'>
                <Home className='w-4 h-4' />
                Back to Home
              </Button>
            </Link>
            <Button
              variant='outline'
              className='w-full sm:w-auto flex items-center gap-2'
              onClick={() => window.history.back()}
            >
              <ArrowLeft className='w-4 h-4' />
              Go Back
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
