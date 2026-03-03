import React from 'react';

export type Screen = 'home' | 'catalog' | 'detail' | 'login' | 'profile' | 'dashboard';

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  library: string;
  language: string;
  status: 'available' | 'loaned';
  category: string;
  year?: string;
  isbn?: string;
  description?: string;
}

export const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Obabakoak',
    author: 'Bernardo Atxaga',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7jhc-5pt-x4BzHq9FcXlObrMTE0QMpXnsyzCg_7etLAv8qQJpT6DQMJmvFBAUJ2oywAmZevCGU4PQ-rAU9TuO9IDtTTCICaCdlrb4qqG02Z5WW62-qEMbyrsU-uNGinGIQ8Oo217gRgCbLAJhmBSyjimsz27X0y22dynefbuX6kHiYkvElHlDEbEY-rWOH_G61_cYITbsuLgOKjzs-kRXFAMtVllZg7SoJQizZb2I_W4CPYkbF504Uw8u1T9erLZbJ6H7hIQYbGg',
    library: 'Biblioteca Donostia - Central',
    language: 'Euskera',
    status: 'available',
    category: 'Narrativa',
    year: '1988',
    isbn: '978-8420466651',
    description: 'Obabakoak es la obra más premiada y traducida de la literatura vasca. Un conjunto de relatos que se entrelazan para formar un universo mágico y real a la vez.'
  },
  {
    id: '2',
    title: 'Patria',
    author: 'Fernando Aramburu',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt_RVYp_Cu4GCL3HcfVL4cZOlH1svkG4VbtUxCgeRoGaBqPk5IngGkkWejXnXQH2UViPKln_Hz5sRkG1AWxZcv0XguFWgbQiY0F-KPryJZ7t4jMY1XaJzhhmCEfmYnV22SR4N7UvtHusFVr9Is-CUJbFJinlsVNNRIFbFLV5PJFvTTCMH8ggSUwRBglSIoLRX2oBY8nBAkRVlH1g_FiAAvLKB3-rn34NexG0Ugk6f0q45Wh_oeRCgkXykUmd-vKl3GMb-p4hDe_5c',
    library: 'Biblioteca Bilbao - Bidebarrieta',
    language: 'Castellano',
    status: 'loaned',
    category: 'Narrativa',
    year: '2016'
  },
  {
    id: '3',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfItIHzZtFYbwXq2HqHallZ2kKYbRlxLdgIQeC71osXONGqw57PoqFAQMSj_g8bq3dlJY0ZPRRkbW7XyvJkMM-fjBVei_b2rHiV4B0pbD7KTT-VypdeBWlUQSsxk79zQzjxleIpOXuOSIG74Wr9DReWLGHZVkZZD1KoXNX3RABljV6KtnBGjwUyC-ZOGSuXeSljgP0DdKlZDX15_0Y6lIxNqp0XXSpCMYZY43t0EO1VhS7MINDeFTwjDA1e0utzu4J_4Zn2v7z86E',
    library: 'Vitoria-Gasteiz - Ignacio Aldecoa',
    language: 'Castellano',
    status: 'available',
    category: 'Clásicos'
  },
  {
    id: '4',
    title: 'El hijo del acordeonista',
    author: 'Bernardo Atxaga',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1U4JEZzJ4-tTyMAUaUhbq0RJ0AbPyOTHu9DN_XfgtwIsz6GIW-B777NVsqG7ifyngKNqeekBqBoSa-f7_3yfywTLaOSlJxibzjZnWlCJYhnFa6m3rP1xRnZUXigUpwiRfR7grDcINCn_q-RZvrvMz3vL_lvLdYBp1mp5hnKCqPr5heoVnBZWg3Rlv5E33Jf3j7kT-qBrRPko25b8ywDhrtA5oBWvtep1mWQkEIOAdXh6KwcFn9rDZUr5wLIbQfveAI7WKlQnEQ_8',
    library: 'Koldo Mitxelena Kulturunea',
    language: 'Euskera / Castellano',
    status: 'available',
    category: 'Ficción Contemporánea',
    year: '2003',
    isbn: '978-8420466651',
    description: 'David y Mary Ann se encuentran en California para rememorar su pasado común en Obaba, el mítico pueblo vasco. David, hijo de un acordeonista, descubre tras la muerte de su padre los oscuros secretos de la Guerra Civil.'
  }
];
