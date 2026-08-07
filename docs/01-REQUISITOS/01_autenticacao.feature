# language: pt
Funcionalidade: Autenticar usuário

  Como usuário da aplicação aurora tours
  Quero efetuar login no sistema
  Para utilizar funcionalidades que requerem autenticação

    Cenário: Usuário efetua login com sucesso
      Dado que não estou autenticado
      Quando envio uma requisição POST para "/login"
      E preencho a informação email com email válido
      E preencho a informacao senha com senha válida
      Então o status code deve ser 200
      E a resposta deve conter o token gerado 

    Cenário: Usuário efetua login com email inválido
      Dado que não estou autenticado
      Quando envio uma requisição POST para "/login"
      E preencho a informação email com email inválido
      E preencho a informacao senha com senha válida
      Então o status code deve ser 401
      E a resposta deve conter a mensagem "Credenciais inválidas"

    Cenário: Usuário efetua login com senha inválida
      Dado que não estou autenticado
      Quando envio uma requisição POST para "/login"
      E preencho a informação email com email válido
      E preencho a informacao senha com senha inválida
      Então o status code deve ser 401
      E a resposta deve conter a mensagem "Credenciais inválidas"

    Cenário: Usuário efetua login com campos vazios
      Dado que não estou autenticado
      Quando envio uma requisição POST para "/login"
      E preencho a informação email com ""
      E preencho a informacao senha com ""
      Então o status code deve ser 401
      E a resposta deve conter a mensagem "Credenciais inválidas"