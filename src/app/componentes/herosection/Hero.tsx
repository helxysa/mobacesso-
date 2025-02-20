'use client'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // altura aproximada da navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      title: "Planejamento de Rotas",
      description: "Criação de rotas otimizadas para acessibilidade, com informações sobre rampas, elevadores e calçadas adequadas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Mapas Colaborativos",
      description: "Com a colaboração de todos, podemos mapear locais acessíveis e compartilhar informações sobre obstáculos temporários e melhorias na infraestrutura.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Transporte Público",
        description: "Informações detalhadas sobre acessibilidade em ônibus, mostrando quais ônibus tem recurso de acessibilidade e quais não tem.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "IA para Espaços Internos Complexos",
      description: "Está em desenvolvimento, a funcionalidade é para navegação assistida por inteligência artificial em shoppings, aeroportos e hospitais, com mapeamento detalhado de interiores e assistência por voz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Detecção de Barreiras",
      description: "Dentro do aplicativo voce consegue reportar barreiras temporárias, como obras, alagamentos ou outras barreiras à mobilidade.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
        title: "Detecção de Acessibilidade",
        description: "Tambem é possivel reportar locais com acessibilidade, como rampas, elevadores, calçadas regulares, piso tátil, e outros tipos de acessibilidade.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )
      },
  ];

  const team = [
    {
      name: 'Heloysa Gama',
      role: 'Desenvolvedora',
      image: '/heloysa.jpg',
      linkedin: 'https://www.linkedin.com/in/heloysasz/',
      github: 'https://github.com/helxysa',
      email: 'heloysagama2@gmail.com'
    },
    {
      name: 'Kelvin Rodrigues',
      role: 'Desenvolvedor',
      image: '/kelvin.jpg',
      linkedin: 'https://www.linkedin.com/in/kelvin-rodrigues-dev/',
      github: 'https://github.com/nivlekrod',
      email: 'kmrkelvin@gmail.com'
    },
    {
      name: 'Nicolas Veloso',
      role: 'Desenvolvedor',
      image: '/nicolas.jpg',
      linkedin: 'https://www.linkedin.com/in/nicolas-veloso-87b9a9218/',
      github: 'https://github.com/xNicolosox',
      email: 'nicolas.veloso2004@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Head>
        <title>MobAcesso | Mobilidade Urbana Acessível</title>
        <meta name="description" content="Aplicativo para mobilidade urbana acessível" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        
     
        <div data-vw="true" className="enabled">
          <div data-vw-access-button="true" className="active"></div>
          <div data-vw-plugin-wrapper="true">
            <div className="vw-plugin-top-wrapper"></div>
          </div>
        </div>
        <script 
          src="https://vlibras.gov.br/app/vlibras-plugin.js"
          async
        ></script>
        <script>
          {`
            new window.VLibras.Widget('https://vlibras.gov.br/app');
          `}
        </script>
      </Head>

      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-full px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-blue-50 px-4 py-2 rounded-full">
                    <span className="text-blue-600">Mob</span>
                    <span className="text-gray-900">Acesso</span>
                  </span>
                </h1>
              </div>

              <nav className="hidden md:block">
                <ul className="flex items-center space-x-12">
                  <li>
                    <button 
                      onClick={() => scrollToSection('about')} 
                      className={`${
                        activeSection === 'about' 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-600'
                      } text-lg hover:text-blue-500 transition-colors`}
                    >
                      Sobre
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('features')} 
                      className={`${
                        activeSection === 'features' 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-600'
                      } text-lg hover:text-blue-500 transition-colors`}
                    >
                      Funcionalidades
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('team')} 
                      className={`${
                        activeSection === 'team' 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-600'
                      } text-lg hover:text-blue-500 transition-colors`}
                    >
                      Time
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('contact')} 
                      className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
                    >
                      Contato
                    </button>
                  </li>
                </ul>
              </nav>

              <button 
                className="md:hidden p-3 rounded-full hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-7 w-7 text-gray-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-3xl p-6">
                <ul className="space-y-6">
                  <li>
                    <button 
                      onClick={() => {
                        scrollToSection('about');
                        setIsMobileMenuOpen(false);
                      }} 
                      className={`${
                        activeSection === 'about' 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-600'
                      } block w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 text-lg`}
                    >
                      Sobre
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        scrollToSection('features');
                        setIsMobileMenuOpen(false);
                      }} 
                      className={`${
                        activeSection === 'features' 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-600'
                      } block w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 text-lg`}
                    >
                      Funcionalidades
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        scrollToSection('team');
                        setIsMobileMenuOpen(false);
                      }} 
                      className={`${
                        activeSection === 'team' 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-600'
                      } block w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 text-lg`}
                    >
                      Time
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => {
                        scrollToSection('contact');
                        setIsMobileMenuOpen(false);
                      }} 
                      className="w-full bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
                    >
                      Contato
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-32 mt-16 md:mt-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-left md:text-left">
              <span className="text-blue-200 font-medium text-lg md:text-lg mb-4 inline-block">
                Mobilidade Urbana Acessível
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Transformando a
                <div className="my-2 md:my-4">
                  <span className="bg-white/10 px-4 py-2 rounded-full inline-block">
                    <span className="text-blue-300">Mob</span>
                    <span className="text-white">ilidade</span>
                  </span>
                </div>
                <div className="mt-2">para Todos</div>
              </h2>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
                O MobAcesso é uma solução que facilita a criação de rotas com base na acessibilidade urbana.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
              <div className="relative w-[260px] md:w-[320px] h-[530px] md:h-[650px] bg-black rounded-[3rem] shadow-2xl p-2 border-[8px] border-black transform transition-all duration-700 hover:scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90px] md:w-[120px] h-[18px] md:h-[25px] bg-black rounded-b-3xl z-20"></div>
                
                <div className="absolute -left-[8px] top-[90px] md:top-[120px] w-[8px] h-[35px] md:h-[50px] bg-gray-800 rounded-l-lg"></div>
                <div className="absolute -left-[8px] top-[135px] md:top-[180px] w-[8px] h-[35px] md:h-[50px] bg-gray-800 rounded-l-lg"></div>
                <div className="absolute -right-[8px] top-[90px] md:top-[120px] w-[8px] h-[50px] md:h-[70px] bg-gray-800 rounded-r-lg"></div>
                
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent z-10"></div>
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/mob.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section id="about" className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              Sobre o <span className="bg-blue-50 px-4 py-2 rounded-full inline-block mt-2">
                <span className="text-blue-600">Mob</span>
                <span className="text-gray-900">Acesso</span>
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="transform transition-all duration-700 hover:scale-105">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 flex items-center">
                  <i className="fas fa-lightbulb text-gray-800 mr-3"></i>
                  Nossa Iniciativa
                </h3>
                <p className="text-lg text-gray-800 mb-6">
                  O MobAcesso é uma iniciativa desenvolvida para facilitar a locomoção de pessoas com 
                  baixa mobilidade, especialmente voltada para pessoas com deficiência. Nossa solução está atualmente 
                  em fase de validação, buscando contribuir para uma mobilidade urbana mais inclusiva.
                </p>
                <p className="text-lg text-gray-800">
                  Este projeto foi selecionado para participar do Campus Mobile, um importante evento realizado 
                  pelo Instituto Claro em parceria com o INOVA USP, que busca apoiar ideias de tecnologia 
                  em diversas categorias. Nossa equipe, composta por <a href="#team" className="text-blue-600 hover:underline">Heloysa Gama</a>, <a href="#team" className="text-blue-600 hover:underline">Kelvin Rodrigues</a> e <a href="#team" className="text-blue-600 hover:underline">Nicolas Veloso</a>, 
                  foi selecionada para a categoria de Diversidade.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                  <i className="fas fa-handshake mr-3"></i>
                  Apoiadores
                </h3>
                <ul className="space-y-6 mb-8">
                  <li className="flex items-center">
                    <div className="w-16 h-16 bg-white rounded-lg mr-4 p-2 flex items-center justify-center">
                      <Image 
                        src="/serde.webp" 
                        alt="Projeto SERDE" 
                        width={64} 
                        height={64}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <span className="text-lg font-medium text-gray-800">Projeto SERDE</span>
                  </li>
                  <li>
                    <a 
                      href="https://www.instagram.com/unifapdigital" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center transform transition hover:translate-x-2 duration-300"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg mr-4 p-2 flex items-center justify-center">
                        <Image 
                          src="/unifapdigital.webp" 
                          alt="UNIFAP Digital" 
                          width={64} 
                          height={64}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-gray-800 hover:text-blue-600">UNIFAP Digital</span>
                        <i className="fab fa-instagram text-gray-600 hover:text-blue-600 transition-colors"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.unifap.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center transform transition hover:translate-x-2 duration-300"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg mr-4 p-2 flex items-center justify-center">
                        <Image 
                          src="/unifap.png" 
                          alt="UNIFAP" 
                          width={64} 
                          height={64}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <span className="text-lg font-medium text-gray-800 hover:text-blue-600">UNIFAP</span>
                    </a>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center border-t pt-6">
                  <i className="fas fa-chalkboard-teacher mr-3"></i>
                  Orientadores
                </h3>
                <ul className="space-y-6">
                  <li className="group">
                    <a 
                      href="https://www.instagram.com/rafaponteslima?igsh=a3owOWwya2dqZGg1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center transform transition hover:translate-x-2 duration-300 bg-white p-4 rounded-lg shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1">
                        <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">Professor Rafael Pontes</span>
                        <div className="flex items-center gap-2 mt-1">
                          <i className="fab fa-instagram text-gray-500 group-hover:text-blue-600 transition-colors"></i>
                          <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">@rafaponteslima</span>
                        </div>
                      </div>
                      <i className="fas fa-chevron-right text-gray-400 group-hover:text-blue-600 transition-colors"></i>
                    </a>
                  </li>
                  <li className="group">
                    <a 
                      href="https://www.instagram.com/jcfurtado86?igsh=MXZ6eW96enI2OTJtYg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center transform transition hover:translate-x-2 duration-300 bg-white p-4 rounded-lg shadow-sm hover:shadow-md"
                    >
                      <div className="flex-1">
                        <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">Professor Julio Cezar</span>
                        <div className="flex items-center gap-2 mt-1">
                          <i className="fab fa-instagram text-gray-500 group-hover:text-blue-600 transition-colors"></i>
                          <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">@jcfurtado86</span>
                        </div>
                      </div>
                      <i className="fas fa-chevron-right text-gray-400 group-hover:text-blue-600 transition-colors"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-24 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              Funcionalidades do <span className="bg-blue-50 px-4 py-2 rounded-full inline-block mt-2">
                <span className="text-blue-600">Mob</span>
                <span className="text-gray-900">Acesso</span>
              </span>
            </h2>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full w-20 h-20 animate-pulse"></div>
                      <div className="relative flex items-center justify-center w-20 h-20">
                        <div className="text-blue-600 transform transition-transform duration-300 hover:scale-110">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-800 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600"></div>
        <section id="team" className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
              Time do <span className="bg-blue-50 px-4 py-2 rounded-full inline-block mt-2">
                <span className="text-blue-600">Mob</span>
                <span className="text-gray-900">Acesso</span>
              </span>
            </h2>
            <div className="text-center mb-12">
             
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center transform transition duration-500 hover:scale-105">
                  <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden bg-gray-200 border-4 border-blue-500 shadow-lg">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4 text-lg capitalize">{member.role}</p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300 group"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300 group"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-all duration-300 group"
                      aria-label={`Email de ${member.name}`}
                    >
                      <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center text-gray-900">
              Contato{' '}
              <span className="bg-blue-50 px-3 py-1 md:px-4 md:py-2 rounded-full inline-block mt-2">
                <span className="text-blue-600">Mob</span>
                <span className="text-gray-900">Acesso</span>
              </span>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Fale Conosco</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 px-2">
                    Tem interesse em nosso projeto ou quer saber mais? Entre em contato conosco!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                      href="mailto:mobacessocontato@gmail.com" 
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 group"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                      <span className="text-base md:text-lg font-medium truncate">
                        mobacessocontato@gmail.com
                      </span>
                    </a>

                  
                  </div>

                
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

 
      <footer className="bg-blue-800 text-white py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                <span className="bg-white/10 px-4 py-2 rounded-full">
                  <span className="text-blue-400">Mob</span>
                  <span className="text-white">Acesso</span>
                </span>
              </h2>
              <p className="text-gray-300">
                Facilitando a mobilidade urbana para todos através da tecnologia e inclusão.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors">
                    Funcionalidades
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-white transition-colors">
                    Time
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Apoiadores</h3>
              <div className="space-y-4">
                <div className="flex items-center bg-white/10 p-3 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg p-2 mr-3">
                    <Image 
                      src="/serde.webp" 
                      alt="SERDE" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-300">Projeto SERDE</span>
                </div>
                
                <a href="https://www.instagram.com/unifapdigital" target="_blank" rel="noopener noreferrer"
                   className="flex items-center bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-lg p-2 mr-3">
                    <Image 
                      src="/unifapdigital.webp" 
                      alt="UNIFAP Digital" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-300 group-hover:text-white transition-colors mr-2">UNIFAP Digital</span>
                    <i className="fab fa-instagram text-gray-300 group-hover:text-white"></i>
                  </div>
                </a>
                
                <a href="https://www.unifap.br" target="_blank" rel="noopener noreferrer"
                   className="flex items-center bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-lg p-2 mr-3">
                    <Image 
                      src="/unifap.png" 
                      alt="UNIFAP" 
                      width={48} 
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">UNIFAP</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} MobAcesso. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

   
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </div>
  )
}