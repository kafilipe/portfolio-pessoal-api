# language: pt
Funcionalidade: Listagem de todas as reservas

  Como usuário administrador da aplicação aurora tours
  Quero listar todas as reservas feitas no sistema

  Regra: O sistema deve permitir que usuários do tipo administrador listem todas as reservas

    Cenário: Usuário administrador lista todas as reservas
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição GET para "/reservas/admin"
      Então o status code deve ser 200
      E a resposta deve conter a lista de todas as reservas feitas no sistema

    Cenário: Usuário cliente tenta listar todas as reservas
      Dado que estou autenticado com um usuário do tipo cliente
      Quando envio uma requisição GET para "/reservas/admin"
      Então o status code deve ser 403 
      E a mensagem apresentada deve ser "Apenas administradores podem listar todas as reservas"

    Cenário: Usuário não autenticado tenta listar todas as reservas
      Dado que não estou autenticado
      Quando envio uma requisição GET para "/reservas/admin"
      Então o status code deve ser 401 
      E a mensagem apresentada deve ser "É necessária autenticação para listar todas as reservas"
