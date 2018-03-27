const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

  if(err){
    return console.log('unable to connect to MongoDB Server');
  }
  console.log("Connected to MongoDB Server");

  // db.collection('Todos').deleteMany({text:' Eat Lunch'}).then((result)=>{
  //   console.log(result);
  //
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //
    //   console.log(result);
    // });


  //db.close();
});
