
// To show all databases : >show dbs 
// To select a database : >use <database_name>
// To see items of a database : >db.items.find()


// INSERTING DATA in mongodb

// To insert one item : (items -> is a collection name)
db.items.insertOne({name:"Samsung m12",price: 12000, rating: 4.5, qty:232,})

// To insert many item : 
db.items.insertMany([
    {name:"Samsung m12",price: 12000, rating: 4.5, qty:232,sold:342},
    {name:"Samsung 10s",price: 22000, rating: 4.1, qty:321,sold:543},
    {name:"Redmi 2a",price: 9000, rating: 3.7, qty:111,sold:423}
    ])

