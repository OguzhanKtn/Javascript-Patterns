// Factory Pattern

function Factory(){

    this.createEmployee = function(type){

        var employee;

        if(type === "fullTime"){
            employee = new FullTime();
        }else if(type === "partTime"){
            employee = new PartTime();
        }else if(type === "temporary"){
            employee = new Temporary();
        }
        employee.type = type;
        employee.hw = function(){
            console.log(this.type + " hourly wage : " + this.hourly);
        }
        return employee;
    }

}

var FullTime = function(){
    this.hourly = "50$";
}

var PartTime = function(){
    this.hourly = "30$";
}

var Temporary = function(){
    this.hourly = "10$";
}

var factory = new Factory();

var employees = [];

employees.push(factory.createEmployee("fullTime"));
employees.push(factory.createEmployee("partTime"));
employees.push(factory.createEmployee("temporary"));

employees.forEach(element => {
    console.log(element.hw());
});