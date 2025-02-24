function savetoDb(data)
{
    return new Promise ((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4)
        {
            resolve("Success: data was saved");
        }
        else
        {
            reject("failure: weak Connection");
        }
    });
}

savetoDb("apna college")
.then(()=>{
    console.log("promise is resolved");
})
.catch(()=>{
    console.log("promise was rejected");
});