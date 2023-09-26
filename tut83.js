// To show all databases : >show dbs 
// To select a database : >use <database_name>
// To see items of a database : >db.<collection_name>.find()


// DELETING DATA in mongodb
// delete is works almost same as searching
// to see all the items in a collection : 
db.items.find()

// to delete the specific items, we pass that filter inside the deleteOne({filter_Object})/deleteMany({filter_Object});
db.items.deleteOne({name:"Samsung m12"}); //delete first matching items in case of many same items
db.items.deleteMany({name:"Samsung m12"}); //will delete all items having name = "Samsung m12"
// AND Operator 
db.items.deleteOne({rating: {$gte: 4}, price:{$gte: 10000}})
// OR Operator 
db.items.deleteOne({$or:[{rating:{$lt: 4}},{price: {$gte: 10000}}]})
db.items.deleteOne({$or:[{price: {$gte:5000}},{price:{$lt:15000}}]})
