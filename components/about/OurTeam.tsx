import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import avater from "@/assets/svg/avater.svg";
import SectionTitle from "../shared/SectionTitle";

const teamMembers = [
  {
    name: "Jahangir Alam",
    role: "CEO & Sr. Software Engineer",
    image: avater,
  },
  {
    name: "Muhammad Yeasin ",
    role: "Sr. Software Engineer",
    image: avater,
  },

  // 📋 Project & Operations
  {
    name: "Amir Hamza",
    role: "Team Leader",
    image: avater,
  },

  // 💻 Development Team
  {
    name: "Rafiul Hasan",
    role: "DevOps Engineer",
    image: avater,
  },
  {
    name: "Ali Akbor",
    role: "Software Engineer",
    image: avater,
  },
  {
    name: "Yeasin Islam Hasan",
    role: "Jr. Software Engineer",
    image: avater,
  },
  {
    name: "Masud Rana",
    role: "Mobile App Developer",
    image: avater,
  },

  // 🎨 Design & Creative
  {
    name: "Samiul Islam Saim",
    role: "UX/UI Designer",
    image: avater,
  },
];

const OurTeam = () => {
  return (
    <section className='bg-background'>
      <Wrapper>
        <SectionTitle
          subtitle="Team"
          title='Meet Our Team'
          centered
          bar
          description='A diverse group of passionate individuals dedicated to delivering
              excellence.'
              className="mb-16"
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='bg-card px-6 py-10 border border-border hover:border-primary/30 rounded-lg shadow-sm hover:shadow-premium transition-all text-center group'
            >
              <div className='relative w-37.5 h-37.5 mx-auto mb-6'>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className='rounded-full shadow-md shadow-primary/10 group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-2'>
                {member.name}
              </h3>
              <p className='text-muted-foreground font-medium'>{member.role}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default OurTeam;
