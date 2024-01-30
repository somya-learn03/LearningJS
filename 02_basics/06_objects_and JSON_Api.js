const course = {
    coursename : "React" ,
    price : 990 ,
    courseDuration : "1 month" ,
    courseInstructor : "coffee aur code"
}

//course.courseInstructor

const {courseDuration : time} = course //this is called destructuring the object.It is very useful in React.
console.log(time)

