const briel = document.querySelector('.briel')
const bala = [document.querySelector('.b1'),document.querySelector('.b2'),document.querySelector('.b3')]//balas
const fire  = [document.querySelector('.fire1'),document.querySelector('.fire2'),document.querySelector('.fire3')]//a fumaça dos tiros
//tela
const localtela = document.querySelector('.tela') 
const bullet =document.querySelector('.bullet')
const painelplay = document.querySelector('.painel')//painelplay
const musica = document.querySelector('.audio')
const tirossom = document.querySelector('.tirossom')
const btn_play= document.querySelector('.btn_play')
const btn_reset= document.querySelector('.btn_reset')
const placarfinal= document.querySelector('.respoint')

const play = () =>{  
    if(2==1){
        musica.src = 'imagens/musica1.mp3'
        musica.play()
    }else if(randomnum(1,2)==2){
        musica.src = 'imagens/musica2.mp3'
        musica.play()
    }   
    painelplay.style.display = 'none' //remove a tela de play
    document.addEventListener('keydown',brielcimabaixo) // Adiciona o movimento W e S
    briel.src = 'imagens/brielrun.gif' // adiciona o briel correndo
    briel.classList.add('brielinvert') //inverte o gif do briel
    briel.classList.add('brielaltura')//ajusta o tamanha do briel
    localtela.classList.add('telaanimation') // faz o background se movimentar
    let placar = 0 //valor inicial do placar
    const contagemplacar = 500 // de quanto em quanto tempo os pontos são atualizados
    const looppoit = setInterval(()=>{
        const point = document.querySelector('.point')
        placar = placar+100
        point.innerHTML = `Pontuação: ${placar}`},contagemplacar)

    const shotimer = 1200
    const loopshot = setInterval(shot,shotimer) //intervalo de tiros e a aleatoriedade deles
    const loopbrielmorreu = setInterval(verifbrielmorreu = ()=>{
        
        const brielposition = +window.getComputedStyle(briel).bottom.replace('px','')
        bala[0].offSet
        // bala acerta com 440 e 470
        let endagame = (b)=>{
            painelplay.style.display = 'flex'//volta a aparecer o painel
            btn_play.style.display = 'none'
            btn_reset.style.display = 'flex'
            document.removeEventListener('keydown',brielcimabaixo)
            briel.classList.remove('brielaltura')
            briel.src = "imagens/brielmorto.png"
            briel.style.left = '450px'
            localtela.classList.remove('telaanimation')
            bala[b].classList.remove('fires')
            clearInterval(loopshot);clearInterval(looppoit);clearInterval(loopbrielmorreu)
            console.log(placar)
        }
        if(brielposition == 63 && bala[0].offsetLeft >= 440 && bala[0].offsetLeft <= 470 ){
            briel.style.bottom = '77px'         
            endagame(0)
            //morreu em baixo
        }else if(brielposition == 100 && bala[1].offsetLeft >= 440 && bala[1].offsetLeft <= 470 ){
            briel.style.bottom = '120px'
            endagame(1)
            //morreu no meio
        }else if(brielposition == 150 && bala[2].offsetLeft >= 440 && bala[2].offsetLeft <= 470 ){
            briel.style.bottom = '165px'
            briel.style.display = 'none'
            endagame(2)
            //morreu no meio
        }   
    },1)//verifica se o briel morreu
    }
const reset = ()=>{
    location.reload()
}
    //functions
const randomnum = (a,b)=>{
        return Math.floor(Math.random() * (b - a + 1)) + a
    }
const brielcimabaixo = ()=>{
        const brielposition = +window.getComputedStyle(briel).bottom.replace('px','')
        //40 38
        if(event.keyCode==87 || event.keyCode==38){
            if(brielposition==100){
                briel.style.bottom=`150px`//vai pra cima
            }
            else if(brielposition==63){
                briel.style.bottom=`100px`//vai pro meio
            }
    }else if(event.keyCode==83 || event.keyCode ==40){
        if(brielposition==150){
            briel.style.bottom=`100px`//vai pro meio
        }
        else if(brielposition==100){
            briel.style.bottom=`63px`//vai pra baixo
        }
    }
    }
    const shot = ()=>{
        var shotperse = randomnum(1,6) //escolhe qual sequencia as balas v
        var bulletspeed = 950 //VELOCIDADE DAS BALAS
        const smokebullettime = 100 //VELOCIDADE QUE A FUMAÇA DAS BALAS SOME
        const smokef1 = ()=>{
            tirossom.play()
            fire[0].classList.add('f1')
            setTimeout(()=>{
                fire[0].classList.remove('f1')
            },smokebullettime)
            bala[0].classList.add('fires')
            setTimeout(()=>{bala[0].classList.remove('fires')},bulletspeed)
        }//bala de baixo
        const smokef2 = ()=>{
            tirossom.play()
            fire[1].classList.add('f2')
            setTimeout(()=>{
                fire[1].classList.remove('f2')
            },smokebullettime)
            bala[1].classList.add('fires')
            setTimeout(()=>{bala[1].classList.remove('fires')},bulletspeed)
        }//bala do meio
        const smokef3=()=>{
            tirossom.play()
            fire[2].classList.add('f3')
            setTimeout(()=>{
                fire[2].classList.remove('f3')
            },smokebullettime)
            bala[2].classList.add('fires')
            setTimeout(()=>{bala[2].classList.remove('fires')},bulletspeed)
        }//bala de cima
        
        if(shotperse == 1){
            smokef1()
            console.log(shotperse)
        } else if (shotperse == 2){//2
            smokef2()
            console.log(shotperse)
        } else if (shotperse == 3){//3
            smokef3()
            console.log(shotperse)
        } else if (shotperse == 4){
            smokef1();smokef2()
            console.log(shotperse)
        } else if (shotperse == 5){//5
            smokef2();smokef3()
            console.log(shotperse)
        } else if (shotperse == 6){
            smokef1();smokef3()
            console.log(shotperse)
        }
    }   