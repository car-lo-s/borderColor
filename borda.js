let bot = document.querySelector('#botao')
bot.onclick = function (){
    let bord = document.querySelector('#borda')
    let valor = bord.options[bord.selectedIndex].value
    let tamanho = document.querySelector('#espessura').value   
    let bordinha = document.querySelector('.resultado')
    bordinha.style.border = ''+valor+' '
    if(tamanho >= 100){
        alert("Digite um valor menor para borda")
    }else{
        bordinha.style.border = ''+valor+' '+tamanho+'px'
    }
} 