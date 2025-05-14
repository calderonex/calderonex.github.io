import TextGrid from './TextGrid';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white relative">
      
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold text-center">Why You Should Use Our Services?</h2>
        <TextGrid />
      </div>
    </section>
  );
}