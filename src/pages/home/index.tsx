import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";
import { NextSeo } from 'next-seo';
import previewImage from '../../assets/app-preview.png'
import Image from "next/image";
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Google Calendar"
        description="Conecte seu calendário e permita que as pessoas marquem agendamento no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading as="h1" size={"4xl"}>Agendamento descomplicado</Heading>
          <Text size={"xl"}>
            Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendário simbolizando aplicação em funcionamento"
          />
        </Preview>
      </Container>
    </>
  )
}
