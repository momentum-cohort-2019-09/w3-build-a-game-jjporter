const color = {
    player: '#DC2E2E',
    coin: '#F5D106',
    enemy: '#06E6F5'
}

class Game {
    constructor (canvasId) {
    const canvas = document.getElementById(canvasId)

        this.screen = canvas.getContext('2d')
        this.size = {width: canvas.width, height: canvas.height}
        this.bodies = []
        // this.ticksSinceObstacle = 0
        // this.coins = coins
        // this.keyboarder = keyboarder
        // this.gameOver = false

        let playerSize = {width: 100, height: 100}
        let playerLocation = {x: this.screen/3, y: this.screen/3}

        this.player = new Player (playerSize, playerLocation)
        this.addBody.push(this.player)
    } 

    run () {
        this.draw()
    }

    draw (screen) {
        screen.fillStyle = 'blue'
        screen.fillRect(150, 150, 300, 300)

        for(let body of this.bodies) {
            body.draw(this.screen)
        }
    }

    addBody (body) {
        this.bodies.push(body)
    }
}

class Player {
    constructor (size, center) {
        this.size = size
        this.center = center
        this.startingX = center.x
        this.update () 
            fillRect(this.size, this.center)

        this.player = new Player (player.size, player.center)
        this.addBody.push(this.player)
        
    }

    draw () {
        player.update ()
    }

    movePlayer () {
        let speed = 100
    }
}

class Enemy {
    constructor (size, center) {
        this.size = size
        this.center = center
    }
}

const game = new Game ('game-canvas')
game.run()

//Player movement - 
//in player class, have 4 methods (right, left, up, and down)
//