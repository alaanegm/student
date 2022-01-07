
const yargs=require("yargs");
const notes=require('./notes');
yargs.command({
    command:"add",
    builder:{
         id:{
              descripe:"add student ID",
              demandOption:true,
              type:"number"
         },
         name:{
            descripe:"add student Name",
            demandOption:false,
            type:"string"
         },
         degree:{
            descripe:"add  student degrees",
            demandOption:false,
            type:"array"
         }

    },
    descripe:"add student",
    handler:(x)=>{
  // console.log("add notes")
  notes.addNote(x.id,x.name,x.degree)
    }
})
yargs.command({
    command:"delete",
    descripe:"delete students",
    builder:{
        id:{
             descripe:" delete student",
             demandOption:true,
             type:"number"
        },
   },
    handler:(x)=>{
       notes.deleteNote(x.id)
    }
})
yargs.command({
    command:"list",
    descripe:"list student",
    handler:(x)=>{
     notes.listNote()
    }
})
yargs.command({
    command:"read",
    descripe:"read students",
    builder:{
        id:{
             descripe:"read stundent",
             demandOption:true,
             type:"number"
        }
   },
    handler:(x)=>{
  // console.log("read notes")
      notes.readNote(x.id)
    }
})
yargs.parse();
//////////////////////////////////////////////
