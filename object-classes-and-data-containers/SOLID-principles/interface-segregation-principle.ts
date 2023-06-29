//General purpose interface
//Should be avoided and use smaller client specific interfaces
// interface Database{
//     connect(uri:string);
//     storeData(data:any);
// }

// class SQLDatabase implements Database{
//     connect(uri: string) {
//         //connecting to db
//     }

//     storeData(data: any) {
//         //storing data...
//     }
// }

// class InMemoryDatabase implements Database{
//     connect(uri: string) {
//         //????
//     }
//     storeData(data: any) {
//         //storing data...
//     }
// }

interface RemoteDatabase{
    connect(uri:string);
}

interface Database{
    storeData(data:any);
}

class SQLDatabase implements RemoteDatabase,Database{
    connect(uri: string) {
        //connecting to db
    }

    storeData(data: any) {
        //storing data...
    }
}

class InMemoryDatabase implements Database{
    storeData(data: any) {
        //storing data...
    }
}