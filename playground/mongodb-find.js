const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to conncet to MongoDB Server');
  }

  console.log("connected to MongoDB Server");

// db.collection('Todos').find({
//   _id: new ObjectID('5ab7102a4648b74dd02cc413')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('unable to fetch todos',err);
// });


// db.collection('Todos').find({
//   _id: new ObjectID('5ab7102a4648b74dd02cc413')
// }).count().then((count)=>{
//   console.log(`Todos count: ${count}`);
//
// },(err)=>{
//   console.log('unable to fetch todos',err);
// });

db.collection('Users').find({name:'Sandeep'}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
})



  //db.close();
})
