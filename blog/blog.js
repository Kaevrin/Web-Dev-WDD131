const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
        "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

const blogContainer = document.getElementById('blogpostcontainer');

articles.forEach(article => {

    const blogpost = document.createElement('div');
    blogpost.className = 'blogpost';

    const metainfo = document.createElement('div');
    metainfo.className = 'blogpostmetainfo';

    const date = document.createElement('h1');
    date.className = 'datetime';
    date.textContent = article.date;

    const ages = document.createElement('p');
    ages.className = 'ages';
    ages.textContent = article.ages;

    const genre = document.createElement('p');
    genre.className = 'genre';
    genre.textContent = article.genre;

    const score = document.createElement('p');
    score.className = 'score';
    score.textContent = article.stars;

    metainfo.append(date, ages, genre, score);

    const content = document.createElement('section');
    content.className = 'blogpostcontent';

    const title = document.createElement('h1');
    title.className = 'booktitle';
    title.textContent = article.title;

    const img = document.createElement('img');
    img.className = 'bookcover';
    img.src = article.imgSrc;
    img.alt = article.imgAlt;

    const desc = document.createElement('p');
    desc.textContent = article.description + ' ';

    const readMore = document.createElement('a');
    readMore.href = '#';
    readMore.textContent = 'Read More...';

    desc.appendChild(readMore);
    content.append(title, img, desc);

    blogpost.append(metainfo, content);
    blogContainer.appendChild(blogpost);
});