import readline from 'readline';
import dns from 'dns';

const q = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

q.question('Enter a URL (You must include http/https)\n', (url) => {
    const validateUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    const mainDomain = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}/g;
    if (!url.match(validateUrl)) throw new Error('Invalid URL');
    dns.lookup(url.match(mainDomain)[0], (err, adress) => {
        if (err) throw new Error(err);
        console.log('IP: %s', adress)
        process.exit();
    })
});
