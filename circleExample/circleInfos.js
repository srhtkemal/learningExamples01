const {circleArea,circleCircumference}= require('./circleCalculate')


function showCircleInfos(r){
    console.log(`Circle Area: ${circleArea(r)}
                 Circle Circumference: ${circleCircumference(r)}`)
}


showCircleInfos(5)