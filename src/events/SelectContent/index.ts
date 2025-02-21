import { sendEventToDataLayer } from "../Common";
import { SelectContentEventProps, SelectContentParamsProps } from "./types";

/**
 * @param selectContentProps Objeto com as propriedades do evento
 * @param selectContentProps.category Página onde o clique foi feito, é o nome do componente de forma ampla ("home", "PDC", "PDP")
 * @param selectContentProps.subcategory Componente onde o clique foi feito de forma específica ("minicart", "carrossel", "menu")
 * @param selectContentProps.componentName Texto do componente clicado, como o label do botão
 */
export function sendSelectContentEventToDataLayer(
  selectContentProps: SelectContentParamsProps
) {
  const { category, subcategory, componentName } = selectContentProps

  const contentType = `regiao`
    .concat(':' + category)
    .concat(subcategory ? ':' + subcategory : '')
    .concat(':' + componentName)

  sendEventToDataLayer<SelectContentEventProps>({
    event: 'select_content',
    content_type: contentType
  })
}
