const jwt=require('jsonwebtoken')
const generateAuthToken=function(data){
    data=JSON.stringify(data)
 const token=jwt.sign(data,'DHFHUWRIFUWINIWEUFHENIJWEIHFIWEHFIEHFIW')
 return token

}
module.exports=generateAuthToken