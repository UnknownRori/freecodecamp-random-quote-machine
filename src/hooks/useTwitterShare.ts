type TwitterShareOpts = {
    text: string,
};

export default function(opts: TwitterShareOpts): string {
    const encodeText = encodeURIComponent(opts.text);
    const twitterUrl = `https://twitter.com/intent/tweet?&text=${encodeText}`;

    return twitterUrl;
}
