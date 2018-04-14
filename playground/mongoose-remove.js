const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='5ac188806c7ea4d82dfe69d8';


 Todo.findByIdAndRemove('5ad199ef788095b26f37ebde').then((todo)=>{
   console.log(todo);
 })

Todo.findOneAndRemove({_id:'5ad199ef788095b26f37ebde'}).then((todo)=>{
  console.log(todo);
})
