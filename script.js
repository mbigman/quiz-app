// var submitButton = document.querySelector('#submit')
// console.log(submitButton)
// submitButton.addEventListener("click", showResults);
// console.log(q1)
 var q = document.querySelectorAll('.gender')
    // console.log(q)

function showResults(){
    var answer = document.querySelector('#answer')
    // var q = document.getElementsByName('gender')
    console.log(q)

//     // var a2 = document.getElementsByName('q2');
//   for(var i = 0; i < q.length; i++) {
//       if(q[i].checked) {
//          console.log(q[i]);
//          answer.innerHTML=(q[i].value)
//          console.log(answer)
//          return q[i]
//       }
//   }

    /* ALTERNATIVE WITH FOR EACH*/
    q.forEach(item => {
        if(item.checked){
            answer.innerHTML = item.value
        }
    })
    
}