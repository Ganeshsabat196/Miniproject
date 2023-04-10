import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/style2.css'


const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=400";
let quote = "";
let time = 180;
let timer = "";
let mistakes = 0;
let oTime=180


export default function Mp2() {
    const navigate = useNavigate();

    //Display random quotes
    const renderNewQuote = async () => {

        const quoteSection = document.getElementById("quote");
        //Fetch contents from url
        const response = await fetch(quoteApiUrl);

        //Store response
        let data = await response.json();

        //Access quote
        quote = data.content;

        //Array of characters in the quote
        let arr = quote.split("").map((value) => {
            //wrap the characters in a span tag
            return "<span class='quote-chars'>" + value + "</span>";
        });
        //join array for displaying
        quoteSection.innerHTML += arr.join("");
    };

    //Logic for comparing input words with quote
    const userInp = () => {
        const userInput = document.getElementById("quote-input");

        let quoteChars = document.querySelectorAll(".quote-chars");
        // console.log(quoteChars);
        //Create an arrat from received span tags
        quoteChars = Array.from(quoteChars);

        //array of user input characters
        let userInputChars = userInput.value.split("");

        //loop through each character in quote
        quoteChars.forEach((char, index) => {
            //Check if char(quote character) = userInputChars[index](input character)
            if (char.innerText == userInputChars[index]) {
                char.classList.add("success");
            }
            //If user hasn't entered anything or backspaced
            else if (userInputChars[index] == null) {
                //Remove class if any
                if (char.classList.contains("success")) {
                    char.classList.remove("success");
                } else {
                    char.classList.remove("fail");
                }
            }
            //If user enter wrong character
            else {
                //Checks if we alreasy have added fail class
                if (!char.classList.contains("fail")) {
                    //increment and display mistakes
                    mistakes += 1;
                    char.classList.add("fail");
                }
                document.getElementById("mistakes").innerText = mistakes;
            }
            //Returns true if all the characters are entered correctly
            let check = quoteChars.every((element) => {
                return element.classList.contains("success");
            });
            //End test if all characters are correct
            if (check) {
                displayResult();
            }
        });
    }

    const updateTimer = () => {
        if (time == 0) {
            //End test if timer reaches 0
            displayResult();
        } else {
            document.getElementById("timer").innerText = --time + "s";
        }
    }

    //Sets timer
    const timeReduce = () => {
        time = 180;
        timer = setInterval(updateTimer, 1000);
    };

    window.onload = () => {
        const userInput = document.getElementById("quote-input");

        userInput.value = "";
        document.getElementById("start-test").style.display = "block";
        document.getElementById("stop-test").style.display = "none";
        userInput.disabled = true;
        renderNewQuote()
    };

    useEffect(()=>{
        const userInput = document.getElementById("quote-input");
        userInput.value = "";
        document.getElementById("start-test").style.display = "block";
        document.getElementById("stop-test").style.display = "none";
        userInput.disabled = true;
        renderNewQuote();
    },[])

    //Start Test
    const startTest = () => {
        const userInput = document.getElementById("quote-input");

        mistakes = 0;
        timer = "";
        userInput.disabled = false;
        timeReduce();
        document.getElementById("start-test").style.display = "none";
        document.getElementById("stop-test").style.display = "block";
    };

    // passing value via props 
    const pass=(data1,data2)=>{
        navigate('/result', { state: {data1,data2} });
    }


    // End test 

    const displayResult = () => {
        const userInput = document.getElementById("quote-input");

        //display result div
        document.querySelector(".result").style.display = "block";
        clearInterval(timer);
        document.getElementById("stop-test").style.display = "none";
        userInput.disabled = true;
        let timeTaken = 1;
        if (time != 0) {
            timeTaken = (oTime - time) / 100;
        }
        document.getElementById("wpm").innerText =
            (userInput.value.length / 5 / timeTaken).toFixed(2) + " wpm";
        document.getElementById("accuracy").innerText =
            Math.round(
                ((userInput.value.length - mistakes) / userInput.value.length) * 100
            ) + " %";

                pass(document.getElementById("wpm").innerText,document.getElementById("accuracy").innerText)
    };

    return (
        <div className="container1">
            <div className="stats">
                <p>
                    Time: <span id="timer">0s</span>
                </p>
                <p>
                    Mistakes: <span id="mistakes">0</span>
                </p>
            </div>
            <div id="quote"
            // onMouseDown={return false} 
            // onselectstart="return false"
            style={{marginTop:"21px"}}
            ></div>

            <textarea
                rows={3}
                id="quote-input"
                placeholder="Type here when the test starts.."
                defaultValue={""}
                onInput={userInp}
                style={{ border: "2px solid black" }}
            />
            <button id="start-test"
                onClick={startTest}
            >
                Start Test
            </button>
            <button id="stop-test"
                onClick={displayResult}
            >
                Stop Test
            </button>
            <div className="result">
                <h3>Result</h3>
                <div className="wrapper">
                    <p>
                        Accuracy: <span id="accuracy" />
                    </p>
                    <p>
                        Speed: <span id="wpm" />
                    </p>
                </div>
            </div>
        </div>

    )
}
