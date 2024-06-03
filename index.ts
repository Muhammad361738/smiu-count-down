import inquirer from "inquirer"
import {differenceInSeconds} from "date-fns"
// create variable to take user input
const res = await inquirer.prompt([
    {
        name : "userInput",
        type : "number",
        message:"please Enter the amount of Seconds ",
        validate :(input)=>{
            if (isNaN(input)){
                return "please enter vaild number "
            }else if (input > 60){
                return "second must be in 60"
            }
            else {
                return true;
            }
        }
    }
]);
// make variable to store the input of user
let input = res.userInput;
// create function which change the value in every seconds
function startTime (val : number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)
    const IntervalTime = new Date(intTime)
    setInterval ((()=>{
        const currTime = new Date()
        const timeDiff = differenceInSeconds (IntervalTime ,currTime)
        if (timeDiff <= 0){
            console.log("Time has Expired ")
            process.exit()
        }
        const min = Math.floor((timeDiff % (3600*24))/3600)
        const sec = Math.floor(timeDiff % 60)
        console.log(`${min.toString().padStart(2 , "0")} : ${sec.toString().padStart(2 , "0")}`)


    }),1000)
}  
startTime(input)