var Enter_MoneyL = parseFloat(Number(document.getElementById('Enter_Money_In').value));
var RoomRentL = parseFloat(Number(document.getElementById('RoomRent').value));
var WifiRentL = parseFloat(Number(document.getElementById('WifiRent').value));
var CellRentL = parseFloat(Number(document.getElementById('CellRent').value));
var ElecRentL = parseFloat(Number(document.getElementById('ElecRent').value));
var OtherMiscL = parseFloat(Number(document.getElementById('OtherMiscRent').value));
var SavingSaveL = parseFloat(Number(document.getElementById('SavingSave').value));
var ResultL = parseFloat(Number(document.getElementById('calcResult').value));

function calcBudget()
{
var Enter_MoneyL = parseFloat(Number(document.getElementById('Enter_Money_In').value));
var RoomRentL = parseFloat(Number(document.getElementById('RoomRent').value));
var WifiRentL = parseFloat(Number(document.getElementById('WifiRent').value));
var CellRentL = parseFloat(Number(document.getElementById('CellRent').value));
var ElecRentL = parseFloat(Number(document.getElementById('ElecRent').value));
var OtherMiscL = parseFloat(Number(document.getElementById('OtherMiscRent').value));
var SavingSaveL = parseFloat(Number(document.getElementById('SavingSave').value));
var ResultL = parseFloat(Number(document.getElementById('calcResult').value));

    if(Enter_MoneyL != NaN){
    document.getElementById('calcResult').value = Enter_MoneyL-RoomRentL-WifiRentL-CellRentL-ElecRentL-OtherMiscL-SavingSaveL;
    }
}

function reset()
{
if(Enter_MoneyL != NaN || RoomRentL != NaN || WifiRentL != NaN || CellRentL != NaN || ElecRentL != NaN || SavingSaveL != NaN)
{
    document.getElementById('Enter_Money_In').value = "";
    document.getElementById('RoomRent').value = "";
    document.getElementById('WifiRent').value = "";
    document.getElementById('CellRent').value = "";
    document.getElementById('ElecRent').value = "";
    document.getElementById('OtherMiscRent').value = "";
    document.getElementById('SavingSave').value = "";
    document.getElementById('calcResult').value = "";
}


}

