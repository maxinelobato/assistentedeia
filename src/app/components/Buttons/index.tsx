import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ButtonFloat } from "./ButtonCta";

export function ButtonFloatWttp() {
  return (
    <>
      <ButtonFloat href="https://api.whatsapp.com/send?phone=351933965256&text=Olá%20Dra.%20Jamile,%20vim%20pelo%20site%20e%20preciso%20de%20ajuda%20com%20o%20meu%20Visto.%20Podemos%20conversar%3F%20">
        <WhatsappLogo className="h-8 w-8" weight="fill" />
      </ButtonFloat>
    </>
  );
}
