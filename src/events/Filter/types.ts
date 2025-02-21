export type FilterName = 'tamanho' | 'cor' | 'preco' | 'categoria'

export type FilterProps = {
    [key in FilterName]?: string
}