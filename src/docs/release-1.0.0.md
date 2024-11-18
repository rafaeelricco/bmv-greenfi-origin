# Banco da Amazônia v1.0.0

Esta versão inicial traz diversas funcionalidades focadas na experiência do usuário durante o evento COP29, garantindo uma interface intuitiva para o resgate de Unidades de Crédito de Sustentabilidade (UCS). Confira os destaques desta release:

### Funcionalidades

-  **Resgate de UCS**: Interface intuitiva permite o resgate eficiente de UCS através do QR Code presente na Moeda da Sustentabilidade. Inclui um formulário de registro para capturar informações do usuário e validar o endereço da carteira.
-  **Geração e Validação de Carteira**: Integração com Web3Auth para criação de carteiras digitais através de autenticação Google, além de suporte para inserção manual de endereços de carteira existentes.
-  **Processamento e Transferência de UCS**: Sistema de validação de dados e requisição API para garantir a transferência segura de UCS, com mensagens de erro e sucesso para feedback do usuário.
-  **Suporte Multilíngue**: Sistema completo de internacionalização com suporte para Português (PT-BR) e Inglês(EN-US).
-  **Conteúdo Educativo**: Seções informativas sobre sustentabilidade e o impacto das UCS na preservação da Amazônia.

## Executando o projeto

Primeiro, certifique-se de que você tem as variáveis de ambiente configuradas. Baseie-se no arquivo [env.example](.env.example) na raiz do diretório:

```console
NEXT_PUBLIC_API_URL=<your_api_url>
API_TOKEN=<your_api_token>
GOOGLE_ID=<your_google_id>
NEXT_PUBLIC_VIDEO_EN=<your_video_en_url>
NEXT_PUBLIC_VIDEO_PT=<your_video_pt_url>
NODE_ENV=<your_node_env>
WEB3AUTH_CLIENT_ID=<your_web3auth_client_id>
WEB3AUTH_VERIFIER=<your_web3auth_verifier>
```

Após configurar as variáveis de ambiente, clone o repositório para começar:

```console
git clone https://github.com/rafaeelricco/bmv-greenfi-origin-lp.git
```

Navegue até a pasta do projeto pelo terminal. Agora, é hora de instalar as dependências:

```console
pnpm install
```

Com as dependências instaladas, você já pode executar o projeto localmente:

```console
pnpm dev
```

Finalmente, abra seu navegador e acesse [http://localhost:3000](http://localhost:3000). Deverá ver a aplicação rodando perfeitamente na sua máquina.

## Ambientes

### Produção

-  **Landing Page**: [bancoamazonia.bmv.global/pt/home](https://bancoamazonia.bmv.global/pt/home)
-  **API**: [apifx.bmv.global](https://apifx.bmv.global)

### Desenvolvimento

-  **API**: [bmv-greenfi-origin-api-develop.up.railway.app](https://bmv-greenfi-origin-api-develop.up.railway.app)

## Contribuidores

-  [@Rafael Ricco](https://github.com/rafaeelricco)
-  [@Pedro Hercules](https://github.com/PedroHercules)
