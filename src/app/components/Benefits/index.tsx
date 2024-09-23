import {
  CardBenefitsH1,
  CardBenefitsParagraph,
  CardBenefitsSpan,
  CardBenefitsProperty,
  CardBenefitssSection,
  CardBenefitsSpace,
} from './CardBenefitsComponents'
import { CardBenefitsCollection } from './CardsColletionBenefits'

export function Benefits() {
  return (
    <>
      <CardBenefitsSpace>
        <CardBenefitsH1>
          Veja o que vem{' '}
          <CardBenefitsSpan>no Pack de Marketing</CardBenefitsSpan>
        </CardBenefitsH1>
        <CardBenefitsParagraph>
          São 6 estratégias comprovadas, validadas por mim na minha agência e
          meus clientes
        </CardBenefitsParagraph>
        <CardBenefitssSection>
          <CardBenefitsProperty>
            <CardBenefitsCollection />
          </CardBenefitsProperty>
        </CardBenefitssSection>
      </CardBenefitsSpace>
    </>
  )
}
