export interface MovieDataType {
  id: string;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  }

  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export const moviesData = [
  {
    id: "1",
    title: "Pride and Prejudice",
    thumbnail: {
      trending: {
        small: "https://www.pluggedin.com/wp-content/uploads/2019/12/pride-and-prejudice-1024x673.jpg",
        large: "https://www.pluggedin.com/wp-content/uploads/2019/12/pride-and-prejudice-1024x673.jpg",
      },
      regular: {
        small: "https://www.pluggedin.com/wp-content/uploads/2019/12/pride-and-prejudice-1024x673.jpg",
        medium: "https://www.pluggedin.com/wp-content/uploads/2019/12/pride-and-prejudice-1024x673.jpg",
        large: "https://www.pluggedin.com/wp-content/uploads/2019/12/pride-and-prejudice-1024x673.jpg",
      },
    },
    year: 2005,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "2",
    title: "Sense and Sensibilty ",
    thumbnail: {
      trending: {
        small: "https://cdn.britannica.com/04/213604-050-99A640A3/Movie-still-Emma-Thompson-Kate-Winslet-Sense-and-Sensibility-1995.jpg?w=300",
        large: "https://cdn.britannica.com/04/213604-050-99A640A3/Movie-still-Emma-Thompson-Kate-Winslet-Sense-and-Sensibility-1995.jpg?w=300",
      },
      regular: {
        small: "https://cdn.britannica.com/04/213604-050-99A640A3/Movie-still-Emma-Thompson-Kate-Winslet-Sense-and-Sensibility-1995.jpg?w=300",
        medium: "https://cdn.britannica.com/04/213604-050-99A640A3/Movie-still-Emma-Thompson-Kate-Winslet-Sense-and-Sensibility-1995.jpg?w=300",
        large: "https://cdn.britannica.com/04/213604-050-99A640A3/Movie-still-Emma-Thompson-Kate-Winslet-Sense-and-Sensibility-1995.jpg?w=300",
      },
    },
    year: 1995,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "3",
    title: "Persuasion",
    thumbnail: {
      trending: {
        small: "http://thefilmexperience.net/storage/2022/persuasion-trailer-netflix-1655214983.jpg?__SQUARESPACE_CACHEVERSION=1658769163144",
        large: "http://thefilmexperience.net/storage/2022/persuasion-trailer-netflix-1655214983.jpg?__SQUARESPACE_CACHEVERSION=1658769163144",
      },
      regular: {
        small: "./thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "./thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "http://thefilmexperience.net/storage/2022/persuasion-trailer-netflix-1655214983.jpg?__SQUARESPACE_CACHEVERSION=1658769163144",
      },
    },
    year: 2022,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "4",
    title: "Jane Eyre",
    thumbnail: {
      trending: {
        small: "./thumbnails/1998/trending/small.jpg",
        large: "https://preview.redd.it/what-do-you-think-about-jane-eyre-2011-version-mia-v0-y6vymwl1s9sc1.jpg?width=1080&crop=smart&auto=webp&s=0a2005bf5919d34ec396496f7938a351491f6596v",
      },
      regular: {
        small: "./thumbnails/1998/regular/small.jpg",
        medium: "./thumbnails/1998/regular/medium.jpg",
        large: "https://preview.redd.it/what-do-you-think-about-jane-eyre-2011-version-mia-v0-y6vymwl1s9sc1.jpg?width=1080&crop=smart&auto=webp&s=0a2005bf5919d34ec396496f7938a351491f6596",
      },
    },
    year: 2011,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: "5",
    title: "Becoming Jane",
    thumbnail: {
      trending: {
        small: "./thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "https://vista.ir/mag/i/2/kakpi.jpg",
      },
      regular: {
        small: "./thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium: "./thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "https://vista.ir/mag/i/2/kakpi.jpg",
      },
    },
    year: 2012,
    category: "Movie",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
  },
  {
    id: "6",
    title: "Pride and Prejudice",
    thumbnail: {
      regular: {
        small: "https://cdn.britannica.com/06/213606-050-50B74011/Publicity-still-Colin-Firth-Jennifer-Ehle-Pride-and-Prejudice-1995.jpg",
        medium: "https://cdn.britannica.com/06/213606-050-50B74011/Publicity-still-Colin-Firth-Jennifer-Ehle-Pride-and-Prejudice-1995.jpg",
        large: "https://cdn.britannica.com/06/213606-050-50B74011/Publicity-still-Colin-Firth-Jennifer-Ehle-Pride-and-Prejudice-1995.jpg",
      },
    },
    year: 1995,
    category: "Tv Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "7",
    title: "ُSense and Sensibility",
    thumbnail: {
      regular: {
        small: "https://cdn.30nama.com/cover/30140945_30NAMA.webp?1637158664",
        medium: "https://cdn.30nama.com/cover/30140945_30NAMA.webp?1637158664",
        large: "https://cdn.30nama.com/cover/30140945_30NAMA.webp?1637158664",
      },
    },
    year: 2008,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "8",
    title: "North and Sourth",
    thumbnail: {
      regular: {
        small: "https://static.namava.ir/Content/Upload/Images/d368ab49-53ba-4ecd-bdfb-40bb974544f1.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=150",
        medium: "https://static.namava.ir/Content/Upload/Images/d368ab49-53ba-4ecd-bdfb-40bb974544f1.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=150",
        large: "https://static.namava.ir/Content/Upload/Images/d368ab49-53ba-4ecd-bdfb-40bb974544f1.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=150",
      },
    },
    year: 2004,
    category: "Tv Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "9",
    title: "Anne with E",
    thumbnail: {
      regular: {
        small: "https://static2.bartarinha.ir/servev2/TY3NTk1YzMwM/5Uwvb7W7Zm0,/file.jpg",
        medium: "https://static2.bartarinha.ir/servev2/TY3NTk1YzMwM/5Uwvb7W7Zm0,/file.jpg",
        large: "https://static2.bartarinha.ir/servev2/TY3NTk1YzMwM/5Uwvb7W7Zm0,/file.jpg",
      },
    },
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "10",
    title: "Mansfield Park",
    thumbnail: {
      regular: {
        small: "https://m.media-amazon.com/images/M/MV5BMTkwMzYyNTMwMF5BMl5BanBnXkFtZTcwMTQ2NzYzNQ@@._V1_QL75_UX492_.jpg",
        medium: "https://m.media-amazon.com/images/M/MV5BMTkwMzYyNTMwMF5BMl5BanBnXkFtZTcwMTQ2NzYzNQ@@._V1_QL75_UX492_.jpg",
        large: "https://m.media-amazon.com/images/M/MV5BMTkwMzYyNTMwMF5BMl5BanBnXkFtZTcwMTQ2NzYzNQ@@._V1_QL75_UX492_.jpg",
      },
    },
    year: 1999,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "11",
    title: "Emma",
    thumbnail: {
      regular: {
        small: "https://www.willowandthatch.com/wp-content/uploads/2020/03/emma-muslins.jpg",
        medium: "https://www.willowandthatch.com/wp-content/uploads/2020/03/emma-muslins.jpg",
        large: "https://www.willowandthatch.com/wp-content/uploads/2020/03/emma-muslins.jpg",
      },
    },
    year: 2020,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "12",
    title: "Emma",
    thumbnail: {
      regular: {
        small: "https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5MjcwMl5BMl5BanBnXkFtZTgwNTU4MzEzMjE@._V1_QL75_UX438_.jpg",
        medium: "https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5MjcwMl5BMl5BanBnXkFtZTgwNTU4MzEzMjE@._V1_QL75_UX438_.jpg",
        large: "https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5MjcwMl5BMl5BanBnXkFtZTgwNTU4MzEzMjE@._V1_QL75_UX438_.jpg",
      },
    },
    year: 2017,
    category: "Tv Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "13",
    title: "Bridgeton",
    thumbnail: {
      regular: {
        small: "https://media.glamour.com/photos/61e836efdf4766aab2f8063b/master/w_1920,c_limit/BRIDGERTON_204_Unit_04659R.jpegg",
        medium: "https://media.glamour.com/photos/61e836efdf4766aab2f8063b/master/w_1920,c_limit/BRIDGERTON_204_Unit_04659R.jpeg",
        large: "https://media.glamour.com/photos/61e836efdf4766aab2f8063b/master/w_1920,c_limit/BRIDGERTON_204_Unit_04659R.jpeg",
      },
    },
    year: 2021,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "14",
    title: "Dowenton Abbey",
    thumbnail: {
      regular: {
        small: "https://www.digikala.com/mag/wp-content/uploads/2021/11/download-5.jpg",
        medium: "https://www.digikala.com/mag/wp-content/uploads/2021/11/download-5.jpg",
        large: "https://www.digikala.com/mag/wp-content/uploads/2021/11/download-5.jpg",
      },
    },
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "15",
    title: "The Crown",
    thumbnail: {
      regular: {
        small: "https://blog.okcs.com/wp-content/uploads/2021/03/la-1512596576-d4ehcp8oq9-snap-image.jpg",
        medium: "https://blog.okcs.com/wp-content/uploads/2021/03/la-1512596576-d4ehcp8oq9-snap-image.jpg",
        large: "https://blog.okcs.com/wp-content/uploads/2021/03/la-1512596576-d4ehcp8oq9-snap-image.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
  },
  {
    id: "16",
    title: "The Victoria",
    thumbnail: {
      regular: {
        small: "https://www.digikala.com/mag/wp-content/uploads/2021/11/victoria.jpg",
        medium: "https://www.digikala.com/mag/wp-content/uploads/2021/11/victoria.jpg",
        large: "https://www.digikala.com/mag/wp-content/uploads/2021/11/victoria.jpg",
      },
    },
    year: 2016,
    category: "TV Series",
    rating: "E+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "17",
    title: "The Great",
    thumbnail: {
      regular: {
        small: "https://www.digikala.com/mag/wp-content/uploads/2021/11/the-great-season-2-elle-fanning-03.jpg",
        medium: "https://www.digikala.com/mag/wp-content/uploads/2021/11/the-great-season-2-elle-fanning-03.jpg",
        large: "https://www.digikala.com/mag/wp-content/uploads/2021/11/the-great-season-2-elle-fanning-03.jpg",
      },
    },
    year: 2020,
    category: "Tv Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "18",
    title: "The Ground Hotel",
    thumbnail: {
      regular: {
        small: "https://www.digikala.com/mag/wp-content/uploads/2021/11/gran-hotel.jpg",
        medium: "https://www.digikala.com/mag/wp-content/uploads/2021/11/gran-hotel.jpg",
        large: "https://www.digikala.com/mag/wp-content/uploads/2021/11/gran-hotel.jpg",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "19",
    title: "Lady J",
    thumbnail: {
      regular: {
        small: "https://cdn.30nama.com/cover/30200180_30NAMA.webp?1637213833",
        medium: "https://cdn.30nama.com/cover/30200180_30NAMA.webp?1637213833",
        large: "https://cdn.30nama.com/cover/30200180_30NAMA.webp?1637213833",
      },
    },
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "20",
    title: "The Reed Sleeve",
    thumbnail: {
      regular: {
        small: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-9eEAhCi93wttx6aBQy-CRkDTcBwN7ju8G-ncy8qho5coMs8b",
        medium: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-9eEAhCi93wttx6aBQy-CRkDTcBwN7ju8G-ncy8qho5coMs8b",
        large: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-9eEAhCi93wttx6aBQy-CRkDTcBwN7ju8G-ncy8qho5coMs8b",
      },
    },
    year: 2021,
    category: "Tv Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "21",
    title: "Moon Lovers",
    thumbnail: {
      regular: {
        small: "https://app.akharinkhabar.ir/ContactUs/2024/03/15/adcbdeeb-5a3e-4846-9f28-a874b8423f81.jpeg",
        medium: "https://app.akharinkhabar.ir/ContactUs/2024/03/15/adcbdeeb-5a3e-4846-9f28-a874b8423f81.jpeg",
        large: "https://app.akharinkhabar.ir/ContactUs/2024/03/15/adcbdeeb-5a3e-4846-9f28-a874b8423f81.jpeg",
      },
    },
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "22",
    title: "The Emma",
    thumbnail: {
      regular: {
        small: "https://images.mubicdn.net/images/film/36076/cache-25816-1696078926/image-w1280.jpg?size=1200x",
        medium: "https://images.mubicdn.net/images/film/36076/cache-25816-1696078926/image-w1280.jpg?size=1200x",
        large: "https://images.mubicdn.net/images/film/36076/cache-25816-1696078926/image-w1280.jpg?size=1200x",
      },
    },
    year: 1994,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    id: "23",
    title: "The Great Gatsby",
    thumbnail: {
      regular: {
        small: "https://pyxis.nymag.com/v1/imgs/188/4ad/d97b963787c77c118b109208e652f8b9f1-13-gatsby3.rhorizontal.w700.jpg",
        medium: "https://pyxis.nymag.com/v1/imgs/188/4ad/d97b963787c77c118b109208e652f8b9f1-13-gatsby3.rhorizontal.w700.jpg",
        large: "https://pyxis.nymag.com/v1/imgs/188/4ad/d97b963787c77c118b109208e652f8b9f1-13-gatsby3.rhorizontal.w700.jpg",
      },
    },
    year: 2013,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "25",
    title: "Little Women",
    thumbnail: {
      regular: {
        small: "https://www.hollywoodreporter.com/wp-content/uploads/2019/11/little_women_-_publicity_still_-_embed_5-2019.jpg?w=928&h=478&crop=1",
        medium: "https://www.hollywoodreporter.com/wp-content/uploads/2019/11/little_women_-_publicity_still_-_embed_5-2019.jpg?w=928&h=478&crop=1",
        large: "https://www.hollywoodreporter.com/wp-content/uploads/2019/11/little_women_-_publicity_still_-_embed_5-2019.jpg?w=928&h=478&crop=1",
      },
    },
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: true,
  },
  {
    id: "26",
    title: "Little Women",
    thumbnail: {
      regular: {
        small: "http://thefilmexperience.net/storage/1990s/Little-Women-1994-woods.jpeg?__SQUARESPACE_CACHEVERSION=1635440403042",
        medium: "http://thefilmexperience.net/storage/1990s/Little-Women-1994-woods.jpeg?__SQUARESPACE_CACHEVERSION=1635440403042",
        large: "http://thefilmexperience.net/storage/1990s/Little-Women-1994-woods.jpeg?__SQUARESPACE_CACHEVERSION=1635440403042",
      },
    },
    year: 1994,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "27",
    title: "Northanger Abbey",
    thumbnail: {
      regular: {
        small: "https://m.media-amazon.com/images/M/MV5BZjRjOTFjNDctOWU5YS00MmRlLWEwYzItMGZkNTJlMDFkMWM1XkEyXkFqcGc@._V1_.jpg",
        medium: "https://m.media-amazon.com/images/M/MV5BZjRjOTFjNDctOWU5YS00MmRlLWEwYzItMGZkNTJlMDFkMWM1XkEyXkFqcGc@._V1_.jpg",
        large: "https://m.media-amazon.com/images/M/MV5BZjRjOTFjNDctOWU5YS00MmRlLWEwYzItMGZkNTJlMDFkMWM1XkEyXkFqcGc@._V1_.jpg",
      },
    },
    year: 2007,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    id: "28",
    title: "Far from the madding crowed",
    thumbnail: {
      regular: {
        small: "https://image.tmdb.org/t/p/original/n01rjzuE1EBvND7zqjlxz3TV6r6.jpg",
        medium: "https://image.tmdb.org/t/p/original/n01rjzuE1EBvND7zqjlxz3TV6r6.jpg",
        large: "https://image.tmdb.org/t/p/original/n01rjzuE1EBvND7zqjlxz3TV6r6.jpg",
      },
    },
    year: 2015,
    category: "Movie",
    rating: "E",
    isBookmarked: true,
    isTrending: true,
  },
];
