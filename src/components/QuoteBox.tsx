import useQuote from "../hooks/useQuote";
import useTwitterShare from "../hooks/useTwitterShare";

export default function() {
  const [quote, fetchQuote] = useQuote();

  let formattedQuote = quote == null ? "" : `- ${quote.author}`;

  return (
    <div id="quote-box" className="flex flex-col gap-2 border-2 border-gray-200 shadow-md rounded-md py-4 px-4 max-w-3xl">
      <p id="text" className="font-mono text-center">"{quote?.content}"</p>
      <span id="author" className="text-right">{formattedQuote}</span>
      <div className="flex justify-between items-center">
        <div className="p-2 bg-blue-500 rounded-md">
          <a id="tweet-quote" href={useTwitterShare({
            text: `${quote?.content ?? ""}\n\n- ${quote?.author ?? ""}`
          })}>
            < svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke- width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
          </a>
        </div>
        <div>
          <button id="new-quote" onClick={() => fetchQuote()} className="bg-blue-500 py-2 px-8 rounded text-white text-lg">New quote</button>
        </div>
      </div>
    </div >
  );
}
