dbData = {
    name:"aswin",
    password:"aswin123"
}

// let response = {}

module.exports = {
    doLoginIn:(userData)=>{
        console.log(userData);
        
        return new Promise((resolve,reject)=>{
            if(userData.user === dbData.name){
                if(userData.password === dbData.password){
                    resolve(userData.user)
                    // response.status = true;
                    // response.user = userData.name
                }else{
                    reject("password incorrect!");
                //     response.status = false;
                //     response.err = "password is incorrect"
                } 
            }else{
                reject("username is incorrect!");
            }
        })
    }
}