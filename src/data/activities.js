import croscatImg from '../assets/images/croscat.jpg';
import fagedaImg from '../assets/images/fagedaCarruatge.jpg';
import biciImg from '../assets/images/bici.jpg';
import museuImg from '../assets/images/museu.jpg';
import globoImg from '../assets/images/globo.jpg';

export const activities = [
    {
        id: 1,
        name: "Guided Route to Santa Margarida and Croscat Volcanoes",
        description: "Explore the most iconic volcanoes with a specialized guide. You will learn about the history, geology, and nature of the natural park. It is a very complete and accessible hiking excursion.",
        image: croscatImg,
        price: 15
    },
    {
        id: 2,
        name: "Carriage Ride through La Fageda",
        description: "Travel through La Fageda d’en Jordà in a horse-drawn carriage. Enjoy a quiet ride in one of the most famous forests in Catalonia. Ideally suited for families and people of all ages.",
        image: fagedaImg,
        price: 17
    },
    {
        id: 3,
        name: "Hot Air Balloon Excursion",
        description: "Live a unique experience flying in a balloon over the volcanoes, fields, and villages of La Garrotxa with spectacular views. Activity includes a briefing and a flight of approximately one hour.",
        image: globoImg,
        price: 195
    },
    {
        id: 4,
        name: "Bicycle Rental",
        description: "Enjoy a quiet cycling route along old railway paths surrounded by nature. Includes bike rental for the whole day.",
        image: biciImg,
        price: 20

    },
    {
        id: 5,
        name: "Volcano Museum",
        description: "Visit the Garrotxa Volcano Museum, an interactive museum dedicated to volcanology and La Garrotxa, highly visual and educational.",
        image: museuImg,
        price: 7
    },
];
