const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

  if(err){
    return console.log('unable to connect to MongoDB Server');
  }
  console.log("Connected to MongoDB Server");



// db.collection('Todos').findOneAndUpdate({
// _id:new ObjectID("5abaa85e054cbdee0684f3ae")},
// {
// $set:{
//   completed:true
//     }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// })

db.collection('Users').findOneAndUpdate({
_id:new ObjectID("5ab7111195a25a2ebc27efc2")},
{
$set:{
  name:'Sandeep'
},
$inc:{
  age:1
}
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
})




  //db.close();
});
