module.exports = {
 showEntireDb
}

function showEntireDb (connection) {
  console.log(connection('videodb'))
  return connection('videodb').select()
}
