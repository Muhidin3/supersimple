let list_of_ids = ['a','b','c','d','e','f','g','h','i']
let arrayBtn = document.querySelectorAll('td')
let X_or_O = 'O'
let iX_or_O = 'X'
let is_game_ended = false


// document.querySelectorAll('li')[2].style.color = 'cyan'

document.querySelectorAll('td').forEach((v,i,a) => {
    // v.style.color = '#153047'
    v.id = list_of_ids[i]
    // v.innerHTML = v.id
    // v.innerHTML = list_of_ids[i].toUpperCase()
});
document.querySelectorAll('td').forEach((v,i,a) => { changeElement(v,i)});
// document.querySelectorAll('td').forEach((v,i,a) => { checkWinner(v,i,a)});


function changeElement(a,i) {
    a.addEventListener('click',()=>{
        if (is_game_ended==false) {
            
            if(a.innerHTML !='X' && a.innerHTML!= 'O' ){
                if (X_or_O == 'O') {
                    X_or_O = 'X'
                    iX_or_O = 'O'
                }
                else{
                    X_or_O = 'O'
                    iX_or_O = 'X'
                }
                a.innerHTML = X_or_O
                // a.innerHTML = i
                
            }
        }
        
        
    })
    document.querySelector('table').onclick = ()=>{
        document.querySelector('.turn').innerHTML = `${iX_or_O}'s turn`
        checkWinner(arrayBtn) 
    }
}
function checkWinner(arrayBtn) {
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')
    let d = document.getElementById('d')
    let e = document.getElementById('e')
    let f = document.getElementById('f')
    let g = document.getElementById('g')
    let h = document.getElementById('h')
    let i = document.getElementById('i')
    

    function algorithm(a,b,c){
        if(a.innerHTML=='X'&& b.innerHTML=='X'&& c.innerHTML=='X'){

            a.style.backgroundColor = '#127369'
            b.style.backgroundColor = '#127369'
            c.style.backgroundColor = '#127369'
            console.log(a.innerHTML,b.innerHTML,c.innerHTML);
            is_game_ended = true
            end()
        }
        else if (a.innerHTML=='O'&& b.innerHTML=='O'&& c.innerHTML=='O'){
            a.style.backgroundColor = '#127369'
            b.style.backgroundColor = '#127369'
            c.style.backgroundColor = '#127369'
            is_game_ended = true
            end()
            
        }
        else{
            return
        }
        return [a,b,c]
        
    }
    algorithm(a,b,c)
    algorithm(d,e,f)
    algorithm(g,h,i)
    algorithm(a,d,g)
    algorithm(b,e,h)
    algorithm(c,f,i)
    algorithm(a,e,i)
    algorithm(c,e,g)
}

function end() {
    if(is_game_ended==true){
        document.querySelector('.turn').innerHTML = `${X_or_O} wins`
        document.querySelectorAll('td').forEach((v,i,a)=>{
           v.addEventListener('click',()=>{
            console.log('fhgjhdklmcad;k');
            
           }) 
        })
    }
}


// the restart button
document.querySelector('.btn').addEventListener('click',()=>{
    document.querySelectorAll('td').forEach((v,i,a)=>{
        v.innerHTML = ''
        v.style.backgroundColor = document.querySelector('.wholeContainer').style.backgroundColor
        is_game_ended = false
    })
})