const quotes = [
  {
    quote: 'Try not. Do or do not. There is no try.',
    author: 'Yoda'
  },
  {
    quote: 'Your eyes can deceive you; don’t trust them.”',
    author: 'Obi-Wan Kenobi'
  },
  {
    quote: 'Luminous beings we are, not this crude matter.',
    author: 'Yoda'
  },
  {
    quote: 'Who’s the more foolish: the fool or the fool who follows him?',
    author: 'Obi-Wan Kenobi'
  },
  {
    quote: 'Your focus determines your reality.',
    author: 'Qui-Gon Jinn'
  },
  {
    quote: 'No longer certain that one ever does win a war, I am',
    author: 'Yoda'
  }
];

export function renderQuotes() {
  const random = Math.floor(Math.random() * quotes.length);
  return (
    <figure className="quote">
      <blockquote>{quotes[random].quote}</blockquote>
      <figcaption>
        &mdash; <cite>{quotes[random].author}</cite>
      </figcaption>
    </figure>
  );
}
