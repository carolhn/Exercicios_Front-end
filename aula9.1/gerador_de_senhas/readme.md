Iniciando um projeto com NPM

1- criar nosso arquivo index.html, vamos iniciar um projeto com NPM
npm init -y

2 - criar SRC
mkdir src
touch src/main.js

3 - Vamos criar a tag script dentro do HTML
 <script type="module" src="./src/main.js"></script>

4 - instalar a biblioteca
npm install nanoid

5 - Após a instalação repare que duas coisas aconteceram:
- No arquivo package.json foi adicionada uma dependência com a biblioteca.
- Foi criada a pasta node_modules , que é onde fica o código das bibliotecas que iremos usar.

6 - criar o .gitignore
touch .gitignore
echo "node_modules/" >> .gitignore

7 - ERRO DE TYPE FAILED no web
 - precisamos colocar no nosso package.json 
   },
  "type": "module"
  }

8 - No terminal precisamos executar o:
 node src/main.js

9 - Para copilar o codigo para produção/ com esse codigo será executado um servidor local
npx vite --open

//---------------Para rodar o projeto---------------------------------------------------------
para rodar a aplicação
- npm run dev
