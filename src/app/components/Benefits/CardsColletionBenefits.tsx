import { MagnifyingGlass, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import {
  CardBenefitsGridBg,
  CardBenefitsGrid,
  CardBenefitsGridH1,
  CardBenefitsButtonAnchor,
  CardBenefitsButtonFlex,
  CardBenefitsButtonProperty,
  CardBenefitsButtonText,
  CardBenefitsGridIconDiv,
  CardBenefitsGridParagraph,
} from './CardBenefitsComponents'

export function CardBenefitsCollection() {
  const features = [
    {
      icon: (
        <MagnifyingGlass
          size={32}
          className="h-16 w-16 fill-brand100"
          weight="fill"
        />
      ),
      title: 'Meu Social Media',
      subtitle:
        'Automatize a criação e planejamento das suas postagens com um cronograma de conteúdos e ideias de posts, alinhados às melhores práticas de marketing digital.',
    },
    {
      icon: (
        <MagnifyingGlass
          size={32}
          className="h-16 w-16 fill-brand100"
          weight="fill"
        />
      ),
      title: 'Analista de Público-Alvo',
      subtitle:
        'Entenda profundamente seu público-alvo e personas, e saiba como adaptar sua comunicação para atingir os diferentes perfis de clientes.',
    },
    {
      icon: (
        <MagnifyingGlass
          size={32}
          className="h-16 w-16 fill-brand100"
          weight="fill"
        />
      ),
      title: 'Roteirista de Reels',
      subtitle:
        'Receba roteiros prontos e otimizados para criar vídeos de alta conversão no Instagram, atraindo mais engajamento e visualizações.',
    },
    {
      icon: (
        <MagnifyingGlass
          size={32}
          className="h-16 w-16 fill-brand100"
          weight="fill"
        />
      ),
      title: 'Planejador de Linha Editorial',
      subtitle:
        'Defina uma linha editorial coerente e estratégica para suas campanhas, garantindo consistência e relevância em seus conteúdos.',
    },
    {
      icon: (
        <MagnifyingGlass
          size={32}
          className="h-16 w-16 fill-brand100"
          weight="fill"
        />
      ),
      title: 'Gerador de Ideias de Stories',
      subtitle:
        'Tenha sempre à mão ideias criativas e engajadoras para stories, aumentando sua interação nas redes sociais e mantendo seu público ativo.',
    },
    {
      icon: (
        <MagnifyingGlass
          size={32}
          className="h-16 w-16 fill-brand100"
          weight="fill"
        />
      ),
      title: 'Gerador de Ofertas Irresistíveis',
      subtitle:
        'Crie ofertas que capturam a atenção e aumentam a conversão, seguindo uma metodologia de alto impacto que atrai mais clientes.',
    },
  ]

  return (
    <CardBenefitsGrid>
      {features.map((item, idx) => (
        <CardBenefitsGridBg key={idx}>
          <CardBenefitsGridIconDiv>{item.icon}</CardBenefitsGridIconDiv>
          <CardBenefitsGridH1>{item.title}</CardBenefitsGridH1>
          <CardBenefitsGridParagraph>{item.subtitle}</CardBenefitsGridParagraph>
        </CardBenefitsGridBg>
      ))}
    </CardBenefitsGrid>
  )
}
