document.addEventListener('DOMContentLoaded', function () {
    let inpDuration = document.getElementById("inp-duration");
    let inpDecrement = document.getElementById("inp-decrement");

    let btnStart = document.getElementById("btn-start");
    let btnReset = document.getElementById("btn-reset");
  
    let remainingTime = document.getElementById("remaining-time");
 
    // your implementation
  inpDuration.focus();
  remainingTime.innerHTML = "";
  
  btnStart.addEventListener("click", function(){
    if(inpDuration.value.length != 0 && inpDecrement.value.length != 0){
      decrement('true');
    }else{
    inpDuration.focus();
    }
  });
  
  //important variables
  let i = 1000;
  let ii = 0.001;
  
  function r(){
    let a = inpDuration.value;
    return a/ii;
  }
  
  c = r;
  
  function decrement(t){
    let b = inpDecrement.value;
     
    inpDuration.disabled = t;
    inpDecrement.disabled = t;
    btnStart.disabled = t;
    c = r();
    timer();
  }
  
  function timer(){
      b = inpDecrement.value;
      s = setTimeout(timer, b);
      remainingTime.innerHTML = `It stays ${c} milliseconds`;
    if(c>0){
        c-=b;
    }else{
        clearTimeout(s);
    }
  }
  
  btnReset.addEventListener("click",function(){
      clearTimeout(s);
      location.reload();
  });
});