//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return  console.log("unable to connect to mongoDB server");
}
console.log('connected to MongoDB Server');

// db.collection('Todos').insertOne({
//   text: 'Somthing to do',
//   completed:false
//
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to insert todo',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });
//
// db.collection('Users').insertOne({
//   name:"Sandeep",
//   age:23,
//   location: "LA"
// },(err,result)=>{
//   if(err){
//     return console.log('Unable to insert User',err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
// });
db.close();
});
