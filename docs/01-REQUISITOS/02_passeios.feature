# language: pt
Funcionalidade: Listar Passeios

  Como usuário da aplicação aurora tours
  Quero listar os passeios disponíveis
  Para reservas

  Regra: O sistema deve permitir que usuários não autenticados listem e busquem passeios

    Cenário: Usuário não autenticado lista todos os passeios
      Dado que não estou autenticado
      Quando envio uma requisição GET para "/passeios"
      Então o status code deve ser 200 OK
      E a resposta deve conter uma lista de passeios

