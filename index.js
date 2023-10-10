function search() {
    var input = document.getElementById("searchbox").value
    console.log(input)
    window.location.href ="https://google.com/search?q=" + input
}

function funnynum() {
    var nums = []
    var numDiv = document.getElementsByClassName("nums")[0]
    for (let i = 69; i <= 695; i += 0.01) {
        i = Math.round(i * 100)
        var j = i
        j = j.toString()
        if (j.includes("69") || j.includes("420")) {
            nums.push((parseInt(j) / 100).toFixed(2))
            var p = document.createElement("p")
            p.innerHTML = (parseInt(j) / 100).toFixed(2)
            numDiv.appendChild(p)
        }
        i = i / 100
    }
    console.log(nums)
}

var num = 0

function increment() {
    num += 1
    document.getElementById("num").innerHTML = num
}

function negativeIncrement() {
    num -= 1
    document.getElementById("num").innerHTML = num
}

window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")