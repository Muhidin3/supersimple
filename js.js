mycancas = document.getElementById('canvas')
c = mycancas.getContext('2d')

mycancas.width = window.innerWidth
mycancas.height = window.innerHeight


inwid = window.innerWidth
inhei = window.innerHeight



Amplitude = 100
wavelength = 0.001
add = 0
function loop() {
    requestAnimationFrame(loop)
    c.moveTo(0,inhei/2)

    c.clearRect(0,0,10000,1000)

    c.beginPath()
    for( let i = 0 ; i< inwid ; i++){

        y = inhei/2 + Math.sin(i*wavelength+add)*Amplitude

        c.lineTo(i,y)
        c.fillRect(i,y,10,1000)

        c.fillStyle='#ffffff'
        // wavelength+=0.000000001
        
             
        // console.log(Amplitude)        
    }
    add+=0.03
    c.stroke()
    
}
loop()
       








console.log(mycancas.height/2)