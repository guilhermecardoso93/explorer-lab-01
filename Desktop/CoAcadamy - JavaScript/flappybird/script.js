var cavas = document.getElementById('#canvas')
var ctx = canvas.getContext('2d')

//Carregando Imagens
var bird = new Image()
bird.src = '../assets/images/mercy2.png'
var bg = new Image()
bg.src = '../assets/images/bg2.png'
var chao = new Image()
chao.src = '../assets/images/chao2.png'
var canobaixo = new Image()
canobaixo.src = '../assets/images/canobaixo.png'
var canocima = new Image()
canocima.src = '../assets/images/canocima.png'

//variaveis
var eec = 120
var constant
var bX = 33
var bY = 200
var gravity = 1.4
var score = 0
var cano = []

cano[0] = {
  x: canvas.width,
  y: 0
}

//Carregando Sons
var fly = new Audio()
fly.src = '../assets/sounds/fly.mp3'
var scor = new Audio()
scor.src = '../assets/sounds/score.mp3'

//Captura de Tecla
document.addEventListener('keydown', voa)

//voando
function voa() {
  bY = bY - 26
  fly.play()
}

let startButton = document.getElementById('#startButton')

function start(){
  startButton.addEventListener
}

function jogo() {
  //fundo do jogo
  ctx.drawImage(bg, 0, 0)

  //Desenhando os Canos
  for (let i = 0; i < cano.length; i++) {
    //Posição do Cano de Baixo
    constant = canocima.height + eec
    //Cano de Cima
    ctx.drawImage(canocima, cano[i].x, cano[i].y)
    //Cano de Baixo
    ctx.drawImage(canobaixo, cano[i].x, cano[i].y + constant)
    //Movimentação do CAno
    cano[i].x = cano[i].x - 1
    //Criar novos Canos
    if (cano[i].x === 125) {
      cano.push({
        x: canvas.width,
        y: Math.floor(Math.random() * canocima.height) - canocima.height
      })
    }
    
   	// Pássaro entre as bordas do cano
		if(bX + bird.width >= cano[i].x && bX <= cano[i].x + canocima.width
			// Pássaro bateu com o cano de cima ou com o cano de baixo
			&& (bY <= cano[i].y + canocima.height || bY+bird.height >= cano[i].y+constant)
			// Passaro bateu com o chão
			|| bY + bird.height >= canvas.height - chao.height){
			location.reload();
		}

      //marcando pontos
      if(cano[i].x == 5){
        score = score + 1
        scor.play()
      }

  }

  //desenhando chão
  ctx.drawImage(chao, 0, canvas.height - chao.height)

  //passaro
  ctx.drawImage(bird, bX, bY)
  bY += gravity

  // Criando o placar
  ctx.fillStyle = '#ffffff'
  ctx.font = '20px Verdana'
  ctx.fillText('Placar: ' + score, 10, canvas.height - 20)
  requestAnimationFrame(jogo)
}

jogo()
