Desafio Nginx + Node + Mysql

    - Containers
        - 1 NgiNx
        - 2 Node
        - 3 Mysql

    Ao abrir a aplicacao no browser ele deve salvar um nome novo no banco de dados, apos fazer um select e buscar os nomes salvos e mostrar na tela

    A aplicacao deve ser acessada no nginx que vai conectar com o container node que se comunica com o container do mysql.


----

Para instalar a aplicacao

No terminal
docker-compose up -d

No browser
http://localhost:8000
