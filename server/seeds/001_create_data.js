exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(() => {
      return knex("categories").del();
    })
    .then(function () {
      return knex("categories").insert([
        {
          category_name: "Outdoors",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693775/wut-group/outdoors.jpg",
        },
        {
          category_name: "Tech",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693778/wut-group/tech.jpg",
        },
        {
          category_name: "Family",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693767/wut-group/family.jpg",
        },
        {
          category_name: "Health & Wellness",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693768/wut-group/health-and-wellness.jpg",
        },
        {
          category_name: "Sports & Fitness",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693780/wut-group/sports.jpg",
        },
        {
          category_name: "Learning",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693772/wut-group/learning.jpg",
        },
        {
          category_name: "Photography",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693781/wut-group/photography.jpg",
        },
        {
          category_name: "Food & Drink",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693771/wut-group/food-and-drink.jpg",
        },
        {
          category_name: "Writing",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693779/wut-group/writing.jpg",
        },
        {
          category_name: "Language & Culture",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693770/wut-group/language-and-culture.jpg",
        },
        {
          category_name: "Music",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693777/wut-group/music.jpg",
        },
        {
          category_name: "Movements",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693777/wut-group/movements.jpg",
        },
        {
          category_name: "LGBTQ",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693770/wut-group/lgbtq.jpg",
        },
        {
          category_name: "Film",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693768/wut-group/film.jpg",
        },
        {
          category_name: "Sci-Fi & Games",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400,a_-90/v1599693779/wut-group/sci-fi-and-games.jpg",
        },
        {
          category_name: "Beliefs",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693769/wut-group/beliefs.jpg",
        },
        {
          category_name: "Arts",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693766/wut-group/art.jpg",
        },
        {
          category_name: "Book Clubs",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693767/wut-group/books.jpg",
        },
        {
          category_name: "Dance",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693768/wut-group/dance.jpg",
        },
        {
          category_name: "Pets",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693779/wut-group/pets.jpg",
        },
        {
          category_name: "Hobbies & Crafts",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693771/wut-group/hobbies-and-crafts.jpg",
        },
        {
          category_name: "Fashion & Beauty",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693771/wut-group/fashion.jpg",
        },
        {
          category_name: "Social",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693779/wut-group/social.jpg",
        },
        {
          category_name: "Career & Business",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/w_800,h_400/v1599693767/wut-group/career.jpg",
        },
      ]);
    })
    .then(function () {
      return knex("users").insert([
        {
          first_name: "Alex",
          last_name: "An",
          email: "alex@email.com",
          password: "password",
          age: 27,
        },
        {
          first_name: "Frodo",
          last_name: "Baggins",
          email: "frodo@email.com",
          password: "password",
          age: 42,
        },
        {
          first_name: "Bilbo",
          last_name: "Baggins",
          email: "bilbo@email.com",
          password: "password",
          age: 85,
        },
      ]);
    });
};
