export const quote = [
    {
        id : 1,
        text : "Whoever said that money can't buy happiness simply didn't know where to go shopping.",
        person : 'Bo Derek'
    },
    {
        id : 2,
        text : 'Shopping is my cardio.',
        person : 'Carrie Bradshaw, Sex and the City'
    },
    {
        id : 3,
        text : "Treat yo' self.",
        person : 'Tom and Donna, Parks and Recreation'
    },
    {
        id : 4,
        text : 'Happiness is not in money, but in shopping.',
        person : 'Marilyn Monroe'
    },
    {
        id : 5,
        text : 'I always say shopping is cheaper than a psychiatrist.',
        person : 'Tammy Faye Bakker'
    },
    {
        id : 6,
        text : "Shopping is better than sex. If you're not satisfied after shopping, you can make an exchange for something you really like.",
        person : 'Adrienne Gusoff'
    },
    {
        id : 7,
        text : 'Anyone who lives within their means suffers from a lack of imagination.',
        person : 'Oscar Wilde'
    },
    {
        id : 8,
        text : 'I love shopping. There is a little bit of magic found in buying something new. It is instant gratification, a quick fix.',
        person : 'Rebecca Bloom, Girl Anatomy: A Novel'
    },
    {
        id : 9,
        text : "Buy what you don't have yet or what you really want, which can be mixed with what you already own. Buy only because something excites you, not just for the simple act of shopping.",
        person : 'Karl Lagerfeld'
    },
    {
        id : 10,
        text : 'Once again, we come to the Holiday Season, a deeply religious time that each of us observes, in his own way, by going to the mall of his choice.',
        person : 'Dave Barry'
    },
    {
        id : 11,
        text : 'I shop, therefore I am.',
        person : 'Heather Chandler, Heathers'
    },
    {
        id : 12,
        text : 'You can always find something you want.',
        person : 'Sophie Kinsella, Confessions of a Shopaholic'
    },
    {
        id : 13,
        text : "Style Strategy is about shopping smart, staying chic, and making it all last. It's about showing women how to shop for value without compromising style.",
        person : 'Nina Garcia'
    },
]

export const randomQuote = () => quote[Math.floor(Math.random() * quote.length)];
