let bttn29 = document.querySelector('[data-btn29]')
let bttn30 = document.querySelector('[data-btn30]')

bttn29.addEventListener('click', () => {

    infocus = day29

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

    if (day29.length >= 1) {

        rightbox1.innerText = day29[0]
        rightbox2.innerText = day29[1]
        rightbox3.innerText = day29[2]
        rightbox4.innerText = day29[3]
        rightbox5.innerText = day29[4]
        rightbox6.innerText = day29[5]
        rightbox7.innerText = day29[6]
        rightbox8.innerText = day29[7]
        rightbox9.innerText = day29[8]
        rightbox10.innerText = day29[9]
        rightbox11.innerText = day29[10]
        rightbox12.innerText = day29[11]
        rightbox13.innerText = day29[12]
        rightbox14.innerText = day29[13]
        rightbox15.innerText = day29[14]
        rightbox16.innerText = day29[15]
        rightbox17.innerText = day29[16]
        rightbox18.innerText = day29[17]
        rightbox19.innerText = day29[18]
        rightbox20.innerText = day29[19]
        rightbox21.innerText = day29[20]
        rightbox22.innerText = day29[21]
        rightbox23.innerText = day29[22]
        rightbox24.innerText = day29[23]


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


bttn29.addEventListener('dblclick', () => {

    infocus = day29

    day29counter++

    if (day29counter === 0 && btn29Div1.innerText === "" && rightbox1.innerText === "") {

        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div1.innerText = day29[0]
        rightbox1.innerText = day29[0]
    }

    else if (day29counter === 1 && btn29Div2.innerText === "" && rightbox2.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div2.innerText = day29[day29counter]
        rightbox2.innerText = day29[day29counter]
    }



    else if (day29counter === 2 && btn29Div3.innerText === "" && rightbox3.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div3.innerText = day29[day29counter]
        rightbox3.innerText = day29[day29counter]
    }

    else if (day29counter === 3 && btn29Div4.innerText === "" && rightbox4.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29[day29counter]
        rightbox4.innerText = day29[day29counter]
    }

    else if (day29counter === 4  && rightbox5.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox5.innerText = day29[day29counter]
    }

    else if (day29counter === 5 && rightbox4.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox6.innerText = day29[day29counter]
    }

    else if (day29counter === 6  && rightbox7.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox7.innerText = day29[day29counter]
    }

    else if (day29counter === 7  && rightbox8.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox8.innerText = day29[day29counter]
    }

    else if (day29counter === 8  && rightbox9.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox9.innerText = day29[day29counter]
    }

    
    else if (day29counter === 9  && rightbox10.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox10.innerText = day29[day29counter]
    }


    else if (day29counter === 10  && rightbox11.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox11.innerText = day29[day29counter]
    }

    else if (day29counter === 11  && rightbox12.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox12.innerText = day29[day29counter]
    }
    else if (day29counter === 12  && rightbox13.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox13.innerText = day29[day29counter]
    }
    else if (day29counter === 13  && rightbox14.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox14.innerText = day29[day29counter]
    }
    else if (day29counter === 14 && rightbox15.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox15.innerText = day29[day29counter]
    }

    else if (day29counter === 15 && rightbox16.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox16.innerText = day29[day29counter]
    }
    else if (day29counter === 16 && rightbox17.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox17.innerText = day29[day29counter]
    }
    else if (day29counter === 17 && rightbox18.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox18.innerText = day29[day29counter]
    }
    else if (day29counter === 18 && rightbox19.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox19.innerText = day29[day29counter]
    }
    else if (day29counter === 19 && rightbox20.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox20.innerText = day29[day29counter]
    }
    else if (day29counter === 20 && rightbox21.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox21.innerText = day29[day29counter]
    }
    else if (day29counter === 21 && rightbox22.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox22.innerText = day29[day29counter]
    }
    else if (day29counter === 22 && rightbox23.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox23.innerText = day29[day29counter]
    }
    else if (day29counter === 23 && rightbox24.innerText === "") {
        let prm = prompt("create new appointment")
        day29.push(prm)
        btn29Div4.innerText = day29counter - 2 + " more"
        rightbox24.innerText = day29[day29counter]
    }
})




bttn30.addEventListener('click', () => {

    infocus = day30

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

    if (day30.length >= 1) {

        rightbox1.innerText = day30[0]
        rightbox2.innerText = day30[1]
        rightbox3.innerText = day30[2]
        rightbox4.innerText = day30[3]
        rightbox5.innerText = day30[4]
        rightbox6.innerText = day30[5]
        rightbox7.innerText = day30[6]
        rightbox8.innerText = day30[7]
        rightbox9.innerText = day30[8]
        rightbox10.innerText = day30[9]
        rightbox11.innerText = day30[10]
        rightbox12.innerText = day30[11]
        rightbox13.innerText = day30[12]
        rightbox14.innerText = day30[13]
        rightbox15.innerText = day30[14]
        rightbox16.innerText = day30[15]
        rightbox17.innerText = day30[16]
        rightbox18.innerText = day30[17]
        rightbox19.innerText = day30[18]
        rightbox20.innerText = day30[19]
        rightbox21.innerText = day30[20]
        rightbox22.innerText = day30[21]
        rightbox23.innerText = day30[22]
        rightbox24.innerText = day30[23]


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


bttn30.addEventListener('dblclick', () => {

    infocus = day30

    day30counter++

    if (day30counter === 0 && btn30Div1.innerText === "" && rightbox1.innerText === "") {

        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div1.innerText = day30[0]
        rightbox1.innerText = day30[0]
    }

    else if (day30counter === 1 && btn30Div2.innerText === "" && rightbox2.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div2.innerText = day30[day30counter]
        rightbox2.innerText = day30[day30counter]
    }



    else if (day30counter === 2 && btn30Div3.innerText === "" && rightbox3.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div3.innerText = day30[day30counter]
        rightbox3.innerText = day30[day30counter]
    }

    else if (day30counter === 3 && btn30Div4.innerText === "" && rightbox4.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30[day30counter]
        rightbox4.innerText = day30[day30counter]
    }

    else if (day30counter === 4  && rightbox5.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox5.innerText = day30[day30counter]
    }

    else if (day30counter === 5 && rightbox4.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox6.innerText = day30[day30counter]
    }

    else if (day30counter === 6  && rightbox7.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox7.innerText = day30[day30counter]
    }

    else if (day30counter === 7  && rightbox8.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox8.innerText = day30[day30counter]
    }

    else if (day30counter === 8  && rightbox9.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox9.innerText = day30[day30counter]
    }

    
    else if (day30counter === 9  && rightbox10.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox10.innerText = day30[day30counter]
    }


    else if (day30counter === 10  && rightbox11.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox11.innerText = day30[day30counter]
    }

    else if (day30counter === 11  && rightbox12.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox12.innerText = day30[day30counter]
    }
    else if (day30counter === 12  && rightbox13.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox13.innerText = day30[day30counter]
    }
    else if (day30counter === 13  && rightbox14.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox14.innerText = day30[day30counter]
    }
    else if (day30counter === 14 && rightbox15.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox15.innerText = day30[day30counter]
    }

    else if (day30counter === 15 && rightbox16.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox16.innerText = day30[day30counter]
    }
    else if (day30counter === 16 && rightbox17.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox17.innerText = day30[day30counter]
    }
    else if (day30counter === 17 && rightbox18.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox18.innerText = day30[day30counter]
    }
    else if (day30counter === 18 && rightbox19.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox19.innerText = day30[day30counter]
    }
    else if (day30counter === 19 && rightbox20.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox20.innerText = day30[day30counter]
    }
    else if (day30counter === 20 && rightbox21.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox21.innerText = day30[day30counter]
    }
    else if (day30counter === 21 && rightbox22.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox22.innerText = day30[day30counter]
    }
    else if (day30counter === 22 && rightbox23.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox23.innerText = day30[day30counter]
    }
    else if (day30counter === 23 && rightbox24.innerText === "") {
        let prm = prompt("create new appointment")
        day30.push(prm)
        btn30Div4.innerText = day30counter - 2 + " more"
        rightbox24.innerText = day30[day30counter]
    }
})

