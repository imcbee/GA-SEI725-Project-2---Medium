require('../connection/db.connection');
const db = require('./index');

const articles = [
    {
        author: 'Corey',
        title: 'How much wood',
        text: 'could a woodchuck',
        publishDate: new Date(2020, 09, 28),
    },
    {
        author: 'Ian',
        title: 'chuck if',
        text: 'a woodchuck',
        publishDate: new Date(2020, 09, 27),
    },
    {
        author: 'Nsikak',
        title: 'could',
        text: 'chuck wood',
        publishDate: new Date(2020, 09, 26),
    },
];

async function reloadData() {
	try {
		let deleted = await db.Articles.deleteMany({});
		console.log(deleted)
		
		let reloading = await db.Articles.insertMany(articles);
		console.log(reloading)
	} catch (err) {
		console.log(err);
	}
}

reloadData();

// module.exports = articles;