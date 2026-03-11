
function calculateTip(){

    let billAmount = Number(document.getElementById("bill").value);
    let tipPercent = Number(document.getElementById("tip").value);
    let persons = Number(document.getElementById("person").value);

    if(persons <= 0){
        alert("Enter valid number of persons");
        return;
    }

    let tipAmount = (billAmount * tipPercent) / 100;
    let totalAmount = billAmount + tipAmount;
    let perPerson = totalAmount / persons;

    document.getElementById("total").innerText = perPerson.toFixed(2);
}