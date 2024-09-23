import Image from 'next/image'
import imgDesktop from '@/app/assets/desktop.webp'
import imgMobile from '@/app/assets/mobile.webp'

import {
  HeroCard,
  HeroCardH1,
  HeroCardText,
  HeroProperty,
  HeroRoot,
} from './HeroComponents'
import { ArrowFatRight } from '@phosphor-icons/react/dist/ssr'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'

export function Hero() {
  return (
    <>
      <HeroRoot>
        <Image
          src={imgDesktop}
          alt="BgImage"
          sizes="100vh"
          priority
          fill
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:bg-[imgDesktop]"
        />
        <Image
          src={imgMobile}
          alt="BgImage"
          sizes="100vh"
          priority
          fill
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:hidden sm:bg-[imgMobile]"
        />
        <HeroProperty>
          <HeroCard>
            <HeroCardText>
              <HeroCardH1>
                Assistente de IA - Pack de Marketing: {''}
                <span className="z-50 bg-clip-text font-black text-white">
                  Tudo o que Você Precisa para Alavancar sua Estratégia de
                  Conteúdo
                </span>
              </HeroCardH1>
            </HeroCardText>
            <ButtonHome href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20">
              <ButtonHomeText>quero meu Pack de IA</ButtonHomeText>
              <ButtonHomeFlex>
                <ArrowFatRight
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  weight="fill"
                />
              </ButtonHomeFlex>
            </ButtonHome>
          </HeroCard>
        </HeroProperty>
      </HeroRoot>
    </>
  )
}
