//quando executada a função irá carregar a página e destacar o slot selecionado e ofuscar os outros
function switchFBColor() {

    //abre a página 'facebook.html'
    window.location.href= "facebook.html";
    //muda a cor de fundo dos slots de acordo com a seção selecionada
    document.querySelector(".fb_slot").style.background="#4169E1";
    document.querySelector(".sp_slot").style.background="#3d3d3d";
    document.querySelector(".ox_slot").style.background="#3d3d3d";
    document.querySelector(".ml_slot").style.background="#3d3d3d";
}

//quando executada a função irá carregar a página e destacar o slot selecionado e ofuscar os outros
function switchOXColor() {

    //abre a página 'olx.html'
    window.location.href= "olx.html";

    //muda a cor de fundo dos slots de acordo com a seção selecionada
    document.querySelector(".ox_slot").style.background="#7B68EE";
    document.querySelector(".sp_slot").style.background="#3d3d3d";
    document.querySelector(".ml_slot").style.background="#3d3d3d";
    document.querySelector(".fb_slot").style.background="#3d3d3d";
}

function switchSPColor() {

    //abre a página 'shopee.html'
    window.location.href= "shopee.html";

    //muda a cor de fundo dos slots de acordo com a seção selecionada
    document.querySelector(".sp_slot").style.background="#F4A460";
    document.querySelector(".ml_slot").style.background="#3d3d3d";
    document.querySelector(".ox_slot").style.background="#3d3d3d";
    document.querySelector(".fb_slot").style.background="#3d3d3d";
}

//quando executada a função irá carregar a página e destacar o slot selecionado e ofuscar os outros
function switchMLColor() {

    //abre a página 'mercadolivre.html'
    window.location.href= "mercadolivre.html";

    //muda a cor de fundo dos slots de acordo com a seção selecionada
    document.querySelector(".ml_slot").style.background="#F4FA58";
    document.querySelector(".sp_slot").style.background="#3d3d3d";
    document.querySelector(".ox_slot").style.background="#3d3d3d";
    document.querySelector(".fb_slot").style.background="#3d3d3d";
}
