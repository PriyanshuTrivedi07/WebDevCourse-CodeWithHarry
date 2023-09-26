// To show all databases : >show dbs 
// To select a database : >use <database_name>
// To see items of a database : >db.<collection_name>.find()


// UPDATING DATA in mongodb

// to see all the items in a collection :
db.items.find()

// we have two methods for updating and both takes two objects, filterObject & value which we want to set: 

// (1.)updateOne() 
// (2.)updateMany()


db.items.updateOne({price:9000},{$set:{price:2}})
db.items.updateMany({name:"Redmi 2a"},{$set:{name: "mi A2",price:2}})


