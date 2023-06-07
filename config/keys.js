const mongoose = require('mongoose');
const db='mongodb+srv://sardar:42LU2BTZEk0iNaQo@cluster0.yjoc2t7.mongodb.net/habit-tracker?retryWrites=true&w=majority';

const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
};
mongoose.connect(db,connectionparams).then(()=>{console.log('connected to  the database');})
.catch((e)=>{
    console.log('Error:',e);
});