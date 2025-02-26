export type FilterName = 'size' | 'color' | 'price_range' | 'ordering' | 'category'

export type FilterProps = {
    [key in FilterName]?: string
}