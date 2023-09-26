// To show all databases : >show dbs 
// To select a database : >use <database_name>
// To see items of a database : >db.<collection_name>.find()


// SEARCHING DATA in mongodb

// to see all the items in a collection : 
db.items.find()

// to find the items with specific filter, we pass that filter inside the find({filter_Object});
db.items.find({rating:3.5});
db.items.find({rating:{$gte: 3.5}}) //will return all items having rating greter than or equal to 3.5
// AND Operator 
db.items.find({rating: {$gte: 4}, price:{$gte: 10000}})
// OR Operator 
db.items.find({$or:[{rating:{$lt: 4}},{price: {$gte: 10000}}]})
db.items.find({$or:[{price: {$gte:5000}},{price:{$lt:15000}}]})
