export type PageInfoProps = {
    region:
        'home'
        | 'PDC'
        | 'PDP'
        | 'institucional'
        | 'area-logada'
        | 'checkout'
    page_category:
        'home'
        | string
        | 'PDP'
        | 'institucional'
        | 'area-logada'
        | 'checkout'
    page_departament: string
    vtex_version: 'fast' | 'legado'
}
