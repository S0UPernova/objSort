const stuffFromCoughAPI = [
  {
    id: 1,
    quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    author: "Ayn Rand",
    category: "Famous",
  },
  {
    id: 2,
    quote: "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
    author: "A. J. Liebling",
    category: "Famous",
  },
  {
    id: 3,
    quote: "This book fills a much-needed gap.",
    author: "Moses Hadas in a review",
    category: "Famous",
  },
  {
    id: 4,
    quote: "A mathematician is a device for turning coffee into theorems.",
    author: "Paul Erdos",
    category: "Famous",
  },
  {
    id: 5,
    quote: "The only difference between me and a madman is that I'm not mad.",
    author: "Salvador Dali",
    category: "Famous",
  },
  {
    id: 6,
    quote: "Never interrupt your enemy when he is making a mistake.",
    author: "Napoleon Bonaparte",
    category: "Famous",
  },
  {
    id: 7,
    quote: "If you are going through hell, keep going.",
    author: "Sir Winston Churchill ",
    category: "Famous",
  },
  {
    id: 8,
    quote: "He who has a 'why' to live, can bear with almost any 'how'.",
    author: "Friedrich Nietzsche",
    category: "Famous",
  },
  {
    id: 9,
    quote: "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
    author: "Frank Lloyd Wright",
    category: "Famous",
  },

  {
    id: 10,
    quote: "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
    author: "Sir Winston Churchill",
    category: "Famous",
  }
]


async function main() {
  // this is literally that thing in memory
  // let data = stuffFromCoughAPI;

  // this is a copy of it.
  let data = [
    ...stuffFromCoughAPI,
    "very dirty",
    null,
    undefined,
    {
      id: 10,
      author: 54,
      category: () => { console.log("if this runs something went wrong") },
      quote: 'something'
    }
  ];

  // search for
  const targetAuth = "paul erdos" // lower case so will have to take that into account
  const targetId = 2

  // let length = data.length;
  // for (let i = 0; i < length; i ++) {
  //   if (typeof data[i] === 'object') {
  //     if ((data[i].id === 0 || data[i].id) && typeof data[i].id === 'number' && typeof data[i]?.author === "string" && typeof data[i]?.category === "string" && typeof data[i]?.quote === "string") {
  //       console.log('element', data[i])

  //       let author = data[i]['author'];

  //       if (author) {
  //         let authorArr = author.split(' ');
  //         // ['Sir', 'Winston', 'Churchill']
  //         let authorArrLen = authorArr.length;

  //         let authorLastName = authorArr[authorArrLen - 1];

  //       }
  //     }
  //   }
  // }

  let sortedData = data.filter((x) => {
    // Flitering out that dang dirty data
    if (typeof x === 'object' && typeof x?.id === 'number' && typeof x?.author === "string" && typeof x?.category === "string" && typeof x?.quote === "string") {
      return true
    }
    else {
      return false
    }
  })
  // Sorting that freshly cleaned linen scented data
  .sort((x, y) => {
    let xAuthor = x['author'];
    let yAuthor = y['author'];

    let xAuthorArr = xAuthor.trim().split(' '); // trim to remove extra white space from the begining and the end
    let yAuthorArr = yAuthor.trim().split(' ');

    // ['Sir', 'Winston', 'Churchill']
    let xAuthorArrLen = xAuthorArr.length;
    let yAuthorArrLen = yAuthorArr.length;

    let xAuthorLastName = xAuthorArr[xAuthorArrLen - 1];
    let yAuthorLastName = yAuthorArr[yAuthorArrLen - 1];
    if (xAuthorLastName.toLowerCase() > yAuthorLastName.toLowerCase()) { // lower case because we don't want to get all the caps then all the lowers, purely by letter
      return 1
    }
    else if (xAuthorLastName.toLowerCase() < yAuthorLastName.toLowerCase()) {
      return -1
    }
    else {
      return 0 // https://i.redd.it/eu3pt05xwmt61.jpg 😄
    }
  })

  console.log('og data:', data)
  console.log('sorted data:', sortedData)
}

main()