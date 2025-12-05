import section5Image from "@/assets/rodrigo-riefel_section5.jpeg?optimized";
import templeImage from "@/assets/rodrigo-riefel_temple.jpeg?optimized";

const quotes = [
  {
    image: section5Image,
    quote: "A vida que você vive é o resultado das escolhas que faz. E escolher implica a liberdade de adotar outra atitude.",
    reference: "PW-195",
    imageOnLeft: true,
  },
  {
    image: templeImage,
    quote: "O preço da liberdade é a coragem e a humildade de encarar as coisas.",
    reference: "PW-038",
    imageOnLeft: false,
  },
];

const QuotesSection = () => {
  return (
    <section className="section-white">
      <div className="container-section">
        {quotes.map((item, index) => (
          <div 
            key={index}
            className={`flex flex-col ${item.imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 ${index > 0 ? 'mt-16' : ''}`}
          >
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={item.image} 
                  alt="Dr. Rodrigo Riefel"
                  width={560}
                  height={384}
                  className="w-full h-80 md:h-96 object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bold/30 to-transparent" />
              </div>
            </div>
            <div className="flex-1">
              <blockquote className="text-brand-bold">
                <p className="quote-text text-2xl md:text-3xl leading-relaxed mb-4">
                  "{item.quote}"
                </p>
                <cite className="text-brand-complementary-bold font-semibold not-italic">
                  {item.reference}
                </cite>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuotesSection;
