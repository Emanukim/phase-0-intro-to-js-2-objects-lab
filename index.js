const employee = {
    name:"kim",
    streetAddress:"nairobi",
};

function updateEmployeeWithKeyAndValue(employee,key,value){
      const newEmployee = {...employee};
       newEmployee[key] = value;
        return newEmployee; 
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
       employee[key] = value;
       return employee;

};

function deleteFromEmployeeByKey(employee,key){
    const newEmployee = updateEmployeeWithKeyAndValue(employee,key);
    delete newEmployee.key;
    return newEmployee;


};

function destructivelyDeleteFromEmployeeByKey(employee,key){
    const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,key);
    delete newEmployee.key;
    return newEmployee;

};
