//SRP violation
class ReportDocument{
    //more generic like pollng in data and processing more technical
    generateReport(data:any){ }
    //things about layout no. of pages etc. presentational logic
    createPdf(data:any){}
}

//Not violating SRP
class User{
    login(email:string,password:string){}
    signup(email:string,password:string){}
    assignRole(role:any){}
}