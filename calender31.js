
let bttn31 = document.querySelector('[data-btn31]')
bttn31.addEventListener('click', () => {

    infocus = day31

    rightbox1.innerText = ""
    rightbox2.innerText = ""
    rightbox3.innerText = ""
    rightbox4.innerText = ""
    rightbox5.innerText = ""
    rightbox6.innerText = ""
    rightbox7.innerText = ""
    rightbox8.innerText = ""
    rightbox9.innerText = ""
    rightbox10.innerText = ""
    rightbox11.innerText = ""
    rightbox12.innerText = ""
    rightbox13.innerText = ""
    rightbox14.innerText = ""
    rightbox15.innerText = ""
    rightbox16.innerText = ""
    rightbox17.innerText = ""
    rightbox18.innerText = ""
    rightbox19.innerText = ""
    rightbox20.innerText = ""

    if (day31.length >= 1) {

        rightbox1.innerText = day31[0]
        rightbox2.innerText = day31[1]
        rightbox3.innerText = day31[2]
        rightbox4.innerText = day31[3]
        rightbox5.innerText = day31[4]
        rightbox6.innerText = day31[5]
        rightbox7.innerText = day31[6]
        rightbox8.innerText = day31[7]
        rightbox9.innerText = day31[8]
        rightbox10.innerText = day31[9]
        rightbox11.innerText = day31[10]
        rightbox12.innerText = day31[11]
        rightbox13.innerText = day31[12]
        rightbox14.innerText = day31[13]
        rightbox15.innerText = day31[14]
        rightbox16.innerText = day31[15]
        rightbox17.innerText = day31[16]
        rightbox18.innerText = day31[17]
        rightbox19.innerText = day31[18]
        rightbox20.innerText = day31[19]
        rightbox21.innerText = day31[20]
        rightbox22.innerText = day31[21]
        rightbox23.innerText = day31[22]
        rightbox24.innerText = day31[23]


        if (rightbox1.innerText === 'undefined') rightbox1.innerText = ""
        if (rightbox2.innerText === 'undefined') rightbox2.innerText = ""
        if (rightbox3.innerText === 'undefined') rightbox3.innerText = ""
        if (rightbox4.innerText === 'undefined') rightbox4.innerText = ""
        if (rightbox5.innerText === 'undefined') rightbox5.innerText = ""
        if (rightbox6.innerText === 'undefined') rightbox6.innerText = ""
        if (rightbox7.innerText === 'undefined') rightbox7.innerText = ""
        if (rightbox8.innerText === 'undefined') rightbox8.innerText = ""
        if (rightbox9.innerText === 'undefined') rightbox9.innerText = ""
        if (rightbox10.innerText === 'undefined') rightbox10.innerText = ""
        if (rightbox11.innerText === 'undefined') rightbox11.innerText = ""
        if (rightbox12.innerText === 'undefined') rightbox12.innerText = ""
        if (rightbox13.innerText === 'undefined') rightbox13.innerText = ""
        if (rightbox14.innerText === 'undefined') rightbox14.innerText = ""
        if (rightbox15.innerText === 'undefined') rightbox15.innerText = ""
        if (rightbox16.innerText === 'undefined') rightbox16.innerText = ""
        if (rightbox17.innerText === 'undefined') rightbox17.innerText = ""
        if (rightbox18.innerText === 'undefined') rightbox18.innerText = ""
        if (rightbox19.innerText === 'undefined') rightbox19.innerText = ""
        if (rightbox20.innerText === 'undefined') rightbox20.innerText = ""
        if (rightbox21.innerText === 'undefined') rightbox21.innerText = ""
        if (rightbox22.innerText === 'undefined') rightbox22.innerText = ""
        if (rightbox23.innerText === 'undefined') rightbox23.innerText = ""
        if (rightbox24.innerText === 'undefined') rightbox24.innerText = ""

    }
})


bttn31.addEventListener('dblclick', () => {

    infocus = day31

    day31counter++

    if (day31counter === 0 && btn31Div1.innerText === "" && rightbox1.innerText === "") {

        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div1.innerText = day31[0]
        rightbox1.innerText = day31[0]
    }

    else if (day31counter === 1 && btn31Div2.innerText === "" && rightbox2.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div2.innerText = day31[day31counter]
        rightbox2.innerText = day31[day31counter]
    }



    else if (day31counter === 2 && btn31Div3.innerText === "" && rightbox3.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div3.innerText = day31[day31counter]
        rightbox3.innerText = day31[day31counter]
    }

    else if (day31counter === 3 && btn31Div4.innerText === "" && rightbox4.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31[day31counter]
        rightbox4.innerText = day31[day31counter]
    }

    else if (day31counter === 4  && rightbox5.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox5.innerText = day31[day31counter]
    }

    else if (day31counter === 5 && rightbox4.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox6.innerText = day31[day31counter]
    }

    else if (day31counter === 6  && rightbox7.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox7.innerText = day31[day31counter]
    }

    else if (day31counter === 7  && rightbox8.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox8.innerText = day31[day31counter]
    }

    else if (day31counter === 8  && rightbox9.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox9.innerText = day31[day31counter]
    }

    
    else if (day31counter === 9  && rightbox10.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox10.innerText = day31[day31counter]
    }


    else if (day31counter === 10  && rightbox11.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox11.innerText = day31[day31counter]
    }

    else if (day31counter === 11  && rightbox12.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox12.innerText = day31[day31counter]
    }
    else if (day31counter === 12  && rightbox13.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox13.innerText = day31[day31counter]
    }
    else if (day31counter === 13  && rightbox14.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox14.innerText = day31[day31counter]
    }
    else if (day31counter === 14 && rightbox15.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox15.innerText = day31[day31counter]
    }

    else if (day31counter === 15 && rightbox16.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox16.innerText = day31[day31counter]
    }
    else if (day31counter === 16 && rightbox17.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox17.innerText = day31[day31counter]
    }
    else if (day31counter === 17 && rightbox18.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox18.innerText = day31[day31counter]
    }
    else if (day31counter === 18 && rightbox19.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox19.innerText = day31[day31counter]
    }
    else if (day31counter === 19 && rightbox20.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox20.innerText = day31[day31counter]
    }
    else if (day31counter === 20 && rightbox21.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox21.innerText = day31[day31counter]
    }
    else if (day31counter === 21 && rightbox22.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox22.innerText = day31[day31counter]
    }
    else if (day31counter === 22 && rightbox23.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox23.innerText = day31[day31counter]
    }
    else if (day31counter === 23 && rightbox24.innerText === "") {
        let prm = prompt("create new appointment")
        day31.push(prm)
        btn31Div4.innerText = day31counter - 2 + " more"
        rightbox24.innerText = day31[day31counter]
    }
})

