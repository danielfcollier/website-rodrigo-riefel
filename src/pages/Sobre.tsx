import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Brain, 
  Map, 
  Stethoscope, 
  FlaskConical, 
  Activity, 
  Heart, 
  ArrowDown,
  ChevronDown,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

// Imports de Imagens (Mantendo a lógica de ?optimized para processamento do Vite)
import aboutHeroBG from "@/assets/about_hero.jpg?optimized";
import section4Bg from "@/assets/about_hero2.jpeg?optimized";
import profileImage from "@/assets/rodrigo-riefel_profile.jpeg?optimized";
import testimonialAdriana from "@/assets/testimonial_adriana.jpg?optimized";
import testimonialJoel from "@/assets/about_testimonial_joel_aleixo.jpg?optimized";
import testimonialMartin from "@/assets/about_testimonial_martin_mayer.jpg?optimized";
// Import das experiências mantido
import experiences1 from "@/assets/about_experience1.jpg";
import experiences2 from "@/assets/about_experience2.jpg";
import experiences3 from "@/assets/about_experience3.jpg";
import experiences4 from "@/assets/about_experience4.jpg";
import experiences5 from "@/assets/about_experience5.jpg";

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Header />
      
      <main className="flex-1 animate-fade-in">
        
        {/* Section 2: Intro */}
        <section 
          className="relative min-h-[60vh] flex items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHeroBG})` }}
          aria-label="Introdução Sobre Mim"
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
          
          <div className="container-section relative z-10 w-full flex justify-start">
            <div className="bg-brand-bold/60 text-white p-8 md:p-12 rounded-xl max-w-2xl backdrop-blur-md shadow-2xl border border-white/10 md:mr-auto md:ml-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-brand-complementary">
                Olá, sou o <br/> RODRIGO RIEFEL
              </h1>
              <div className="space-y-4 text-lg font-light leading-relaxed opacity-95">
                <p>
                  Vou abrir um parênteses para compartilhar os meus valores e energia de vida que formam a pessoa e o profissional que sou.
                </p>
                <p className="font-serif text-brand-complementary italic text-2xl mt-4">
                  Vem nas ondas comigo...
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
            <ArrowDown className="w-8 h-8" />
          </div>
        </section>

        {/* Section 3: Mission/Values */}
        <section className="bg-brand py-8 text-white border-t border-brand-complementary/20">
          <div className="container-section py-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div className="flex flex-col items-center text-center space-y-3 group">
                <div className="flex items-center gap-3 mb-1">
                  <Activity className="w-8 h-8 text-brand-complementary" />
                  <h2 className="text-2xl font-bold tracking-widest uppercase text-brand-complementary">Missão</h2>
                </div>
                <div className="flex flex-col gap-1">
                  {["Cuidado", "Elevação", "Transformação"].map((item) => (
                    <span key={item} className="text-xl md:text-2xl font-light opacity-90">{item}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 group">
                <div className="flex items-center gap-3 mb-1">
                  <Heart className="w-8 h-8 text-brand-complementary" />
                  <h2 className="text-2xl font-bold tracking-widest uppercase text-brand-complementary">Valores</h2>
                </div>
                <div className="flex flex-col gap-1">
                   {["Amor", "Confiança", "Sabedoria"].map((item) => (
                    <span key={item} className="text-xl md:text-2xl font-light opacity-90">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-4 bg-brand-bold w-full" aria-hidden="true" />

        {/* Section 4: Quote */}
        <section 
          className="relative py-16 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${section4Bg})` }}
          aria-label="Citação Destaque"
        >
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
          <div className="container-section relative z-10 px-4">
            <div className="bg-transparent p-6 md:p-12 max-w-4xl mx-auto border-l-8 border-brand pl-8">
              <p className="text-2xl md:text-4xl font-serif text-brand-bold text-center leading-relaxed font-bold drop-shadow-sm">
                “Fiquei conhecido como um médico que reduz o uso de medicamentos enquanto o paciente recupera a clareza mental, qualidade de vida e se fortalece como indivíduo.”
              </p>
            </div>
          </div>
        </section>

        <div className="h-4 bg-brand-complementary w-full" aria-hidden="true" />

        {/* Section 5: Icons Bump */}
        <section className="bg-brand-bold py-10 text-white">
          <div className="container-section py-4">
            <div className="grid md:grid-cols-3 gap-8">
              <IconBox icon={Stethoscope} title="Medicina Milenar" />
              <IconBox icon={Map} title="Sabedoria Pathwork" />
              <IconBox icon={FlaskConical} title="Alquimia Terapêutica" />
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials (Adriana, Martin, Joel) */}
        <section className="bg-white py-20 text-brand-bold">
          <div className="container-section space-y-16">
            <div className="text-center mb-8">
               <span className="text-brand font-bold tracking-widest uppercase text-sm">Depoimentos</span>
               <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-bold">Parceiros de Jornada</h2>
            </div>
            
            <div className="space-y-6">
                <TestimonialCard 
                  name="Adriana Casarotto"
                  role="Psicóloga Sênior"
                  text="Maravilhoso contar com um Psiquiatra humanizado para encaminhamento de clientes, amigos e familiares. Profissional atualizado, cuidadoso e disponível. O recomendo há mais de 14 anos, sólida parceria e confiança."
                  image={testimonialAdriana}
                />

                <TestimonialCard 
                  name="Martin Mayer"
                  role="Consultor Econômico"
                  text="Traz para a gente muita segurança e sentimos uma profundidade na maneira em que ele consegue ficar atento àquilo que o paciente necessita e que vai ajudá-lo na sua caminhada de cura."
                  initial="M"
                  image={testimonialMartin}
                />

                <TestimonialCard 
                  name="Joel Aleixo"
                  role="Mestre Alquimista"
                  text="O Rodrigo é um grande alquimista - um médico que busca integrar o conhecimento da ciência moderna com o saber antigo da alquimia. Fico feliz e honrado por ter seu apoio, parceria e sabedoria nessa jornada de transformação e cura."
                  initial="J"
                  image={testimonialJoel}
                />
            </div>
          </div>
        </section>

        {/* Section 7: Bio Section */}
        <section className="bg-brand py-20 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
           
           <div className="container-section relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div className="text-center">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-brand-complementary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img 
                    src={profileImage} 
                    alt="Dr. Rodrigo Riefel"
                    width={320}
                    height={320}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-[60%_25%] border-4 border-brand-complementary shadow-2xl mx-auto relative z-10"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mt-8 text-brand-complementary uppercase tracking-wide">
                  Dr. Rodrigo Riefel
                </h2>
                <p className="text-white/80 uppercase tracking-wider mt-2 text-sm font-medium">
                  CRM-SC 11.260 | RQE 11.922
                </p>
             </div>
             
             <div className="space-y-8">
               <div className="border-l-4 border-brand-complementary pl-6">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                   Currículo Profissional
                 </h2>
                 <p className="text-brand-complementary text-lg">Formação e Especializações</p>
               </div>
               
               <div className="space-y-6">
                 <BioItem icon={Brain} text="Médico, Psiquiatra e Psicoterapeuta" />
                 <BioItem icon={Map} text="Facilitador de Grupos e Helper Pathwork" />
                 <BioItem icon={Stethoscope} text="Especialização em Medicina Ayurveda" />
               </div>
             </div>
           </div>
        </section>

        {/* Section 8: Moments of History */}
        <section className="bg-white py-20 md:py-28">
          <div className="container-section">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-bold text-brand-bold mb-4">5 Momentos Marcantes <br/> <span className="text-brand font-light">da Minha História</span></h2>
               <div className="h-1.5 w-24 bg-brand-complementary mx-auto rounded-full" />
            </div>

            <div className="space-y-32">
              <ExperienceItem 
                number="01"
                title="Residência Médica em Psiquiatria"
                text="Em 2007 dava início à especialização em Psiquiatria e Psicoterapia. Aprofundando conhecimentos acerca da mente humana, seus distúrbios e o uso ponderado/racional da psicofarmacologia, bem como técnicas psicoterapêuticas. Momento de muito estudo e prática, trazendo a certeza de que eu estava atuando na área certa, dando vazão a qualidades e talentos inatos."
                highlightTitle="DESTAQUE"
                highlightText="É uma área de grande complexidade, pois exige não só conhecimentos técnicos, mas também muita sensibilidade, conexão (empatia) e humanidade."
                image={experiences1}
              />

              <ExperienceItem 
                number="02"
                title="Escola de Alquimia Joel Aleixo"
                text="Ainda durante a residência médica, tive a grata oportunidade de iniciar meus estudos sobre a Alquimia na Escola de Alquimia Joel Aleixo. Aprender e relembrar conceitos antigos, porém tão atuais, sobre a arte da cura através do uso das forças das plantas e dos elementos da natureza. Aqui cada indivíduo é visto como um ser único e com seus próprios desafios e talentos, recebendo um olhar e abordagem personalizados. A Alquimia é o processo de transformar e aperfeiçoar o ser humano com a ajuda da natureza."
                highlightTitle="CURIOSIDADE"
                highlightText="Na foto estamos colhendo flores de Lótus na Lagoinha Pequena em Florianópolis para preparar novas essências alquímicas."
                image={experiences2}
                reversed
              />

              <ExperienceItem 
                number="03"
                title="A Transformação Pessoal do Pathwork"
                text="O Pathwork é uma disciplina de autoconhecimento e desenvolvimento pessoal que contribuiu intensamente no meu aprimoramento pessoal e profissional. Proporciona-me uma vida mais satisfatória e feliz, em que saúde, liberdade e plenitude são o resultado da dissolução de bloqueios e resistências, de crenças errôneas sobre nós mesmos e da realidade externa. Um caminho na qual a autorresponsabilidade, a coragem de confrontar-se com os medos e ilusões, a aceitação e a entrega são os pilares deste processo de crescimento e transformação. É um caminho que me trouxe uma grande família, relações honestas e profundas, um sentido de propósito e um sentimento de gratidão pela vida que tenho."
                highlightTitle="SER HOMEM"
                highlightText="Cada vez mais um número maior de homens estão buscando se conhecer, se abrir e desbloquear o que sentem e conquistarem uma presença íntegra, aberta, amorosa perante a vida."
                image={experiences3}
              />

              <ExperienceItem 
                number="04"
                title="Arte, Cultura e Rock'n Roll"
                text="A arte e a música tem um imenso poder sobre a mente, os sentimentos e na expressão humana. O grande professor e neurologista Oliver Sacks nos dizia: 'Música pode nos tirar da depressão ou nos levar às lágrimas - é um remédio, um tônico, um suco de laranja para o ouvido. Mas para muitos dos meus pacientes neurológicos, música é ainda mais - ela pode dar acesso, mesmo quando nenhum medicamento consegue, ao movimento, ao discurso, à vida.' Desde de berço a música esteve muito presente na minha vida, através de meu pai - um talentoso maestro -, tios e avô; ela embalou e deu ritmo a minha caminhada até hoje."
                highlightTitle="the GROGS"
                highlightText="Há alguns anos, a vida em Florianópolis me oportunizou encontrar colegas e grandes amigos que também tinham a música como sua arte e autoexpressão. Assim, nasceu The Grogs que fez a alegria de muitas pessoas, tocando mentes e corações."
                image={experiences4}
                reversed
              />

              <ExperienceItem 
                number="05"
                title="Família, Natureza e Chimarrão"
                text="A escolha de viver em Florianópolis foi a vontade de ter uma vida com qualidade, envolto de natureza exuberante, o mar, morros, tudo isso em uma capital. A possibilidade de viver conectado à natureza me manteve estimulado e facilitou meu processo de purificação, aprofundamento e expansão da consciência sobre quem sou e meu propósito de vida. Trilhar meu caminho pessoal de desenvolvimento sempre foi uma prioridade na minha vida, assim como ter uma bela família e poder servir a outras pessoas a encontrar seus propósitos e caminhos de cura. Aqui encontrei minha esposa, uma grande mulher, com quem tive um filho que vem trazendo novos significados na minha vida."
                highlightTitle="SURF"
                highlightText="Por fim, o surf é um esporte que definitivamente me traz muito mais benefícios psicológicos e emocionais do que propriamente físicos."
                image={experiences5}
              />
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

// Sub-componentes

const IconBox = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
    <div className="p-3 bg-brand-complementary rounded-full mb-3 text-brand-bold shadow-lg">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold uppercase tracking-wide text-brand-complementary">{title}</h3>
  </div>
);

const TestimonialCard = ({ name, role, text, image, initial }: { name: string, role: string, text: string, image?: string, initial?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-brand/5 rounded-2xl p-6 md:p-8 shadow-sm border border-brand-complementary/20 hover:shadow-md transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        
        <div className="flex-shrink-0 flex flex-col items-center text-center md:w-48">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-complementary mb-3 shadow-sm bg-white flex items-center justify-center">
            {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
                <span className="text-3xl font-bold text-brand/30">{initial}</span>
            )}
          </div>
          <h3 className="font-bold text-lg text-brand-bold leading-tight">{name}</h3>
          <p className="text-xs uppercase tracking-wide text-brand-bold/60 font-bold mt-1">{role}</p>
        </div>

        <div className="flex-1 w-full text-center md:text-left flex flex-col items-center md:items-start justify-center">
          {/* MODO DESKTOP */}
          <div className="hidden md:block relative pt-2">
             <Quote className="w-8 h-8 text-brand-complementary/30 absolute -top-2 -left-4 transform -scale-x-100" />
             <p className="text-lg text-brand-bold/80 leading-relaxed italic relative z-10 pl-6">
               {text}
             </p>
          </div>

          {/* MODO MOBILE */}
          <div className="md:hidden w-full">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group">
                  <div className="flex items-center gap-2 text-brand-bold/70 group-hover:text-brand-bold transition-colors cursor-pointer">
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      {isOpen ? "Ler menos" : "Ler depoimento"}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="w-full overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="relative pt-6 pb-2">
                  <Quote className="w-8 h-8 text-brand-complementary/30 absolute -top-2 left-0 transform -scale-x-100" />
                  <p className="text-lg text-brand-bold/80 leading-relaxed italic relative z-10 px-4">
                    {text}
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

        </div>
      </div>
    </div>
  );
};

const BioItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-5 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
    <div className="p-3 bg-brand-complementary rounded-lg text-brand-bold shadow-md shrink-0">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-lg font-light text-white group-hover:text-brand-complementary transition-colors">{text}</span>
  </div>
);

const ExperienceItem = ({ number, title, text, highlightTitle, highlightText, image, reversed = false }: any) => (
  <div className="flex flex-col gap-10">
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${reversed ? 'md:order-2' : 'md:order-1'} space-y-6`}>
        <div className="flex flex-col">
          <span className="text-6xl font-bold text-brand-complementary/20 font-serif mb-2">{number}</span>
          <h3 className="text-3xl font-bold text-brand-bold leading-tight">{title}</h3>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed text-justify">
          {text}
        </p>
      </div>

      <div className={`${reversed ? 'md:order-1' : 'md:order-2'} relative group`}>
        <div className={`absolute inset-0 bg-brand-complementary rounded-2xl transform ${reversed ? '-rotate-2' : 'rotate-2'} transition-transform opacity-30 group-hover:rotate-0`} />
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    {/* Highlight Section: Full Width */}
    <div className="w-full bg-brand/5 border-l-4 border-brand p-8 md:p-10 rounded-r-xl shadow-sm">
        <span className="block text-sm font-bold text-brand tracking-widest uppercase mb-4">{highlightTitle}</span>
        <p className="text-brand-bold font-medium italic text-xl md:text-2xl leading-normal">
          {highlightText}
        </p>
    </div>
  </div>
);

export default Sobre;