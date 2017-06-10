
exports.up = function(knex, Promise) {
  return knex.schema.createTable('videodb', (table)=>{
    table.increments('id').primary()
    table.string('name')
    table.string('desc')
    table.string('author')
    table.string('url')
    table.string('thumbnail')
    table.integer('greenvote')
    table.integer('redvote')
    table.integer('viewcount')
    table.integer('filesize')
    table.timestamp('created').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('videodb')
};
