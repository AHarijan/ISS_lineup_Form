function lineUpForm(){
    const etaDate = document.getElementById('etadate').value;
    const etaTime = document.getElementById('etatime').value;
    const etbDate = document.getElementById('etbdate').value;
    const etbTime = document.getElementById('etbtime').value;
    const etcDate = document.getElementById('etcdate').value;
    const etcTime = document.getElementById('etctime').value;
    
   const eta = etaDate +" "+ etaTime
   const etb = etbDate +" "+ etbTime
   const etc = etcDate +" "+ etcTime

    if (etb < eta) {
        alert("Vessel cannot berth before Arriving. Please check the Dates and time for ATA and ETB/ATB");
    return false;
    }
    else if (etc < etb) {
        alert("Vessel cannot sail before Berthing. Please check the Dates and time for ATB and ETC/ATC");
    }
    return false;

}

var today = new Date()
const year = today.getFullYear();
const month = today.getMonth() +1;
const day = today.getDate();

const currDate = `${year}-${month}-${day}`;
document.getElementById('currentDate').value=currDate
