inputString.value = "";
inputWord.value = "";
nums.innerText ="";
explain.innerText = ""; 

function go() {
    let count =0;
    let res = [];
    str = inputString.value;
    if (str === "" || inputWord === "") { 
        window.alert("Incorrect input!"); 
        return; 
    }

    let n = str.length;
    let wordLen = inputWord.length;
    srtWord = Word.split("").sort().join("");
 
    for (let i = 0; i < n - wordLen + 1; ++i) { 
        let sub = str 
            .slice(i, i + wordLen) 
            .split("") 
            .sort() 
            .join(""); 
        if (sub === srtWord) { 
            count += 1; 
            res.push("'" + str.slice(i, i + wordLen) + "'"); 
        } 
    } 
    let explainres;
    if (count === 0) explain = "none";
    else explainres = res.join(",");

    nums.innerText =
        "Input string contains " + count + " Anagrams.";
    explain.innerText =
        "Anagrams of the word '" + inputWord + "' are: " + explainres;
}