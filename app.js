const board = document.querySelector('.board')

class Circle {
    constructor(props){
        this.htmlElement = document.createElement('div')
        this.htmlElement.style.position = 'absolute'
        this.htmlElement.style.top = props.top + 'px'
        this.htmlElement.style.left = props.left + 'px'
        this.htmlElement.style.width = props.size + 'px'
        this.htmlElement.style.height = props.size + 'px'
        this.htmlElement.style.backgroundColor = 'azure'
        this.htmlElement.style.border = '1px solid grey'
        this.htmlElement.style.borderRadius = '50%'

        this.size = props.size

        this.htmlElement.addEventListener('click', this.circleClickHandler.bind(this))
    }
    addToBoard(){
        board.appendChild(this.htmlElement)
    }
    resize(newSize){
        this.htmlElement.style.width = newSize + 'px'
        this.htmlElement.style.height = newSize + 'px'
    }
    double(){
        this.size = this.size * 2
        this.htmlElement.style.width = this.size + 'px'
        this.htmlElement.style.height = this.size + 'px'
    }
    circleClickHandler(){
        this.double()
    }
}

//generate a number of random circles placed in random positions of random sizes
function generateRandomInteger(upperLimit){
    const randomNumber = Math.floor(Math.random()*upperLimit)
    return randomNumber
}

const circles = []
for(let i = 0; i < 10; i++){
    const circle = new Circle({top:generateRandomInteger(500), left:generateRandomInteger(400), size:generateRandomInteger(100)+1})
    circle.addToBoard()
    circles.push(circle)
}
