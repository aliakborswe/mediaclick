"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Calendar } from "lucide-react";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

interface Position {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  category: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  postedDate: string;
  applicationDeadline: string;
  isActive: boolean;
}

interface OpenPositionsProps {
  positions: Position[];
}

export default function OpenPositions({ positions }: OpenPositionsProps) {
  const [filter, setFilter] = useState("all");

  const activePositions = positions.filter((position) => position.isActive);

  const filteredPositions =
    filter === "all"
      ? activePositions
      : activePositions.filter((position) => position.category === filter);

  const categories = Array.from(
    new Set(activePositions.map((position) => position.category)),
  );

  const formatSalary = (salary: Position["salary"]) => {
    const { min, max, currency, period } = salary;
    return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()} / ${period}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section
      id='open-positions'
      className='bg-linear-to-b from-primary/5 to-background'
    >
      <Wrapper>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <SectionTitle
            title='Job Openings'
            centered
            titleClass='bg-primary/10 text-primary'
            icon={<MapPin className='w-4 h-4' />}
            subtitle={`Current Openings (${activePositions.length})`}
            description='Explore exciting career opportunities in software development, mobile apps, SEO, and more. Join our remote-first team.'
          />
        </motion.header>

        {/* Custom Tab Buttons */}
        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          <Button
            variant={filter === "all" ? "default" : "outline"}
            className={
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "border-primary/20 hover:bg-primary/5 text-primary"
            }
            onClick={() => setFilter("all")}
          >
            All Positions ({activePositions.length})
          </Button>
          {categories.map((category) => {
            const count = activePositions.filter(
              (p) => p.category === category,
            ).length;
            return (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "border-primary/20 hover:bg-primary/5 text-primary"
                }
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
              </Button>
            );
          })}
        </div>

        {/* Position Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredPositions.map((position, index) => (
            <motion.article
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className='bg-card h-full border-border hover:border-primary/30 transition-all hover:shadow-premium flex flex-col'>
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start mb-2'>
                    <Badge
                      variant='outline'
                      className='bg-primary/5 text-primary border-primary/20 shrink-0'
                    >
                      {position.department}
                    </Badge>
                    <Badge
                      variant={
                        position.type === "Full-time" ? "default" : "secondary"
                      }
                      className='text-xs shrink-0 ml-2'
                    >
                      {position.type}
                    </Badge>
                  </div>
                  <CardTitle className='text-xl text-primary font-bold'>
                    {position.title}
                  </CardTitle>
                  <CardDescription className='mt-2 text-muted-foreground line-clamp-2'>
                    {position.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className='pb-2 flex-grow'>
                  <div className='space-y-2 text-sm mb-4'>
                    <div className='flex items-center gap-2 text-muted-foreground'>
                      <MapPin className='h-4 w-4 text-primary' />
                      <span>{position.location}</span>
                    </div>
                    <div className='flex items-center gap-2 text-muted-foreground'>
                      <Clock className='h-4 w-4 text-primary' />
                      <span>{position.experience} experience</span>
                    </div>
                    <div className='flex items-center gap-2 text-muted-foreground'>
                      <DollarSign className='h-4 w-4 text-primary' />
                      <span>{formatSalary(position.salary)}</span>
                    </div>
                    <div className='flex items-center gap-2 text-muted-foreground'>
                      <Calendar className='h-4 w-4 text-primary' />
                      <span>
                        Deadline: {formatDate(position.applicationDeadline)}
                      </span>
                    </div>
                  </div>

                  {position.requirements.length > 0 && (
                    <div className='mb-4'>
                      <h4 className='font-bold text-foreground mb-2 text-sm'>
                        Key Requirements:
                      </h4>
                      <ul className='space-y-1'>
                        {position.requirements.slice(0, 3).map((req, i) => (
                          <li
                            key={i}
                            className='text-xs text-muted-foreground flex items-start gap-2'
                          >
                            <div className='w-1 h-1 bg-primary/40 rounded-full mt-2 shrink-0' />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {position.skills.length > 0 && (
                    <div className='flex flex-wrap gap-1 mt-auto'>
                      {position.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant='secondary'
                          className='text-[10px] bg-primary/5 text-primary border-none'
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className='pt-4'>
                  <Button
                    className='w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90'
                    onClick={() =>
                      window.open(
                        `mailto:career@Media-Clicking.com?subject=Application for ${position.title} - ${position.id}`,
                        "_blank",
                      )
                    }
                  >
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.article>
          ))}

          {/* Don't See Your Role Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: filteredPositions.length * 0.1,
            }}
          >
            <Card className='h-full border-border hover:border-primary/30 transition-all hover:shadow-premium bg-card flex flex-col'>
              <CardHeader>
                <CardTitle className='text-xl text-primary font-bold'>
                  💬 Don&apos;t See Your Role?
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  We&apos;re always looking for talented individuals to join our
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex-grow'>
                <p className='text-muted-foreground'>
                  📩 Email us at{" "}
                  <a
                    href='mailto:career@Media-Clicking.com'
                    className='text-primary hover:underline font-bold'
                  >
                    career@Media-Clicking.com
                  </a>{" "}
                  with your CV and portfolio. Let&apos;s connect!
                </p>
              </CardContent>
              <CardFooter className='pt-4'>
                <Button
                  variant='outline'
                  className='w-full border-primary/20 text-primary hover:bg-primary/5 font-semibold'
                  onClick={() =>
                    window.open(
                      "mailto:career@Media-Clicking.com?subject=General Application - Media-Clicking",
                      "_blank",
                    )
                  }
                >
                  Send Your CV
                </Button>
              </CardFooter>
            </Card>
          </motion.article>
        </div>

        {/* No positions message */}
        {filteredPositions.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-muted-foreground text-xl'>
              No positions found matching your criteria.
            </p>
            <Button
              variant='link'
              onClick={() => setFilter("all")}
              className='text-primary mt-4 font-bold'
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Wrapper>
    </section>
  );
}
