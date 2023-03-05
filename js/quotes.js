const quotes=[
    {
        quote: "Carpe diem. Seize the day.",
        book: "Dead poets society, Peter Weir"
    },
    {
        quote: "No matter what anybody tells you, words and ideas can change the world.",
        book: "Dead poets society, Peter Weir"
    },
    {
        quote: "Make your lives extraordinary.",
        book: "Dead poets society, Peter Weir"
    },
    {
        quote: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
        book: "Sherlock Holmes, Arthur Conan Doyle"
    },
    {
        quote: "Who would be born must first destroy a world.",
        book: "Demian, Hermann Hesse"
    },
    {
        quote: "Towards thee I roll, thou all-destroying but unconquering whale; to the last I grapple with thee; from hell's heart I stab at thee; for hate's sake I spit my last breath at thee.",
        book: "Moby-Dick, Herman Melville"
    },
    {
        quote: "Dream the impossible, do the impossible love, fight with unwinnable enemy, resist the unresistable pain, catch the uncatchable star in the sky.",
        book: "Don Quixote, Miguel de Cervantes"
    },
    {
        quote: "In order to attain the impossible, one must attempt the absurd.",
        book: "Don Quixote, Miguel de Cervantes"
    }

];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.book;