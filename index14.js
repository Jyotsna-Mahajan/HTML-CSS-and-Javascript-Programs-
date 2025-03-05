let btn=document.querySelector("button");
let url="https://v2.jokeapi.dev/joke/Any?safe-mode";

btn.addEventListener("click",async()=>
{
    let joke= await getjokes();
    let p=document.querySelector("#result");
    p.innerText= joke;

});

async function getjokes()
{
    try{
        let res=await axios.get(url);
        return [res.data.setup, res.data.delivery];
        
    }
    catch(e)
    {
        console.log("error - ",e);
        return "No fact found";
    }
}