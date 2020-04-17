// task1

const run1 = () => {
    let i=Number(document.getElementById("valI").value);
  
    let j=Number(document.getElementById("valJ").value);
    
    i=i+j;
    j=i-j;
    i=i-j;
    console.log(i,j);

    document.getElementById("outputVal1").innerHTML = i;

    document.getElementById("outputVal2").innerHTML = j;

  }

  // run1();