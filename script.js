const quoteDisplay = document.getElementById('quote-display');
const generateQuoteButton = document.getElementById('generate-quote');
const copyQuoteButton = document.getElementById('copy-quote');

// Event listener for the "Generate Quote" button
generateQuoteButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * localQuotes.length);
  const quote = localQuotes[randomIndex];
  quoteDisplay.innerHTML = `
    "${quote.text}" 
    <p><strong>- ${quote.author || 'Unknown'}</strong></p>
  `;
});

// Event listener for the "Copy Quote" button
copyQuoteButton.addEventListener('click', () => {
  const quoteText = quoteDisplay.innerText;
  navigator.clipboard.writeText(quoteText).then(() => {
    alert('Quote copied to clipboard!');
  });
});