# language: pt
Funcionalidade: Gerenciamento de Passeios

  Como usuário da aplicação aurora tours
  Quero listar e administrar os passeios disponíveis
  Para reservas

  Regra: O sistema deve permitir que usuários não autenticados listem e busquem passeios

    Cenário: Usuário não autenticado lista todos os passeios
      Dado que não estou autenticado
      Quando envio uma requisição GET para "/passeios"
      Então o status code deve ser 200
      E a resposta deve conter uma lista de passeios

    Cenário: Usuário não autenticado busca informações de um passeio
      Dado que não estou autenticado
      Quando envio uma requisição GET para "/passeios/1"
      Então o status code deve ser 200
      E a resposta deve conter as informações do passeio
 
    Cenário: Usuário busca informações de um passeio que não existe
      Dado que não estou autenticado
      Quando envio uma requisição GET para "/passeios/99"
      Então o status code deve ser 404
      E a mensagem apresentada deve ser "Passeio não encontrado"

  Regra: O sistema deve permitir apenas usuários do tipo administrador a criar novos passeios

    Cenário: Usuário do tipo administrador cria novo passeio
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 4h                        |
        | descricao         | Passeio com duração de 4 horas   |
        | destino           | Islândia                         |
        | preco             | 6200                             |
        | capacidade_maxima | 10                               |
      Então o status code deve ser 201
      E a mensagem de resposta deve ser "Passeio criado"

    Cenário: Usuário do tipo cliente tenta criar novo passeio
      Dado que estou autenticado com um usuário do tipo cliente
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 5h                        |
        | descricao         | Passeio com duração de 5 horas   |
        | destino           | Islândia                         |
        | preco             | 6250                             |
        | capacidade_maxima | 10                               |
      Então o status code deve ser 403
      E a mensagem apresentada deve ser "Acesso negado. Apenas administradores podem criar passeios"

  Regra: O sistema deve solicitar autenticação para criação de novos passeios

    Cenário: Usuário não autenticado tenta criar novo passeio
      Dado que não estou autenticado
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 5h                        |
        | descricao         | Passeio com duração de 5 horas   |
        | destino           | Islândia                         |
        | preco             | 6250                             |
        | capacidade_maxima | 10                               |
      Então o status code deve ser 401
      E a mensagem de resposta deve ser "Token não informado"

    Cenário: Administrador tenta criar passeio com campo nome vazio
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              |                                  | # campo vazio
        | descricao         | Passeio com duração de 4 horas   |
        | destino           | Islândia                         |
        | preco             | 6200                             |
        | capacidade_maxima | 10                               |
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "O campo nome é obrigatório"

    Cenário: Administrador tenta criar passeio com campo descricao vazio
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 3h                        |
        | descricao         |                                  | # campo vazio
        | destino           | Islândia                         |
        | preco             | 6200                             |
        | capacidade_maxima | 10                               |
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "O campo descricao é obrigatório"

    Cenário: Administrador tenta criar passeio com campo destino vazio
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 3h                        |
        | descricao         | Passeio com 3h de duração        | 
        | destino           |                                  | # campo vazio
        | preco             | 6200                             |
        | capacidade_maxima | 10                               |
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "O campo destino é obrigatório"

    Cenário: Administrador tenta criar passeio com campo preco vazio
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 3h                        |
        | descricao         | Passeio com 3h de duração        | 
        | destino           | Islândia                         | 
        | preco             |                                  | # campo vazio
        | capacidade_maxima | 10                               |
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "O campo preco é obrigatório"

    Cenário: Administrador tenta criar passeio com campo capacidade_maxima vazio
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 3h                        |
        | descricao         | Passeio com 3h de duração        | 
        | destino           | Islândia                         | 
        | preco             | 1200                             | 
        | capacidade_maxima |                                  | # campo vazio
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "O campo capacidade_maxima é obrigatório"

    Cenário: Usuário do tipo administrador tenta criar passeio com preco negativo
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 4h                        |
        | descricao         | Passeio com duração de 4 horas   |
        | destino           | Islândia                         |
        | preco             | -2000.00                         |
        | capacidade_maxima | 10                               |
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "O preco deve ser maior que zero"

    Cenário: Usuário do tipo administrador tenta criar passeio com capacidade_maxima negativo
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 4h                        |
        | descricao         | Passeio com duração de 4 horas   |
        | destino           | Islândia                         |
        | preco             | 2000.00                         |
        | capacidade_maxima | -10                               |
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "A capacidade_maxima deve ser maior que zero"

    Cenário: Usuário do tipo administrador tenta criar passeio com preco contendo letras
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 4h                        |
        | descricao         | Passeio com duração de 4 horas   |
        | destino           | Islândia                         |
        | preco             | dois mil                         |
        | capacidade_maxima | 10                               |
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "O preco deve ser um número válido"

    Cenário: Usuário do tipo administrador tenta criar passeio com capacidade_maxima contendo letras
      Dado que estou autenticado com um usuário do tipo administrador
      Quando envio uma requisição POST para "/passeios"
      E envio os seguintes dados:
        | campo             | valor                            |
        | nome              | Aurora 4h                        |
        | descricao         | Passeio com duração de 4 horas   |
        | destino           | Islândia                         |
        | preco             | 2000.00                          |
        | capacidade_maxima | dez                              |
      Então o status code deve ser 400
      E a mensagem apresentada deve ser "A capacidade_maxima deve ser um número válido"