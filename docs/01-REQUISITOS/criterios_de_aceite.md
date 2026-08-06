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




- RN-02: sistema deve solicitar autenticação para criação de reservas
- RN-03: O sistema deve solicitar autenticação para listar reservas existentes
- RN-04: O sistema deve solicitar autenticação para cancelamento de reservas existentes
- RN-05: O sistema deve solicitar autenticação para criação de novos passeios
- RN-06: O sistema deve permitir apenas usuários do tipo cliente a criarem reservas
- RN-07: O sistema deve permitir apenas usuários do tipo cliente a cancelar reservas
- RN-08: O sistema deve permitir apenas usuários do tipo administrador a criar novos passeios
- RN-09: O sistema deve permitir que usuários do tipo administrador listem todas as reservas
- RN-10: O sistema deve permitir que usuários do tipo cliente listem apenas suas próprias reservas



bkp

- RN-01: O sistema deve permitir que usuários não autenticados listem e busquem passeios. 
- RN-02: sistema deve solicitar autenticação para criação de reservas
- RN-03: O sistema deve solicitar autenticação para listar reservas existentes
- RN-04: O sistema deve solicitar autenticação para cancelamento de reservas existentes
- RN-05: O sistema deve solicitar autenticação para criação de novos passeios
- RN-06: O sistema deve permitir apenas usuários do tipo cliente a criarem reservas
- RN-07: O sistema deve permitir apenas usuários do tipo cliente a cancelar reservas
- RN-08: O sistema deve permitir apenas usuários do tipo administrador a criar novos passeios
- RN-09: O sistema deve permitir que usuários do tipo administrador listem todas as reservas
- RN-10: O sistema deve permitir que usuários do tipo cliente listem apenas suas próprias reservas