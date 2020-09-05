exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(() => {
      return knex("categories").del();
    })
    .then(function () {
      return knex("categories").insert([
        { category_name: "Outdoors" },
        { category_name: "Tech" },
        { category_name: "Family" },
        { category_name: "Health & Wellness" },
        { category_name: "Sports & Fitness" },
        { category_name: "Learning" },
        { category_name: "Photography" },
        { category_name: "Food & Drink" },
        { category_name: "Writing" },
        { category_name: "Language & Culture" },
        { category_name: "Music" },
        { category_name: "Movements" },
        { category_name: "LGBTQ" },
        { category_name: "Film" },
        { category_name: "Sci-Fi & Games" },
        { category_name: "Beliefs" },
        { category_name: "Arts" },
        { category_name: "Book Clubs" },
        { category_name: "Dance" },
        { category_name: "Pets" },
        { category_name: "Hobbies & Crafts" },
        { category_name: "Fashion & Beauty" },
        { category_name: "Social" },
        { category_name: "Career & Business" },
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
    })
    .then((categories, users) => {
      return knex("groups").insert([
        {
          user_id: 1, // Alex
          category_id: 1,
          group_name: "626 Boba Friends",
        },
      ]);
    });
};
