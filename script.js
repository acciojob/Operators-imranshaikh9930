//your JS code here. If required.
 document.getElementById("calculate").addEventListener("click", function () {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let operator = document.getElementById("operator").value;
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                result = "Enter valid numbers!";
            } else {
                switch (operator) {
                    case "+": result = num1 + num2; break;
                    case "-": result = num1 - num2; break;
                    case "*": result = num1 * num2; break;
                    case "/": result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by 0"; break;
                    default: result = "Invalid operation!";
                }
            }

            document.getElementById("result").innerText = result;
        });

        // Function for changing text
        document.getElementById("change_text").addEventListener("click", function () {
            let newText = ["Bye", "Good Bye", "To", "Your", "Class"];
            let divs = document.querySelectorAll(".division");

            divs.forEach((div, index) => {
                div.textContent = newText[index];
            });
        });