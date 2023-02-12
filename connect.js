const { MongoClient } = require("mongodb")

module.exports = {
    selectedDb: {},
    async connect() {
        try {
            const client = await MongoClient.connect(process.env.MONGODB_URL);
            this.selectedDb = client.db("Datacollection");
            console.log(this.selectedDb);
            console.log("DB-connected");
        } catch (err){
            console.error(err);
        }
    },
    // async connectMongoose(){
    //     try {
    //         await mongoose.connect(process.env.MONGOOSE_URL)
    //         console.log('connection success');
    //     } catch(err) {
    //         console.error(err);
    //     }
    // }
};