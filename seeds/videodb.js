
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videodb').del()
    .then(function () {
      // Inserts seed entries
      return knex('videodb').insert([
        {id: 1,
        name: "3D Animated City",
        desc: "Test Video, Does It Work?",
        author: "A-Frame",
        url: "https://ucarecdn.com/bcece0a8-86ce-460e-856b-40dac4875f15/",
        thumbnail: "http://i.imgur.com/KOLdQT4.png",
        greenvote: "0",
        redvote: "0",
        viewcount: "0",
        filesize: "10205"}
      ]);
    });
};
