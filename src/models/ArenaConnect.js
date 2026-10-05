const fs = require('fs');
const path = require('path');
const CadastroFactory = require('../CadastroFactory');

class ArenaConnect {

    constructor() {
        this.turmas = [];
        this.atletas = [];
        this.arbitros = [];
        this.equipes = [];

        this.idTurmaContador = 1;
        this.idAtletaContador = 1;
        this.idArbitroContador = 1;
        this.idEquipeContador = 1;
    }
    adicionarAtleta() {
    }
    adicionarTurma() {
    }
}

module.exports = ArenaConnect;