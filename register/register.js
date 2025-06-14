document.addEventListener("DOMContentLoaded", function () {

    const addParticipant = document.getElementById("add");
    const submitButton = document.getElementById("submitButton");


    addParticipant.addEventListener("click", function () {
        let participantCount = countParticipants() + 1;

        participantTemplate(participantCount);
        
    });
    
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        successMessage = buildInfo()
        successTemplate(successMessage);
    })




});


function countParticipants() {
  return document.querySelectorAll(".participant").length;
}


function participantTemplate(count) {
    addParticipant.insertAdjacentHTML("beforebegin", 
        `<section class="participant">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname" required>
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity">
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee">
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date">
        </div>
        <div class="item">
            <p>Grade</p>
            <select>
                    <option selected="selected" value="" disabled="disabled"></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
            </select>
        </div>
    </section>`);
}


function submitForm(event) {
    event.preventDefault();
    totalFees();
}


function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
    const feeTotal = feeElements.reduce((acc, fee) => acc + (Number(fee.value) || 0), 0);

    return feeTotal;
}


function buildInfo() {
    const name = document.getElementById("adult_name").value;
    const participantCount = document.querySelectorAll("input[id^=fname]").length;
    
    return `Thank you ${name} for registering. You have registered ${participantCount} participant${participantCount !== 1 ? "s" : ""} and owe $${totalFees()} in Fees.`;
}


function successTemplate(info) {
    const form = document.querySelector("form");
    form.classList.add('hide')
    document.getElementById("summary").insertAdjacentHTML("beforeend", `<p>${info}</p>`);
 
}