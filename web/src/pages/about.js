import Head from 'next/head';
import NextLink from 'next/link';
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Stack,
    SvgIcon,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Image from 'next/image';



const Page = () => (
    <>
        <Head>
            <title>
                Acerca de | ROBDA
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 4
            }}
        >
            <Container maxWidth="xl">
                    <Stack spacing={3}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h4">
                                    Acerca de ROBDA
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={8}>
                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                >
                                    <Button
                                        component={NextLink}
                                        color="inherit"
                                        startIcon={(
                                            <SvgIcon fontSize="small">
                                                <ArrowLeftIcon />
                                            </SvgIcon>
                                        )}
                                        href="/"
                                    >
                                        Volver al menú
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Card>
                            <CardContent>
                                <Image src="/assets/logo_uca.png" alt="Logo de la Universidad de Cádiz" width={500} height={180}/>
                                <Typography variant="body1" paragraph>
                                    ROBDA es una plataforma web interactiva de la Universidad de Cádiz que permite a los usuarios responder cuestionarios de tipo test enfocados en teoría de bases de datos. Se trata de una aplicación colaborativa en la que los propios alumnos tienen la oportunidad de contribuir al desarrollo de preguntas y reportar cualquier problema que encuentren en los distintos modos de juegos diseñados para hacer el aprendizaje mucho más ameno. Con esta combinación de características, ROBDA busca fomentar la participación activa de los usuarios, brindando un entorno educativo dinámico y en constante crecimiento.
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    Según la Real Academia Española, <NextLink href="https://dle.rae.es/robda" target="_blank">ROBDA</NextLink> es el <Box component="span" sx={{fontStyle: 'italic'}}>"grupo de jinetes que vigilaban fuera del castillo o del real para avisar al ejército de la inminencia del peligro".</Box> Esta definición podría considerarse como una metáfora de la función de esta aplicación, en la que los alumnos deben de avisar a los profesores de los preguntas erróneas que acechan nuestra plataforma.
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    Este proyecto ha sido desarrollado bajo licencia GNU GPL v3.0, y ha sido financiado en la convocatoria de Innovación Docente de la Universidad de Cádiz 2022/23 "Proyecto de Innovación y Mejora Docente de la UCA" (código sol-202200229934-tra).
                                    Esta página web está basada en la plantilla <NextLink href="https://material-kit-react.devias.io" target="_blank">Material Kit React</NextLink>. 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
            </Container>
        </Box>
    </>
);

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
