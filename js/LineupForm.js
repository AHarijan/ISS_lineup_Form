function lineUpForm(){
    const etaDate = document.getElementById('etadate').value;
    const etaTime = document.getElementById('etatime').value;
    const etbDate = document.getElementById('etbdate').value;
    const etbTime = document.getElementById('etbtime').value;
    
   const eta = etaDate +" "+ etaTime
   const etb = etbDate +" "+ etbTime

    console.log(etaDate)
    console.log(etaTime) 
    console.log(etbDate) 
    console.log(etbTime)  
    console.log(eta)
    console.log(etb)

    if (etb < eta) {
        // document.getElementById("error").textContent = "ETA cannot be greater that ETB"
        alert("ETA cannot be greater that ETB")
    }

    return false;



}

// var today = new Date()
// const year = today.getFullYear();
// const month = today.getMonth() +1;
// const day = today.getDate();

// const currDate = `${year}-${month}-${day}`;
// document.getElementById('currentDate').value=currDate
