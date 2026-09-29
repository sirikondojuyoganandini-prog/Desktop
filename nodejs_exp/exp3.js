let student_details={"name":"akhila",
    "skills":["c","python"],
    "address":{"city":"CSE","state":"TN"}
}
console.log(student_details)

console.log(student_details["name"]);  // blocking code 
        //  it will through an error if key is not available or match stop execution  
console.log(student_details.name); // non-blocking code 
// it will wont show error insrtead it will display null not stop execution
console.log(student_details.skills[1]); //python
console.log(student_details.address.state);