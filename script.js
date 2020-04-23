
var playtrain =  "train"
var train = document.getElementsByClassName("train")[0]
var play = document.getElementsByClassName("play")[0]
play.style.opacity = 0
var scroll = document.getElementsByClassName("scroll")[0]
document.getElementById("playtrain").addEventListener("mousedown",function(){
    if(playtrain == "play"){
        document.getElementById("playtrain").style.background = "linear-gradient(40deg,#00bf82,#0099ae)"
        scroll.style.transform = "translateX(0px)"
        playtrain = "train"
        train.style.opacity = 1
        play.style.opacity = 0
    }
    else{
        document.getElementById("playtrain").style.background ="linear-gradient(40deg,#ffd86f,#fc6262)"
        train.style.opacity = 0
        play.style.opacity = 1
        scroll.style.transform = "translateX(80px)"
        playtrain = "play"
    }
    activeLogo()
},false)

class card {
    constructor (playtrain, img, audiofile, word, translate){
        let card = document.createElement('div')
        card.className = "card"
        let front = document.createElement('div')
        front.className = "front"
        let back = document.createElement('div')
        back.className = "back"
        front.style.backgroundImage = "url('img/"+img+".jpg')"
        back.style.backgroundImage = "url('img/"+img+".jpg')"
        if(playtrain == "train"){
            let cardheaderback = document.createElement('div')
            cardheaderback.className = "cardheader"
            let cardheaderfront = document.createElement('div')
            cardheaderfront.className = "cardheader"
            cardheaderfront.innerHTML = word
            front.appendChild(cardheaderfront)
            cardheaderback.innerHTML = translate
            back.appendChild(cardheaderback)
            let audio = new Audio(audiofile)
            card.className = "card train"
            card.addEventListener("mousedown",function(){
                audio.play()
            })
        }
        else{
            card.audiofile = new Audio(audiofile)

        }

        card.appendChild(front)
        card.appendChild(back)

        document.getElementsByClassName("container")[0].appendChild(card)
    }
}

class category{
    constructor(playtrain,img,word,func){
        let category = document.createElement('div')
        category.className = "category"
        let categoryImg = document.createElement('div')
        categoryImg.className = "categoryimg"
        let categoryState = document.createElement('div')
        categoryState.className = "categoryState" 
        let categotyHeader = document.createElement('div')
        categotyHeader.className = "categotyHeader"
        categotyHeader.innerHTML = word
        if(playtrain == "play"){
            categoryState.style.background = "linear-gradient(40deg,#ffd86f,#fc6262)"
        }
        else{
            categoryState.style.background = "linear-gradient(40deg,#00bf82,#0099ae)"
        }
        categoryImg.style.backgroundImage = "url('img/"+img+".jpg')"
        category.appendChild(categoryImg)
        category.appendChild(categoryState)
        category.appendChild(categotyHeader)
        category.addEventListener("mousedown",func)
        document.getElementsByClassName("container")[0].appendChild(category)
    }
}

const mainlogo = () =>{
    hideMenu()  
    new category(playtrain,"colors/red","colors",colorlogo)
    new category(playtrain,"animals/parrot","animals",animallogo)
    new category(playtrain,"body/leg","my body",bodylogo)
    new category(playtrain,"countries/canadian","countries",countrieslogo)
    new category(playtrain,"picnic/cake","food",picniclogo)
    new category(playtrain,"irregular_verb_first/swim","irregular verb part a",irregular_verb_first)
    new category(playtrain,"irregular_verb_second/win","irregular verb part b",irregular_verb_second)
    new category(playtrain,"space/sun","space",spacelogo)
    if(localStorage.getItem("active") === 9 || localStorage.getItem("active") === null){localStorage.setItem("active",0)}
    if(activeLogo == spacelogo){localStorage.setItem("space",localStorage.getItem("active"))}
    if(activeLogo == colorlogo){localStorage.setItem("color",localStorage.getItem("active"))}
    if(activeLogo == animallogo){localStorage.setItem("animal",localStorage.getItem("active"))}
    if(activeLogo == bodylogo){localStorage.setItem("body",localStorage.getItem("active"))}
    if(activeLogo == picniclogo){localStorage.setItem("picnic",localStorage.getItem("active"))}
    if(activeLogo == countrieslogo){localStorage.setItem("countries",localStorage.getItem("active"))}
    if(activeLogo == irregular_verb_first){localStorage.setItem("verbA",localStorage.getItem("active"))}
    if(activeLogo == irregular_verb_second){localStorage.setItem("verbB",localStorage.getItem("active"))}
}

const spacelogo = () =>{
    hideMenu()
    new card(playtrain, "space/supernova","audio/space/supernova.mp3","supernova","сверхновая")
    new card(playtrain, "space/sun","audio/space/sun.mp3","sun","солнце")
    new card(playtrain, "space/planet","audio/space/planet.mp3","planet","планета")
    new card(playtrain, "space/nebula","audio/space/nebula.mp3","nebula","туманность")
    new card(playtrain, "space/meteorite","audio/space/meteorite.mp3","meteorite","метеорит")
    new card(playtrain, "space/galactic","audio/space/galactic.mp3","galactic","галактика")
    new card(playtrain, "space/constellation","audio/space/constellation.mp3","constellation","созвездие")
    new card(playtrain, "space/comet","audio/space/comet.mp3","comet","комета")
    activeLogo = spacelogo
    if(playtrain == "play"){
        restartButtonCreator(startPlay)}
}

const colorlogo = () =>{
    hideMenu()
    new card(playtrain, "colors/red","audio/colors/red.mp3","red","красный")
    new card(playtrain, "colors/orange","audio/colors/orange.mp3","orange","оранжевый")
    new card(playtrain, "colors/yellow","audio/colors/yellow.mp3","yellow","жёлтый")
    new card(playtrain, "colors/green","audio/colors/green.mp3","green","зелёный")
    new card(playtrain, "colors/blue","audio/colors/blue.mp3","blue","синий")
    new card(playtrain, "colors/purple","audio/colors/purple.mp3","purple","фиолетовый")
    new card(playtrain, "colors/pink","audio/colors/pink.mp3","pink","розовый")
    new card(playtrain, "colors/black","audio/colors/black.mp3","black","чёрный")
    activeLogo = colorlogo
    if(playtrain == "play"){
        restartButtonCreator(startPlay)}
}

const animallogo=()=>{
    hideMenu()
    new card(playtrain, "animals/cat","audio/animals/cat.mp3","cat","котик")
    new card(playtrain, "animals/chicken","audio/animals/chicken.mp3","chicken","курица")
    new card(playtrain, "animals/frog","audio/animals/frog.mp3","frog","лягушка")
    new card(playtrain, "animals/dog","audio/animals/dog.mp3","dog","собака")
    new card(playtrain, "animals/horse","audio/animals/horse.mp3","horse","лошадь")
    new card(playtrain, "animals/parrot","audio/animals/parrot.mp3","parrot","попугай")
    new card(playtrain, "animals/pig","audio/animals/pig.mp3","pig","свинья")
    new card(playtrain, "animals/sheep","audio/animals/sheep.mp3","sheep","овца")
    activeLogo = animallogo
    if(playtrain == "play"){
        restartButtonCreator(startPlay)}
}

const bodylogo=()=>{
    hideMenu()
    new card(playtrain, "body/arm","audio/body/arm.mp3","arm","рука")
    new card(playtrain, "body/eye","audio/body/eye.mp3","eye","глаз")
    new card(playtrain, "body/face","audio/body/face.mp3","face","лицо")
    new card(playtrain, "body/feet","audio/body/feet.mp3","feet","ступня")
    new card(playtrain, "body/hair","audio/body/hair.mp3","hair","волосы")
    new card(playtrain, "body/leg","audio/body/leg.mp3","leg","нога")
    new card(playtrain, "body/mouth","audio/body/mouth.mp3","mouth","рот")
    new card(playtrain, "body/nose","audio/body/nose.mp3","nose","нос")
    activeLogo = bodylogo
    if(playtrain == "play"){
        restartButtonCreator(startPlay)}
}

const countrieslogo=()=>{
    hideMenu()
    new card(playtrain, "countries/american","audio/countries/american.mp3","american","американский")
    new card(playtrain, "countries/canadian","audio/countries/canadian.mp3","canadian","канадский")
    new card(playtrain, "countries/chinese","audio/countries/chinese.mp3","chinese","китайский")
    new card(playtrain, "countries/english","audio/countries/english.mp3","english","английский")
    new card(playtrain, "countries/german","audio/countries/german.mp3","german","германский")
    new card(playtrain, "countries/japanese","audio/countries/japanese.mp3","japanese","японский")
    new card(playtrain, "countries/russian","audio/countries/russian.mp3","russian","русский")
    new card(playtrain, "countries/spanish","audio/countries/spanish.mp3","spanish","испанский")
    activeLogo = countrieslogo
    if(playtrain == "play"){
        restartButtonCreator(startPlay)}
}

const picniclogo=()=>{
    hideMenu()
    new card(playtrain, "picnic/apple","audio/picnic/apple.mp3","apple","яблоко")
    new card(playtrain, "picnic/banana","audio/picnic/banana.mp3","banana","банан")
    new card(playtrain, "picnic/bread","audio/picnic/bread.mp3","bread","хлеб")
    new card(playtrain, "picnic/cake","audio/picnic/cake.mp3","cake","торт")
    new card(playtrain, "picnic/carrot","audio/picnic/carrot.mp3","carrot","морковь")
    new card(playtrain, "picnic/lemon","audio/picnic/lemon.mp3","lemon","лимон")
    new card(playtrain, "picnic/meat","audio/picnic/meat.mp3","meat","мясо")
    new card(playtrain, "picnic/potato","audio/picnic/potato.mp3","potato","картошка")
    activeLogo = picniclogo
    if(playtrain == "play"){
        restartButtonCreator(startPlay)}
}

const irregular_verb_first=()=>{
    hideMenu()
    new card(playtrain, "irregular_verb_first/buy","audio/irregular_verb_first/buy.mp3","buy","покупать")
    new card(playtrain, "irregular_verb_first/draw","audio/irregular_verb_first/draw.mp3","draw","рисовать")
    new card(playtrain, "irregular_verb_first/drive","audio/irregular_verb_first/drive.mp3","drive","водить")
    new card(playtrain, "irregular_verb_first/fly","audio/irregular_verb_first/fly.mp3","fly","летать")
    new card(playtrain, "irregular_verb_first/read","audio/irregular_verb_first/read.mp3","read","читать")
    new card(playtrain, "irregular_verb_first/run","audio/irregular_verb_first/run.mp3","run","бегать")
    new card(playtrain, "irregular_verb_first/swim","audio/irregular_verb_first/swim.mp3","swim","плавать")
    new card(playtrain, "irregular_verb_first/think","audio/irregular_verb_first/think.mp3","think","думать")
    activeLogo = irregular_verb_first
    if(playtrain == "play"){
        restartButtonCreator(startPlay)}
}

const irregular_verb_second=()=>{
    hideMenu()
    new card(playtrain, "irregular_verb_second/drink","audio/irregular_verb_second/drink.mp3","drink","пить")
    new card(playtrain, "irregular_verb_second/grow","audio/irregular_verb_second/grow.mp3","grow","расти")
    new card(playtrain, "irregular_verb_second/win","audio/irregular_verb_second/win.mp3","win","читать")
    new card(playtrain, "irregular_verb_second/ring","audio/irregular_verb_second/ring.mp3","ring","звони́ть")
    new card(playtrain, "irregular_verb_second/say","audio/irregular_verb_second/say.mp3","say","сказать")
    new card(playtrain, "irregular_verb_second/sing","audio/irregular_verb_second/sing.mp3","sing","петь")
    new card(playtrain, "irregular_verb_second/sleep","audio/irregular_verb_second/sleep.mp3","sleep","спать")
    new card(playtrain, "irregular_verb_second/teach","audio/irregular_verb_second/teach.mp3","teach","учить")
    activeLogo = irregular_verb_second
    if(playtrain == "play"){
        restartButtonCreator(startPlay)}
}

const scorelogo =()=>{
    hideMenu()
    let scoreTable = document.createElement('div')
    let irregular_verb_first = document.createElement('div')
    let irregular_verb_second = document.createElement('div')
    let spacelogo = document.createElement('div')
    let colorlogo = document.createElement('div')
    let animallogo = document.createElement('div')
    let picniclogo = document.createElement('div')
    let bodylogo = document.createElement('div')
    let countrieslogo = document.createElement('div')

    scoreTable.innerHTML = "<p>YOUR LAST RESULT:</p>"
    irregular_verb_first.innerHTML ="irregular verb part a:"+ localStorage.getItem("verbA") + "/8"
    irregular_verb_second.innerHTML = "irregular verb part b:"+ localStorage.getItem("verbB") + "/8"
    spacelogo.innerHTML = "spacelogo:" + localStorage.getItem("space") + "/8"
    colorlogo.innerHTML = "colorlogo:" + localStorage.getItem("color") + "/8"
    animallogo.innerHTML = "animallogo:" + localStorage.getItem("animal") + "/8"
    picniclogo.innerHTML = "picniclogo:" + localStorage.getItem("picnic") + "/8"
    bodylogo.innerHTML = "bodylogo:" + localStorage.getItem("body") + "/8"
    countrieslogo.innerHTML = "countrieslogo:" + localStorage.getItem("countries") + "/8"

    scoreTable.className = "scoreTable"
    irregular_verb_first.className = "irregular_verb_first"
    irregular_verb_second.className = "irregular_verb_second"
    spacelogo.className = "spacelogo"   
    colorlogo.className = "colorlogo"
    animallogo.className = "animallogo"
    picniclogo.className = "picniclogo"
    bodylogo.className = "bodylogo"
    countrieslogo.className = "countrieslogo" 
    scoreTable.appendChild(irregular_verb_first)
    scoreTable.appendChild(irregular_verb_second)
    scoreTable.appendChild(spacelogo)
    scoreTable.appendChild(colorlogo)
    scoreTable.appendChild(animallogo)
    scoreTable.appendChild(picniclogo)
    scoreTable.appendChild(bodylogo)
    scoreTable.appendChild(countrieslogo)
    document.getElementsByClassName("container")[0].appendChild(scoreTable)
    activeLogo = scorelogo 
}

var activeLogo = mainlogo

mainlogo()

const restartButtonCreator = (func) => {
    var restartButton = document.createElement('div')
    var correct = document.createElement('div')
    var errors = document.createElement('div')
    correct.className = "correct"
    errors.className = "errors"
    restartButton.addEventListener("mousedown",func)
    restartButton.className = "restartButton"
    restartButton.innerHTML = "Start Game"
    document.getElementsByClassName("container")[0].appendChild(restartButton)
}

const startPlay = () => {
    localStorage.setItem('active',9)
    let intaration = 0
    var cards = document.getElementsByClassName("card")
    let cardarray = document.getElementsByClassName("card")
    let arr = [0,1,2,3,4,5,6,7]
    let arrSize = arr.length
    let randomArray = []
    for(let k = 0; k < arrSize ; k ++){
        let rand = Math.random();
        randomArray.push(arr.splice(parseInt((arr.length-1)*rand),1)[0])
    }
    
    const chooseCard = (cardarray,randomArray) => {
        let answer =randomArray.splice(0,1)[0]
        if(answer === undefined){return 0}
        cardarray[answer].audiofile.play()
        for(let i = 0; i < cardarray.length ; i++){
            function rigthchoise(){
                    localStorage.setItem('active',Number(localStorage.getItem('active')) + 1)
                    console.log("+1")
                    chooseCard(cardarray, randomArray)
                    if(intaration != 9){cardarray[i].removeEventListener("mousedown",rigthchoise)}
                }
            if(i === answer){cardarray[i].addEventListener("mousedown",rigthchoise)}
                
        }
    }
    if(intaration != 9){chooseCard(cardarray,randomArray)}
    for(let i = 0; i < cards.length ;i++){
        cards[i].addEventListener("mouseup",function(){
            intaration++
            localStorage.setItem('active',localStorage.getItem('active')-1)
            if(intaration == 9){
                console.log(localStorage.getItem('active'))
                mainlogo()
            }
        })
    }
}

var burger = document.getElementById("burger")

function hideMenu(){
    menu = "off"
    document.getElementsByClassName("navigator")[0].style.transform = "translateX(0%)"
    document.getElementsByClassName("container")[0].innerHTML = ""
    document.getElementById("burger").style.transform = "rotateX(0)"
}

var menu = "off"

burger.addEventListener("mousedown",function(){
    if(menu == "off"){
        menu = "on"
        document.getElementsByClassName("navigator")[0].style.transform = "translateX(100%)"
        burger.style.transform = "rotateX(180deg)"
    }
    else{
        menu ="off"
        document.getElementsByClassName("navigator")[0].style.transform = "translateX(0%)"
        document.getElementById("burger").style.transform = "rotateX(0)"
    }
})
