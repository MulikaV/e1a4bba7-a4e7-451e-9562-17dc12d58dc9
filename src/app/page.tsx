"use client";
import { AnimatedRetroText } from '@/components/text/AnimatedRetroText';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import ProcessTimeline from '@/components/timeline/ProcessTimeline';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';

const HeroSection = () => (
  <SimpleHero
    title="PhotonWoven Portfolio"
    description="Capturing moments in stunning detail"
    primaryButtonText="View Portfolio"
    secondaryButtonText="Contact Me"
  />
);

const AboutSection = () => (
  <MinimalAbout
    description="Welcome to my portfolio! I'm a passionate photographer focused on telling stories through images."
  />
);

const PortfolioSection = () => (
  <GalleryBento
    items={Array(8).fill({ title: 'Portfolio Item', image: '/images/placeholderwide1.jpg' })}
    className="max-w-6xl mx-auto"
    gridClassName="grid grid-cols-2 lg:grid-cols-4 gap-4"
  />
);

const ProcessSection = () => (
  <ProcessTimeline
    items={[
      { title: 'Consultation', description: 'Discuss your vision for the shoot.', image: '/images/logo.svg' },
      { title: 'Photography Session', description: 'Capturing every moment.', image: '/images/logo.svg' },
      { title: 'Delivery', description: 'Receive your stunning photos.', image: '/images/logo.svg' }
    ]}
    className="max-w-6xl mx-auto"
  />
);

const TestimonialsSection = () => (
  <ImageFAQ
    items={[
      { title: 'Amazing experience!', content: 'The photos turned out better than I could have imagined.' },
      { title: 'Highly Recommend!', content: 'Professional, creative, and amazing results!' }
    ]}
  />
);

const ContactSection = () => (
  <div className="bg-gradient-to-r from-blue-400 to-green-400 p-6 rounded-lg">
    <h2 className="text-2xl font-bold">Get in Touch</h2>
    <ContentTextbox
      title={<h3>Contact Us</h3>}
      description={<p>We'd love to hear from you!</p>}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="bg-blue-500 text-white p-2 rounded">Send Message</button>
      </div>
    </ContentTextbox>
  </div>
);

export default function Home() {
  return (
    <>
      <section id="hero"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="portfolio"><PortfolioSection /></section>
      <section id="process"><ProcessSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="contact"><ContactSection /></section>
      <SimpleFooter
        columns={[
          { title: 'Privacy Policy', items: [{ label: 'Read Now', onClick: () => alert('Privacy policy clicked') }] },
          { title: 'Terms & Conditions', items: [{ label: 'Read Now', onClick: () => alert('Terms conditions clicked') }] }
        ]}
        copyrightText="© 2023 PhotonWoven. All rights reserved."
        onPrivacyClick={() => alert('Privacy Policy clicked')}
      />
    </>
  );
}
