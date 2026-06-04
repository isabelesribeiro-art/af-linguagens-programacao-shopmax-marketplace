/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: ShopMax Marketplace
Aluno 1: Isabelle Silva Ribeiro - RA: 251690
Aluno 2: Amanda Martins França - RA: 252400
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

// ============================
// BOTÃO VOLTAR AO TOPO
// ============================

const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }

    });

    btnTopo.addEventListener('click', function () {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}

// ============================
// VALIDAÇÃO DO FORMULÁRIO
// ============================

const formulario = document.querySelector('#formContato');

if (formulario) {

    formulario.addEventListener('submit', function (event) {

        event.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const mensagem = document.querySelector('#mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {

            alert('Por favor, preencha todos os campos obrigatórios.');

        } else {

            alert('Mensagem enviada com sucesso!');
            formulario.reset();

        }

    });

}

// ============================
// EFEITO NOS CARDS
// ============================

const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {

    card.addEventListener('mouseenter', function() {
        card.style.transform = 'scale(1.03)';
    });

    card.addEventListener('mouseleave', function() {
        card.style.transform = 'scale(1)';
    });

});