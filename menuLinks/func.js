const { MongoClient } = require("mongodb");

//MONGODB setup
//const dbUrl = "mongodb://localhost:27017";
//const dbUrl = "mongodb://127.0.0.1:27017/TasteAndFun";
const dbUrl = "mongodb+srv://hiralpatel:1B5mV99tHP6C1rH3@cluster0.xmjgku3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(dbUrl);

app.get("/", async (request, response) => {
    let links = await getAllLinks();
    //console.log(links);
    response.render("index", { title: "Home", menu: links });
});

app.get("/service", async (request, response) => {
let links = await getAllLinks();
response.render("service", {title: "Service", menu: links });
});

app.get("/menu", async (request, response) => {
let links = await getAllLinks();
response.render("menu", {title: "Menu", menu: links });
});

//MONGODB HELPER FUNCTIONS
async function connection() {
    db = client.db("TasteAndFun");
    return db;
}
async function getAllLinks() {
    db = await connection();
    const results = await db.collection("menuLinks").find({});
    resultsArray = await results.toArray();
    console.log(resultsArray);
    return resultsArray;
}
