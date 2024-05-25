function cloneObject(obj) {
   
    if (typeof obj !== 'object' || obj === null) {
        return obj; 
    }
    const clonedObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
           
            clonedObj[key] = cloneObject(obj[key]);
        }
    }

    return clonedObj;
}


const originalObject = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const clonedObject = cloneObject(originalObject);

console.log(clonedObject); 
console.log(clonedObject === originalObject); 
