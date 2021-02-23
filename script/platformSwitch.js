//quando executada a função irá carregar a página e destacar o slot selecionado e ofuscar os outros
function switchMLColor() {

    window.location.href= "mercadolivre.html";

    document.querySelector(".ml_slot").style.background="#F4FA58";
    document.querySelector(".sp_slot").style.background="#3d3d3d";
    document.querySelector(".ox_slot").style.background="#3d3d3d";
    document.querySelector(".fb_slot").style.background="#3d3d3d";
}

//quando executada a função irá carregar a página e destacar o slot selecionado e ofuscar os outros
function switchSPColor() {
    window.location.href= "shopee.html";
    document.querySelector(".sp_slot").style.background="#F4A460";
    document.querySelector(".ml_slot").style.background="#3d3d3d";
    document.querySelector(".ox_slot").style.background="#3d3d3d";
    document.querySelector(".fb_slot").style.background="#3d3d3d";
}

//quando executada a função irá carregar a página e destacar o slot selecionado e ofuscar os outros
function switchOXColor() {
    window.location.href= "olx.html";
    document.querySelector(".ox_slot").style.background="#7B68EE";
    document.querySelector(".sp_slot").style.background="#3d3d3d";
    document.querySelector(".ml_slot").style.background="#3d3d3d";
    document.querySelector(".fb_slot").style.background="#3d3d3d";
}

//quando executada a função irá carregar a página e destacar o slot selecionado e ofuscar os outros
function switchFBColor() {
    window.location.href= "facebook.html";
    document.querySelector(".fb_slot").style.background="#4169E1";
    document.querySelector(".sp_slot").style.background="#3d3d3d";
    document.querySelector(".ox_slot").style.background="#3d3d3d";
    document.querySelector(".ml_slot").style.background="#3d3d3d";
}
