
/*função executa junto com o carregamento da página*/
function propriedadesPagina() {

    //retorna para o card a quantidade de cada produto
    var r = document.getElementsByClassName("produtos");
    var y = 0;
    [].forEach.call(r, function(t){
        y += parseInt(t.innerHTML);
    });

    document.querySelector(".quantidadeCadastrados").innerHTML="Produtos cadastrados: " + y;



    //retorna para o card a quantidade de unidades de um produto
    var produto = document.getElementsByClassName("p");
    var xy = 0;
    [].forEach.call(produto, function(calcular) {
        xy += parseInt(calcular.innerHTML);
    }); 

    document.querySelector(".quantidadeTotal").innerHTML= "Quantidade total: " + xy;



    var canvas = document.getElementById("canvasGrafico");

    if (canvas) {
        //altura da canvas
        var altura = 350;
        //largura da canvas
        var largura = 600;
        //posição horizontal inicial do gráfico
        var x = 0;
        //valor dos pontos do gráfico, que será alterado aleatoriamente
        var valor1, valor2;

        //formatando a canvas
        canvas.setAttribute("width", largura);
        canvas.setAttribute("height", altura);

        //obtendo o contexto 2d
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "#3d3d3d";
        ctx.fillRect(0, 0, largura, altura);
        ctx.font = "30px Arial";

        function desenharGrafico() {
            //define o avanço horizontal
            x+=0.1;
            //gera um valor aleatório entre 0 e 100
            valor1 = y;
            valor2 = xy;
            //desenha uma linha até a posição gerada
            ctx.lineTo(x, altura-valor1);
            ctx.strokeStyle = "green";
            ctx.stroke();
            //desenha uma segunda linha que calcula a quantidadetotal
            //ctx.lineTo(x, altura-valor2);
            //ctx.strokeStyle = "red";
            //ctx.stroke();
        }
    }

    setInterval(desenharGrafico, 100);
        
}