import { Button, Heading, Stack } from "@chakra-ui/react"

export default function ReadyTo() {
	return (
		<Stack
			bgImage="url('/images/ready-to.jpg')"
			bgPosition="center"
			bgRepeat="no-repeat"
			justify="center"
			align="center"
			py={14}
			borderRadius="2xl"
			spacing={8}
		>
			<Heading color="white" fontWeight="semibold">¿Qué dices, estás listx?</Heading>
			<Button w="fit-content" color="brand.500">¡Comencemos a crear!</Button>
		</Stack>
	)
}