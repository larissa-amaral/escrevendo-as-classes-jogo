class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
  
    if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "ataque desconhecido";
    }
  
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let mago = new heroi('Darknight', 32, "mago");
let monge = new heroi("Taichi",60,"monge")

mago.atacar()
monge.atacar()