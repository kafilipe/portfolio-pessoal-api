const usuarios = [
  {
    id: 1,
    nome: 'Admin Aurora',
    email: 'admin@aurora.com',
    senha: 'admin123',
    tipo: 'admin'
  },
  {
    id: 2,
    nome: 'Maria Silva',
    email: 'maria@email.com',
    senha: 'cliente123',
    tipo: 'cliente'
  },
  {
    id: 3,
    nome: 'João Pereira',
    email: 'joao@email.com',
    senha: 'cliente123',
    tipo: 'cliente'
  }
];

const passeios = [
  {
    id: 1,
    nome: 'Aurora Clássica',
    descricao: 'Passeio clássico para observar a aurora boreal.',
    destino: 'Rovaniemi, Finlândia',
    preco: 2500,
    capacidade_maxima: 20
  },
  {
    id: 2,
    nome: 'Aurora Premium',
    descricao: 'Experiência premium com conforto e guias especializados.',
    destino: 'Rovaniemi, Finlândia',
    preco: 4200,
    capacidade_maxima: 12
  },
  {
    id: 3,
    nome: 'Aurora Fotográfica',
    descricao: 'Passeio voltado para fotografia da aurora boreal.',
    destino: 'Rovaniemi, Finlândia',
    preco: 3800,
    capacidade_maxima: 8
  }
];

const reservas = [];

const nextIds = {
  passeio: 4,
  reserva: 1,
  usuario: 4
};

module.exports = {
  usuarios,
  passeios,
  reservas,
  nextIds
};
