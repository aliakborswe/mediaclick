import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactLocation from "@/components/contact/ContactLocation";
import ContactMethods from "@/components/contact/ContactMethods";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactLocation />
    </>
  );
}
