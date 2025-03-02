let url = "http://universities.hipolabs.com/search?country=India";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log(state);

    let colArr = await getcolleges(state);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = ""; 

    for ( col of colArr) { 
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getcolleges(state) {
    try {
        let res = await axios.get(url);
        return res.data.filter(col => 
            col["state-province"] && col["state-province"].toLowerCase().includes(state)
        ); // Added filtering based on state input
    } catch (e) {
        console.log("error: ", e);
        return [];
    }
}
