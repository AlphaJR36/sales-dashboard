# Portfolio Project

Este é um projeto de portfólio criado para demonstrar minhas habilidades em desenvolvimento web. Foi desenvolvido utilizando as seguintes tecnologias:

- TypeScript
- JavaScript
- HTML
- CSS
- Node.js
- Express.js

## Configuração

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js
- Yarn

### Instalação

1. Clone este repositório em sua máquina local:

git clone https://github.com/AlphaJR36/sales-dashboard.git

2. Navegue até o diretório do projeto:

cd sales-dashboard

3. Instale as dependências do projeto usando o Yarn:

yarn

### Executando o projeto

1. Após concluir a instalação das dependências, você pode iniciar o servidor de desenvolvimento usando o seguinte comando:

yarn dev

Isso iniciará o servidor Express.js e você poderá acessar o projeto em seu navegador em http://localhost:SERVER_PORT.

### Estrutura do projeto

O projeto possui a seguinte estrutura de arquivos e diretórios principais:

- src/: Diretório contendo o código-fonte do projeto. É neste diretório que você encontrará todos os arquivos relacionados à lógica do projeto.

- config/: Diretório contendo os arquivos de configuração. Geralmente, nesse diretório, estão presentes arquivos que lidam com a configuração de variáveis de ambiente, configurações de banco de dados ou outras configurações específicas do projeto.
  - environment.d.ts: Arquivo de configuração das variáveis de ambiente. Esse arquivo contém definições de tipos para as variáveis de ambiente utilizadas no projeto, permitindo que o TypeScript as reconheça corretamente.

- server/: Diretório contendo os arquivos relacionados ao servidor. Aqui você encontrará os arquivos responsáveis por configurar e iniciar o servidor.
  - routes/: Diretório contendo as rotas do servidor. Nesse diretório, você encontrará os arquivos que definem as rotas do servidor e suas respectivas funções de manipulação.
    - index.ts: Arquivo de configuração das rotas do servidor. Aqui, as rotas são definidas e associadas às suas respectivas funções de manipulação. Esse arquivo serve como ponto de entrada para a configuração das rotas.

- .editorconfig: Arquivo de configuração do editor. Ele é usado para manter um estilo de codificação consistente entre diferentes editores e IDEs, especificando as configurações de formatação de código, como indentação, espaços em branco, etc.

- .env.example: Arquivo de exemplo para as variáveis de ambiente. Esse arquivo fornece um modelo para as variáveis de ambiente que devem ser configuradas no projeto. Geralmente, é utilizado para fornecer informações sobre as variáveis esperadas e seus valores padrão, permitindo que você crie um arquivo .env com as configurações específicas do seu ambiente.

- .eslintignore: Arquivo de configuração do ESLint para ignorar determinados arquivos ou diretórios durante a verificação de linting. Você pode especificar quais arquivos ou padrões de arquivos devem ser ignorados pelo ESLint, impedindo que ele verifique esses arquivos em busca de problemas de estilo ou erros.

- .eslintrc.json: Arquivo de configuração do ESLint. O ESLint é uma ferramenta de linting para JavaScript/TypeScript que ajuda a manter um código limpo e consistente.

- .gitattributes: Arquivo de configuração do Git que permite definir atributos específicos para arquivos em um repositório Git.

- .gitignore: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git durante o controle de versão.

- babel.config.js: Arquivo de configuração do Babel. O Babel é uma ferramenta de compilação que permite usar recursos do JavaScript que podem não ser suportados em todos os ambientes.

- LICENSE: Arquivo que especifica a licença sob a qual o projeto é distribuído.

- nodemon.json: Arquivo de configuração do Nodemon. O Nodemon é uma ferramenta utilizada durante o desenvolvimento que reinicia automaticamente o servidor sempre que um arquivo é modificado.

- package.json: Arquivo de manifesto do projeto que contém informações sobre o projeto, dependências, scripts de execução e outras configurações.

- README.md: Arquivo que contém informações sobre o projeto, como a descrição, configuração, uso e outras instruções.

- tsconfig.json: Arquivo de configuração do TypeScript. O TypeScript é um superset do JavaScript que adiciona recursos de tipagem estática ao JavaScript.

- yarn.lock: Arquivo de manifesto gerado pelo Yarn que registra as versões exatas das dependências instaladas em seu projeto, garantindo que as mesmas versões sejam usadas em diferentes ambientes de desenvolvimento.


## Personalização

Sinta-se à vontade para personalizar este projeto de acordo com suas necessidades. Você pode adicionar mais páginas, estilos, scripts, etc. Basta explorar os arquivos e diretórios mencionados acima e fazer as alterações desejadas.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request neste repositório.

## Licença

Este projeto está licenciado nos termos da licença MIT (https://opensource.org/licenses/MIT).

## Imagens

Aqui estão algumas capturas de tela do projeto:

![Imagem 1](https://raw.githubusercontent.com/AlphaJR36/sales-dashboard/master/.github/images/Screenshot_1.png)
![Imagem 2](https://raw.githubusercontent.com/AlphaJR36/sales-dashboard/master/.github/images/Screenshot_2.png)
![Imagem 3](https://raw.githubusercontent.com/AlphaJR36/sales-dashboard/master/.github/images/Screenshot_3.png)
## Créditos

Este projeto foi desenvolvido com base no repositório `dashboard-vendas` mantido por [Pani-Kaz](https://github.com/Pani-Kaz).
