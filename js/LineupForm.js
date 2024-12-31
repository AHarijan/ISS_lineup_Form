var today = new Date()
const year = today.getFullYear();
const month = today.getMonth() +1;
const day = today.getDate();

const currDate = `${year}-${month}-${day}`;
document.getElementById('currentDate').value=currDate;


function lineUpForm(){
    const etaDate = document.getElementById('etadate').value;
    const etaTime = document.getElementById('etatime').value;
    const etbDate = document.getElementById('etbdate').value;
    const etbTime = document.getElementById('etbtime').value;
    const etcDate = document.getElementById('etcdate').value;
    const etcTime = document.getElementById('etctime').value;
    const lastport = document.getElementById('lastport').value
    const nextport = document.getElementById('nextport').value
    const agent = document.getElementById('agent').value
    const CurrentStatus = document.getElementById('CurrStatus').value;

    const eta = etaDate + " " + etaTime;
    const etb = etbDate + " " + etbTime;
    const etc = etcDate + " " + etcTime;

    let etaDateTime = eta.trim();
    let etbDateTime = etb.trim();
    let etcDateTime = etc.trim();

    let currDate = new Date();
    let etaDateTimeObj = new Date(etaDateTime);
    let etbDateTimeObj = new Date(etbDateTime);
    let etcDateTimeObj = new Date(etcDateTime);

    if (CurrentStatus === CurrentStatus.trim() !== "") {
        alert("Please fill in the form, select the current status and SUBMIT again");
        return false;
    }
    else if (CurrentStatus === "Expected") {
        let etaNotNull = !etaDate;
        let date_currD = etaDateTimeObj < currDate;
        if (date_currD || etaNotNull) {
            alert(`When the vessel is ${CurrentStatus}:
            Arrival Date cannot be blank
            ETA cannot be a past date`);
            return false;
        }
    } else if (CurrentStatus === "Arrived") {
        let ataNotBlank_A = !etaDateTime.includes(" ");
        let etbNotNull = !etbDate;
        let ata_etb = etaDateTimeObj > etbDateTimeObj;
        if (ataNotBlank_A || etbNotNull || ata_etb) {
            alert(`When the vessel is ${CurrentStatus}: 
            Arrival Date & Time cannot be blank or future date. 
            Berthing Date cannot be blank or before ETA.`); 
            return false;
        }
    } else if (CurrentStatus === "At Berth") {
        let ataNotNull_B  = !etaDate;
        let etbNotNull_B = !etbDate;
        let etcNotNull = !etcDate;
        let ataNotBlank_B = !etaDateTime.includes(" ");
        let atbNotBlank_B = !etbDateTime.includes(" ");
        let ata_etb_B = etaDateTimeObj > etbDateTimeObj;
        let atb_etc = etbDateTimeObj > etcDateTimeObj;
        if (ataNotNull_B || etbNotNull_B || etcNotNull || ataNotBlank_B || atbNotBlank_B || atb_etc || ata_etb_B) {
            alert(`When the vessel is ${CurrentStatus}: 
            Arrival Date & Time cannot be blank or future date. 
            Berthing Date & Time cannot be blank or before Arrival Date.
            Depature Date cannot be blank or before Berthing Date`); 
            return false;
        }
    } else if (CurrentStatus === "Sailed") {
        let ataNotNull_B  = !etaDate;
        let etbNotNull_B = !etbDate;
        let etcNotNull = !etcDate;
        let ataNotBlank_B = !etaDateTime.includes(" ");
        let atbNotBlank_B = !etbDateTime.includes(" ");
        let atcNotBlank_B = !etcDateTime.includes(" ");
        let ata_etb_B = etaDateTimeObj > etbDateTimeObj;
        let atb_etc = etbDateTimeObj > etcDateTimeObj;
        let lastportF = lastport.trim() !== "";
        let nextportF = nextport.trim() !== "";
        let agentF = agent.trim() !== "";
        if (ataNotNull_B || etbNotNull_B || etcNotNull || ataNotBlank_B || atbNotBlank_B || atcNotBlank_B || atb_etc || ata_etb_B || !lastportF || !nextportF || !agentF) {
            alert(`When the vessel is ${CurrentStatus}: 
            Arrival Date & Time cannot be blank or future date. 
            Berthing Date & Time cannot be blank or before Arrival Date.
            Depature Date & Time cannot be blank or before Berthing Date
            Last Port cannot be blank
            Next Port cannot be blank
            Agent cannot be blank`); 
            return false;
        }
    } 
    
    // else if (CurrentStatus === "Sailed") {
    //     let ataNotNull_B  = !etaDate;
    //     let etbNotNull_B = !etbDate;
    //     let etcNotNull = !etcDate;
    //     let ataNotBlank_B = etaDateTime.trim() === "";  // Corrected condition for blank value
    //     let atbNotBlank_B = etbDateTime.trim() === "";  // Corrected condition for blank value
    //     let atcNotBlank_B = etcDateTime.trim() === "";  // Corrected condition for blank value
    //     let ata_etb_B = etaDateTimeObj > etbDateTimeObj;
    //     let atb_etc = etbDateTimeObj > etcDateTimeObj;
    //     let lastPortFilled = lastport.trim() !== "";
    //     let nextPortFilled = nextport.trim() !== "";
    //     let agentFilled = agent.trim() !== "";
    
    //     if (ataNotNull_B || etbNotNull_B || etcNotNull || ataNotBlank_B || atbNotBlank_B || atcNotBlank_B || atb_etc || ata_etb_B || !lastPortFilled || !nextPortFilled || !agentFilled) {
    //         alert(`When the vessel is ${CurrentStatus}: 
    //         Arrival Date & Time cannot be blank or future date. 
    //         Berthing Date & Time cannot be blank or before Arrival Date.
    //         Departure Date & Time cannot be blank or before Berthing Date.
    //         Last Port cannot be blank.
    //         Next Port cannot be blank.
    //         Agent cannot be blank.`); 
    //         return false;
    //     }
    // }
    
    
}
