require('../config/db.connection');
const db = require('./index');

const articles = [
    {
        author: 'Charlotte Hu',
        title: 'Tesla wants to make humanoid robots.',
        text: 'During Teslas AI day last week, Elon Musk unmasked his next creation to come: “friendly” Tesla robots that can perform dangerous, repetitive, and boring tasks like fetching tools for repairs or getting groceries. In the presentation, Musk explains how this robot is the natural evolution for the tech at Tesla. “Tesla is arguably the biggest robotics company because our cars are semi-sentient robots on wheels,” he boasts. It “makes sense,” he says, to put the cars self-driving capabilities and built in neural networks that understand and navigate the world around the car into a humanoid robot form. The robot will supposedly stand 5 ft 8 in tall and weigh 125 pounds. It will be able to carry up to 45 pounds, deadlift up to 150 pounds, and move at a maximum speed of 5 mph. Musk assures the audience that this robot will be one that humans can run away from and overpower (if necessary). “Hopefully that does not ever happen, but you never know,” he joked. The prototype is expected to come online sometime next year, and the company has put up an open call for team member applications.',
        image: 'https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        publishDate: new Date(2021, 09, 24),
        vote: 0
       
    },
    {
        author: 'Maria Parazo Rose',
        title: 'The James Webb Space Telescopes first image shows the universe in a new light',
        text: 'Time travel is often portrayed as a superpower or phenomenon in a fictitious, far off future. But for the James Webb Space Telescope, time travel is kind of its purpose. The James Webb Space Telescope (JWST), was built to peer back into a part of space-time that has never been seen before—when the earliest stars and galaxies formed, more than 13.5 billion years ago. As the largest and most powerful space telescope in NASAs history, designed in collaboration with the European Space Agency and the Canadian Space Agency, its launch in December of 2021 marked the end of a 17-year construction process and the start of a decade-long voyage into the depths of the universe. After a six-month tune up in space, the first full-color images from the telescopes infrared camera were revealed in a White House press conference this evening. The final product is a composite of images taken at various infrared wavelengths over 12.5 hours. At the heart lies the galaxy cluster SMACS 0723, which offers a “deep-field view” of stars in front of it and behind it, according to the NASA page. The phenomenon that makes this possible is called gravitational lensing, and has been used to detect other major space bodies like supernovas and rogue black holes. SMACS 0723 is so far away from the Milky Way, the image we see is from roughly 4.6 billions years ago. Late last week, NASA teased a longer list of the telescopes main targets. Among them are the Carina Nebula, nearly 7,600 light-years away, where there are massive stars several times larger than the sun; the Southern Ring Nebula, which is an expanding cloud of gas around a dying star and is about half a light-year in diameter; and Stephans Quintet, 290 million light-years away, which forms a compact galaxy group in the constellation Pegasus. “Whats crazy is that this is just an appetizer of a much deeper field of research that we are going to study,” says Heidi Hammel, an interdisciplinary scientist on the JWST project. She has worked with the NASA team over the last 20 years to ensure that the design and construction of the telescope, as it adapted over time, met the standards researchers needed to forge deeper into the universe and its history. ',
        image: 'https://media.istockphoto.com/photos/in-outer-space-james-webb-telescope-far-galaxy-explore-scifi-space-picture-id1365195664?b=1&k=20&m=1365195664&s=170667a&w=0&h=2eimEuBBfWSyDtT673zCtEnRU3rWceGGnQPpySTwuCY=',
        publishDate: new Date(2022, 06, 11),
        vote:0
        
    },
    {
        author: 'Tariq Malik',
        title: 'NASA calls off Artemis 1 moon rocket launch over engine cooling issue',
        text: 'CAPE CANAVERAL, Fla. — An engine cooling issue on NASAs giant new rocket for deep-space exploration forced the agency to call off the boosters much-anticipated launch debut early Monday (Aug. 29). NASA had mostly fueled its first Space Launch System (SLS) megarocket to launch the Artemis 1 moon mission on Monday when launch controllers were unable to chill one of the four main engines to the temperatures needed to handle its super-cold propellant. The issue stalled plans to launch the SLS rocket and its uncrewed Orion spacecraft on an ambitious 42-day test flight around the moon. Liftoff was scheduled for 8:33 a.m. EDT (1233 GMT). Chilling the SLS rockets engines before flowing cryogenic liquid hydrogen and liquid oxygen through them is a required step before the rocket can launch, NASA officials said. While three of the engines passed that test, Engine No. 3 did not, despite troubleshooting efforts. "Launch controllers condition the engines by increasing pressure on the core stage tanks to bleed some of the cryogenic propellant to the engines to get them to the proper temperature range to start them," NASA officials said in a statement. "Engine 3 is not properly being conditioned through the bleed process, and engineers are troubleshooting."',
        image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        publishDate: new Date(2020, 09, 26),
        vote:0
        
    },
];

// async function reloadData() {
// 	try {
// 		let deleted = await db.Articles.deleteMany({});
// 		console.log(deleted)
		
// 		let reloading = await db.Articles.insertMany(articles);
// 		console.log(reloading)
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

// reloadData();

module.exports = articles;