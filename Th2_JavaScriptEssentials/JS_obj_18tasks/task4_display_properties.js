var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

for (const i of library) {
    let title_autor = '';
    title_autor = title_autor + '"' + i['title'] + '"' + ' written by ' + i['author'] + '.';
    if (i['readingStatus']) {
        console.log(`You already read ${title_autor}`);
    } else {
        console.log(`You still have to read ${title_autor}`);
    }
}