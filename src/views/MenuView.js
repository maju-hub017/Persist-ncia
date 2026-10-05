const prompt = require('prompt-sync')();
const MenuView = {
mostrarMenu() {
console.log(`
==============================
ARENA-CONNECT v3.0 - PBE1 - Singleton + Factory
==============================
Registrar Turma
Listar Turmas
Registrar Atleta
Listar Atletas
Registrar Árbitro
Listar Árbitros
Registrar Equipe
Listar Equipes
Vincular Atleta à Equipe
Desvincular Atleta da Equipe
Remover Equipe
Sair
==============================
`);
return prompt("Escolha: ");
},
mostrarOpcaoInvalida() {
console.log("Opção Inválida!");
}
};
module.exports = MenuView;