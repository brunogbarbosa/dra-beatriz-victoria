export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Dra. Beatriz Victória',
  monogram: 'BV',
  headline: 'Beleza não se cria. Se revela.',
  cro: 'CRO-SP 156478',
  bio: 'Cirurgiã-dentista com atuação em harmonização orofacial em São Paulo. Seu olhar parte da escuta e do planejamento individual para valorizar cada rosto com equilíbrio e naturalidade.',
  education: [] as string[],
  specialties: ['Harmonização orofacial', 'Full Face', 'Perfiloplastia'],
  phone: '(11) 92739-3590',
  whatsapp: '5511927393590',
  whatsappUrl: 'https://wa.me/5511927393590?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: 'Rua Engenheiro Pegado, 945 · São Paulo, SP',
  professionalPhilosophy: 'Beleza não se cria, se revela.',
  instagram: 'https://www.instagram.com/dra.beatrizvictoria/',
  instagramHandle: '@dra.beatrizvictoria',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA VERSÃO.'],
  colors: { paper: '#f3eee8', ink: '#282321', taupe: '#8f7468', champagne: '#d6bca6', dark: '#211b1a', wine: '#332523', muted: '#71635d' },
  images: { hero: '/images/beatriz-hero.webp', essence: '/images/beatriz-essencia.webp', about: '/images/beatriz-sobre.webp', beauty: '/images/beatriz-editorial.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/caso-01.webp', label: 'Harmonia em três quartos', alt: 'Antes e depois de paciente em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1186 / 1600 },
    { image: '/images/caso-02.webp', label: 'Expressão e leveza', alt: 'Antes e depois de paciente em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1162 / 1600 },
    { image: '/images/caso-03.webp', label: 'Contornos naturais', alt: 'Antes e depois de paciente em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1200 / 1600 },
    { image: '/images/caso-04.webp', label: 'Delicadeza nos detalhes', alt: 'Antes e depois de paciente em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1202 / 1600 },
    { image: '/images/caso-05.webp', label: 'Um olhar renovado', alt: 'Antes e depois de paciente em visão frontal.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1228 / 1600 },
    { image: '/images/caso-06.webp', label: 'Perfil em equilíbrio', alt: 'Antes e depois de paciente em visão lateral.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1090 / 1443 },
  ] },
  seo: { title: 'Dra. Beatriz Victória | Harmonização Orofacial em São Paulo', description: 'Harmonização orofacial com planejamento individual e beleza com identidade. Conheça a Dra. Beatriz Victória e agende sua avaliação em São Paulo.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
