# dataLayerPackage

![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmacielsds%2FdataLayerPackage%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=version&prefix=v&label=npm)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/macielsds/datalayerpackage)

## Instalação

- Executar no terminal

```bash
npm install @macielsds/datalayerpackage
```

## Como usar o pacote

Importar e usar normalmente conforme snippets abaixo.

Tudo está tipado e com uma documentação em JSDocs explicando o que cada propriedade faz, basta deixar o mouse parado sobre o nome da função.

### Funções que diparam eventos do Data Layer

As funções possuem o padrão:

- `send` + nome do evento em Camelcase + `ToDataLayer()`

```tsx
import { sendMyEventAToDataLayer, sendMyEventBToDataLayer } from 'datalayerpackage'

sendMyEventAToDataLayer({ ... })
sendMyEventBToDataLayer({ ... })
```

### Types de eventos e propriedades

```tsx
import type { MyEventAProps, MyEventBProps } from 'datalayerpackage/types'

const myVariableA: MyEventAProps = {}
const myVariableB: MyEventBProps = {}
```

### Hooks

Os hooks possuem o padrão de todo hook:

- `use` + nome do hook em CamelCase

```tsx
import { useMyHookA, useMyHookB } from 'datalayerpackage/hooks'

const { functionAa, functionAb, functionAc} = useMyHookA()
const { functionBa, functionBb, functionBc} = useMyHookB()
```

## Implementação na loja

```
src/
├── datalayer/
│   ├── index.ts
│   ├── aEvent.ts
│   ├── bEvent.ts
│   └── cEvent.ts
├── components/index.ts
```

```tsx
// src/datalayer/index.ts

// Apenas importa as funções feitas pra essa loja e faz o export
export { aEvent } from './aEvent'
export { bEvent } from './bEvent'
export { cEvent } from './cEvent'
```

```tsx
// src/datalayer/aEvent.ts

// Importa as funções, types e hooks do pacote datalayerpackage
import { sendAEventToDataLayer } from 'datalayerpackage'

// Cria e exporta a função que trata os dados nessa loja
export function aEvent(props) {
	// Toda a lógica de tratar os dados do evento fica aqui
  // Quando nem todos os dados estão nas props, essa função pode ser async/await
  // No caso, fazendo request para pegar os dados faltantes
  const data = props.data

  // Também dispara aquele evento específico
  sendAEventToDataLayer(data)
}
```

```tsx
// src/components/index.ts

// Importa a função de dentro src/datalayer/index.ts
import { aEvent } from 'src/datalayer'

export default function MyComponent(props) {
	// Pega os dados e passa direto por parâmetro pra função criada sem tratar nada
	// Deixar o mínimo de código aqui para não poluir o componente com lógica do datalayer
	const data = orderForm.data
	aEvent(data)
}
```