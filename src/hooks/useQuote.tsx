import { useCallback, useEffect, useState } from "react";


const QUOTE_API = "https://api.quotable.io/random";

export type Quote = {
  _id: string,
  content: string,
  author: string,
};

type ReturningType = [Quote | null, () => Promise<any>];

export default function(): ReturningType {
  const [quote, setQuote] = useState<Quote | null>(null);

  const fetchQuote = useCallback(async () => {
    const fetched = await fetch(QUOTE_API);
    const result = await fetched.json() as Quote;
    setQuote({
      ...result
    });
  }, []);

  useEffect(() => {
    fetchQuote();
  }, []);

  return [quote, fetchQuote];
}
