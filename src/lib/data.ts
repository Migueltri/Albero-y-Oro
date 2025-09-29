import type { Article, Event } from '@/types';

const articles: Article[] = [
  {
    id: '1',
    slug: 'roca-rey-triunfa-en-madrid',
    title: 'Roca Rey, Puerta Grande en Madrid tras una faena histórica',
    author: 'Javier Pérez',
    publishedAt: '2024-05-15',
    category: 'Actualidad',
    excerpt: 'El diestro peruano corta dos orejas y se consagra como la máxima figura del toreo en la Feria de San Isidro.',
    content: `
      <p>Madrid se rindió a los pies de Andrés Roca Rey. En una tarde que quedará para los anales de la historia de Las Ventas, el torero peruano ha conseguido abrir la Puerta Grande tras una actuación soberbia frente a un toro de Garcigrande, de nombre "Pajarero", que fue premiado con la vuelta al ruedo.</p>
      <p>La faena fue un compendio de valor, técnica y arte. Desde el inicio con el capote, Roca Rey demostró que no había venido a especular. Con la muleta, la faena fue un crescendo constante de emoción. Tandas por ambos pitones, ligadas, templadas y profundas, que hicieron rugir a los tendidos. Los circulares invertidos, las manoletinas y un estoconazo fulminante fueron el colofón a una obra maestra.</p>
      <p>El público, entregado, pidió con fuerza las dos orejas, que el presidente concedió sin dudar. La Puerta Grande se abría para un torero que ha demostrado, una vez más, por qué es considerado el número uno del escalafón. Madrid tiene un nuevo rey, y se llama Andrés Roca Rey.</p>
    `,
    imageId: 'hero-1',
  },
  {
    id: '2',
    slug: 'morante-arte-sevilla',
    title: 'Morante de la Puebla dibuja el toreo en La Maestranza',
    author: 'Carlos Crivell',
    publishedAt: '2024-04-28',
    category: 'Actualidad',
    excerpt: 'El torero de La Puebla del Río deja una faena para el recuerdo, llena de pellizco y torería, aunque la espada le privó de un triunfo mayor.',
    content: `
      <p>La Real Maestranza de Caballería de Sevilla fue testigo de una nueva lección de toreo caro a cargo de Morante de la Puebla. El diestro sevillano, con un toro de Juan Pedro Domecq, cuajó una faena que fue un monumento al arte y al sentimiento.</p>
      <p>Cada muletazo era un verso, cada pase un lienzo. El toreo al natural de Morante fue de una belleza plástica inigualable. La plaza, en silencio reverencial, paladeaba cada instante de una faena efímera pero intensa. Lástima que la espada, su eterno talón de Aquiles, le jugara una mala pasada. Un pinchazo y una estocada caída dejaron el premio en una ovación con saludos desde el tercio, pero el sabor de la obra bien hecha permaneció en el ambiente.</p>
    `,
    imageId: 'news-1',
  },
  {
    id: '3',
    slug: 'entrevista-pablo-aguado',
    title: 'Entrevista a Pablo Aguado: "El toreo es una forma de expresión, no una competición"',
    author: 'Ana Martínez',
    publishedAt: '2024-05-10',
    category: 'Opinión',
    excerpt: 'El torero sevillano nos abre las puertas de su casa y de su alma en una conversación íntima sobre el arte, la vida y el futuro de la fiesta.',
    content: `
      <p>Nos encontramos con Pablo Aguado en su finca, un remanso de paz en la campiña sevillana. El torero, conocido por su concepto purista y artístico del toreo, se muestra cercano y reflexivo.</p>
      <p><strong>Pregunta:</strong> ¿Qué es el toreo para Pablo Aguado?</p>
      <p><strong>Respuesta:</strong> Para mí, el toreo es, por encima de todo, una forma de expresión. Es mi manera de sentir y de transmitir. No lo veo como una competición ni como un deporte. Es algo mucho más profundo, más espiritual. Es un diálogo con el toro y contigo mismo.</p>
      <p><strong>Pregunta:</strong> ¿Se siente presionado por las expectativas?</p>
      <p><strong>Respuesta:</strong> La presión existe, pero intento que no me afecte. La mayor presión me la pongo yo mismo, la de ser fiel a mi concepto y a mi forma de entender el toreo. El triunfo por el triunfo no me obsesiona. Prefiero una tanda de naturales que llegue al alma que cortar una oreja sin sentirlo de verdad.</p>
    `,
    imageId: 'interview-1',
  },
  {
    id: '4',
    slug: 'victorino-martin-analisis',
    title: 'La legendaria ganadería de Victorino Martín, a examen',
    author: 'Vicente Zabala de la Serna',
    publishedAt: '2024-05-05',
    category: 'Actualidad',
    excerpt: 'Un análisis profundo de la temporada de la A coronada, sus desafíos y sus triunfos en las plazas más importantes.',
    content: '<p>La ganadería de Victorino Martín es un pilar fundamental de la fiesta. Sus toros, con su encaste Albaserrada, son sinónimo de casta, bravura y emoción. Analizamos una temporada más de una ganadería que nunca deja indiferente a nadie.</p>',
    imageId: 'news-2',
  },
  {
    id: '5',
    slug: 'agenda-san-fermin-2024',
    title: 'Carteles oficiales de la Feria del Toro de San Fermín 2024',
    author: 'Redacción',
    publishedAt: '2024-05-20',
    category: 'Agenda',
    excerpt: 'Presentados los carteles completos de Pamplona, con todas las figuras y las ganaderías más prestigiosas.',
    content: '<p>La Casa de Misericordia de Pamplona ha hecho oficiales los carteles de la Feria del Toro 2024. Un abono de lujo que contará con la presencia de todas las grandes figuras del toreo y las ganaderías más esperadas por la afición. Roca Rey, Morante, Talavante, y muchos más, no faltarán a su cita con la capital navarra.</p>',
    imageId: 'news-3',
  },
  {
    id: '6',
    slug: 'opinion-futuro-fiesta',
    title: 'El futuro de la Tauromaquia: entre la tradición y la modernidad',
    author: 'Antonio Lorca',
    publishedAt: '2024-05-18',
    category: 'Opinión',
    excerpt: 'Un artículo de reflexión sobre los retos que enfrenta la fiesta de los toros en el siglo XXI y las claves para su supervivencia.',
    content: '<p>La tauromaquia se encuentra en una encrucijada histórica. Asediada por corrientes animalistas y a menudo incomprendida por una sociedad cada vez más urbana, la fiesta debe saber adaptarse sin perder su esencia. La clave está en comunicar mejor sus valores culturales y ecológicos, y en exigir la máxima integridad y verdad en el ruedo.</p>',
    imageId: 'opinion-1',
  },
   {
    id: '7',
    slug: 'talavante-resurge-badajoz',
    title: 'El ciclón Talavante arrasa en Badajoz con un indulto',
    author: 'Javier Pérez',
    publishedAt: '2024-06-24',
    category: 'Actualidad',
    excerpt: 'Alejandro Talavante indulta a "Cartelero" de Garcigrande en una tarde de éxtasis colectivo en su tierra.',
    content: '<p>Badajoz fue una fiesta y el gran protagonista fue Alejandro Talavante. El torero extremeño cuajó una faena de ensueño a "Cartelero", un extraordinario toro de Garcigrande al que acabó perdonando la vida. Fue una sinfonía de toreo al natural, improvisación y genialidad que puso la plaza boca abajo.</p>',
    imageId: 'news-4',
  },
  {
    id: '8',
    slug: 'feria-otono-madrid',
    title: 'Presentada una Feria de Otoño de Madrid con grandes alicientes',
    author: 'Redacción',
    publishedAt: '2024-09-01',
    category: 'Agenda',
    excerpt: 'Plaza 1 desvela las combinaciones de un ciclo que pondrá el broche de oro a la temporada en Las Ventas.',
    content: '<p>La Feria de Otoño de Madrid ya tiene carteles. El ciclo, que se celebrará a finales de septiembre y principios de octubre, contará con la vuelta de toreros esperados y desafíos ganaderos de máxima expectación. Un cierre de temporada por todo lo alto en la primera plaza del mundo.</p>',
    imageId: 'news-5',
  },
  {
    id: '9',
    slug: 'juli-retirada-leyenda',
    title: 'El Juli, la retirada de una leyenda del siglo XXI',
    author: 'Carlos Crivell',
    publishedAt: '2023-10-01',
    category: 'Opinión',
    excerpt: 'Análisis de la trayectoria de Julián López "El Juli" en el día de su adiós definitivo a los ruedos en Sevilla.',
    content: '<p>El 1 de octubre de 2023 será recordado como el día en que una de las más grandes figuras del toreo del siglo XXI dijo adiós. Julián López "El Juli" se despidió en Sevilla, su plaza talismán, dejando un legado de ambición, poderío y una capacidad lidiadora fuera de lo común. Su carrera es historia del toreo.</p>',
    imageId: 'news-6',
  },
];

const events: Event[] = [
  {
    id: '1',
    date: '12 JUL 2024',
    city: 'Pamplona',
    arena: 'Plaza de Toros de Pamplona',
    details: 'Toros de Victorino Martín para Manuel Escribano, Joselito Adame y Rubén Pinar.',
  },
  {
    id: '2',
    date: '15 AGO 2024',
    city: 'Málaga',
    arena: 'Plaza de Toros de La Malagueta',
    details: 'Corrida Picassiana. Toros de Garcigrande para Morante de la Puebla, Roca Rey y Pablo Aguado.',
  },
  {
    id: '3',
    date: '25 AGO 2024',
    city: 'Bilbao',
    arena: 'Plaza de Toros de Vista Alegre',
    details: 'Toros de Jandilla para El Juli (reaparición), Alejandro Talavante y Tomás Rufo.',
  },
  {
    id: '4',
    date: '08 SEP 2024',
    city: 'Valladolid',
    arena: 'Plaza de Toros de Valladolid',
    details: 'Toros de Victoriano del Río para Sebastián Castella, Emilio de Justo y Roca Rey.',
  },
];

// Simulate API calls
export const getArticles = async (): Promise<Article[]> => {
  return new Promise(resolve => setTimeout(() => resolve(articles), 200));
};

export const getArticleBySlug = async (slug: string): Promise<Article | undefined> => {
  return new Promise(resolve =>
    setTimeout(() => resolve(articles.find(a => a.slug === slug)), 100)
  );
};

export const getEvents = async (): Promise<Event[]> => {
  return new Promise(resolve => setTimeout(() => resolve(events), 200));
};
