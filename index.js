// Calculator

const inputDisplay = document.getElementById("display");

function appendToDisplay(inputDisplay)
{
    display.value += inputDisplay;
}

function clearDisplay()
{
    display.value = "0";
}

function calculate()
{
    try
    {
        display.value = eval(display.value);
    } catch (error)
    {
        display.value = "Error";
    }
}