const fs =require("fs");
const addNote=(id,name,degree)=>{
     const notes=loadNotes()
     const dublicated=notes.filter((note) =>{
         return note.id === id
     })
    //  console.log(dublicated)
     if(dublicated.length==0){
          let total =0
        degree.forEach(el=>{
             total +=el
        });
       console.log(total);
        notes.push({
            id,
            name,
            degree,
            total
        })
            
        saveNotes(notes)
        console.log("saved")
     }
     else{
         console.log("not saved")
     }
}
const deleteNote=(id)=>{
    const notes=loadNotes()
    const deletedub=notes.filter((note)=>{
        return note.id !== id
    })
    if(notes.length !== deletedub.length){
        saveNotes(deletedub)
        console.log(deletedub)
        console.log("removed")
    }
    else{
        console.log("not removed")
    }
    
}
const readNote=(id)=>{
    const notes=loadNotes()
    const readdublic=notes.filter((note)=>{

        return note.id === id
    })
    if(readdublic.length !==0 ){
    console.log(readdublic)
    }
    else{
        console.log("not found")
    }
}
const listNote=()=>{
    const notes=loadNotes()
    console.log(notes)
}
const loadNotes=()=>{
    try{
        const databuffer=fs.readFileSync('student.json').toString()
        // console.log(databuffer)
        return JSON.parse(databuffer)  ///object
    }
    catch(e){
        return []
    }
}
const  saveNotes=(notes)=>{
    const userobject=JSON.stringify(notes)
    fs.writeFileSync('student.json',userobject)
}
module.exports={
    addNote,
    deleteNote,
    readNote,
    listNote
}
