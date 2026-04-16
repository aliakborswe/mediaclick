"use client";

import type React from "react";

// Extend the Window interface to include tidioChatApi
declare global {
  interface Window {
    tidioChatApi?: {
      open: () => void;
      close: () => void;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };
  }
}

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Send,
  CheckCircle,
  Calendar,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call delay for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-reset isSubmitted state after 3 seconds with proper cleanup
  useEffect(() => {
    if (isSubmitted) {
      const resetTimer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      return () => clearTimeout(resetTimer);
    }
  }, [isSubmitted]);

  return (
    <section className='bg-linear-to-b from-background to-primary/5 pb-12 md:pb-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row gap-10 items-stretch'>
          {/* Live Chat and Consultation */}
          <div className='space-y-8 w-full lg:w-1/3'>
            <div>
              <Card className='border-border hover:border-primary/30 transition-all hover:shadow-premium bg-card h-full flex flex-col'>
                <CardHeader>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                      <MessageSquare className='w-6 h-6 text-primary' />
                    </div>
                    <CardTitle className='text-xl text-primary font-bold'>
                      Live Chat
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-muted-foreground mb-6'>
                    For immediate assistance, use the live chat feature on the
                    bottom right of your screen. Our support team will respond
                    to your inquiry in real-time during business hours.
                  </CardDescription>
                  <Button className='w-full bg-primary text-primary-foreground font-semibold py-6 shadow-premium'>
                    <MessageCircle className='w-5 h-5 mr-2' />
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className='border-border hover:border-primary/30 transition-all hover:shadow-premium bg-card flex flex-col'>
                <CardHeader>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                      <Calendar className='w-6 h-6 text-primary' />
                    </div>
                    <CardTitle className='text-xl text-primary font-bold'>
                      Book a Consultation
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <CardDescription className='text-muted-foreground mb-6'>
                    Ready to discuss your next project or get expert advice?
                    Schedule a free consultation with our team today!
                  </CardDescription>
                  <Button
                    variant='outline'
                    className='w-full border-primary/20 hover:bg-primary/5 text-primary font-semibold py-6 shadow-sm'
                  >
                    <Calendar className='w-5 h-5 mr-2' />
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* contact form */}
          {isSubmitted ? (
            <Card className='border-border bg-card w-full lg:w-2/3'>
              <CardContent className='p-12 text-center flex flex-col items-center justify-center min-h-[400px]'>
                <CheckCircle className='w-16 h-16 text-primary mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-foreground mb-4'>
                  Message Sent Successfully!
                </h3>
                <p className='text-muted-foreground'>
                  Thank you for contacting us. We&apos;ll get back to you as
                  soon as possible.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className='w-full lg:w-2/3'>
              <Card className='border-border bg-card h-full'>
                <CardHeader className='text-center sm:text-left'>
                  <CardTitle className='text-2xl text-primary font-bold'>
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    If you prefer to send a message directly, fill out the form
                    below, and our team will get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='name'
                          className='text-foreground font-semibold'
                        >
                          Your Name *
                        </Label>
                        <Input
                          id='name'
                          type='text'
                          placeholder='Enter your full name'
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                          className='bg-background border-border focus:border-primary focus:ring-primary h-12'
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='email'
                          className='text-foreground font-semibold'
                        >
                          Your Email *
                        </Label>
                        <Input
                          id='email'
                          type='email'
                          placeholder='Enter your email address'
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className='bg-background border-border focus:border-primary focus:ring-primary h-12'
                        />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label
                        htmlFor='subject'
                        className='text-foreground font-semibold'
                      >
                        Subject *
                      </Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value: string) =>
                          handleInputChange("subject", value)
                        }
                      >
                        <SelectTrigger className='bg-background border-border focus:border-primary h-12'>
                          <SelectValue placeholder='Select inquiry type' />
                        </SelectTrigger>
                        <SelectContent className='bg-card border-border'>
                          <SelectItem value='general'>
                            General Inquiry
                          </SelectItem>
                          <SelectItem value='project'>
                            Project Inquiry
                          </SelectItem>
                          <SelectItem value='support'>
                            Support Request
                          </SelectItem>
                          <SelectItem value='partnership'>
                            Partnership
                          </SelectItem>
                          <SelectItem value='career'>
                            Career Opportunity
                          </SelectItem>
                          <SelectItem value='other'>Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className='space-y-2'>
                      <Label
                        htmlFor='message'
                        className='text-foreground font-semibold'
                      >
                        Message *
                      </Label>
                      <Textarea
                        id='message'
                        placeholder='Tell us about your project or inquiry...'
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        required
                        rows={6}
                        className='bg-background border-border focus:border-primary resize-none'
                      />
                    </div>

                    <Button
                      type='submit'
                      className='w-full py-6 text-lg font-bold shadow-premium transition-all hover:scale-[1.01] active:scale-[0.99]'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3'></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className='w-5 h-5 mr-3' />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
