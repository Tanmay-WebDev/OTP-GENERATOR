function OTP(){
    let otp = "" ; 
    otp = Math.floor(Math.random()*9000 + 1000); //For Four Digit OTP
    return otp;
}

console.log("Your OTP is :",OTP());