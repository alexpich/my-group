exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id");
      table.string("first_name", 45).notNullable();
      table.string("last_name", 45).notNullable();
      table.string("email", 45).notNullable();
      table.string("password", 100).notNullable();
      table.integer("age");
      table.string("image");
      table.timestamps(false, true);
    })
    .createTable("categories", (table) => {
      table.increments("id");
      table.string("category_name", 45).notNullable();
      table.string("image_url");
      table.timestamps(false, true);
    })
    .createTable("groups", (table) => {
      table.increments("id");
      table.string("group_name", 45).notNullable();
      table.string("image_url");
      table.integer("category_id").unsigned().notNullable();
      table.integer("user_id").unsigned().notNullable(); // group owner
      table.timestamps(false, true);

      // Set foreign key
      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table
        .foreign("category_id")
        .references("id")
        .inTable("categories")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("groups")
    .dropTableIfExists("categories")
    .dropTableIfExists("users");
};
