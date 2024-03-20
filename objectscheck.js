function isEmptyObject(obj) {
    for(let key in obj) {
    if(obj.hasOwnProperty(key))
    return false;
    }
    return true;
    }
    let obj1 = {};
    console.log(isEmptyObject(obj1)); 
    
    let obj2 = { key: 'value' };
    console.log(isEmptyObject(obj2)); 