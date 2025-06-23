# Relatório

**Projeto:** Calculadora Simples com React + Vite + styled-components

**Objetivo:** Dissertar sobre o conceito de Contexto e Hooks

---
## Questões

### O que é um contexto?

No React, um *contexto* (createContext) é uma forma de *compartilhar informações entre componentes*, evitando a necessidade de passar dados manualmente através de múltiplos níveis de props, conhecido como *prop drilling*, que é um estágio do desenvolvimento que acontece quando precisamos obter dados que estão em várias camadas na árvore de componente react. O contexto funciona como uma fonte de dados global para a aplicação, onde um componente "pai" fornece o valor (Provider) e os componentes "filhos" podem consumir esse valor com o hook useContext.

Neste projeto, o contexto é usado para **armazenar** os números e operador da calculadora, e disponibilizar **funções** para atualizá-los.

### O que são React Hooks?

Os *React Hooks* permitem que componentes funcionais, que são funções JavaScript que retornam elementos React, acessem e manipulem o estado (dados que mudam com o tempo) e os efeitos colaterais (ações que ocorrem em resposta a mudanças no estado ou ao longo do ciclo de vida do componente). Os hooks tornam os componentes mais simples, reutilizáveis e organizados.


Principais hooks utilizados neste projeto:

- useState: para criar e atualizar valores dinâmicos, como os números digitados e operador.
- useContext: para acessar os valores e funções do contexto global.
- useCallback: para memorizar funções e evitar recriações desnecessárias.


### O que esse contexto possibilita?

No contexto da aplicação, o **InputContext** (desenvolvido no projeto) permite:

- Armazenar e compartilhar:
  - O primeiro número digitado (firstNumber)
  - O operador escolhido (operator)
  - O segundo número digitado (secondNumber)

- Atualizar dinamicamente os valores, através das funções:
  - addFirstNumber()
  - changeOperator()
  - addSecondNumber()

Com isso, todos os componentes que usam esse contexto podem acessar e alterar os dados da calculadora de forma centralizada, mantendo o estado sincronizado e facilitando o desenvolvimento. Essa prática ajuda na redução de duplicação de lógica, de complexidadade (ao evitar passar props em cadeia), e contribui na organização do estado da aplicação, além de facilitar a manutenção e testes.

---
## Considerações Finais
O protótipo da aplicação teve referência nesse arquivo do [Figma](https://www.figma.com/file/67DjfJYTVTPP0o8AtxExwy/Desafio-3---Calculadora?type=design&node-id=1%3A3&t=f3WGN7ckTIqYKTM7-1), enquanto o contexto veio do usuário [NiquiniNiwi](https://github.com/NiquiniNiwi/Hooks-Processo-Seletivo). Ademais, tudo produzido nesse repositório foi de minha autoria.
