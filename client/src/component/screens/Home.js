import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import React, { useEffect } from "react";
import "../../style/CssStyle/index.css";
import { NavLink } from "react-router-dom";
import {
  HeaderBox,
  HeaderContent,
  HeaderImage,
  HeaderSmallText,
  HeaderText,
} from "../../style/HomeStyle";
import Footer from "./Footer";
import Aos from "aos";

const mainCard = [
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316319/ProjectImage/Home_item_01_kob5kb.jpg",
    name: "pizza",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio consequuntur ut sit facilis ab accusantium culpa.",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316318/ProjectImage/Home_item_03_quwtyo.jpg",
    name: "Online order",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio consequuntur ut sit facilis ab accusantium culpa.",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316318/ProjectImage/Home_item_02_nf8wgf.jpg",
    name: "Home Delivery",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio consequuntur ut sit facilis ab accusantium culpa.",
  },
];

const service = [
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316293/ProjectImage/easy-del_bhwjjr.jpg",
    name: "Easy To Order",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316292/ProjectImage/fast-del_yyried.jpg",
    name: "Fast Delivery",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316318/ProjectImage/Quality-del_kcizk7.jpg",
    name: "Best Quality",
  },
];

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box sx={{ paddingTop: "75px" }}>
      <HeaderBox
        sx={{
          background: `url(${"https://res.cloudinary.com/dhina/image/upload/v1661316033/ProjectImage/bg-1_wo77vh.jpg"})center`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Container>
          <HeaderContent container sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                bottom: "15%",
                left: { sm: "20%", md: "53%" },
                height: 40,
                width: 40,
                display: { xs: "none", md: "block", sm: "block" },
              }}
            >
              <img
                src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-1_o5xojd.png"
                alt=""
                height={"100%"}
                width={"100%"}
              />
            </Box>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <HeaderText
                  data-aos="fade-up"
                  variant="h2"
                  component="div"
                  color={"#fff"}
                  sx={{ fontWeight: "400", display: "flex" }}
                >
                  Get Your
                </HeaderText>
                <HeaderText
                  data-aos="fade-down"
                  variant="h2"
                  component="div"
                  color="#f4474a"
                  sx={{ fontWeight: "400", ml: "10px" }}
                >
                  Pizza
                </HeaderText>
              </Box>
              <HeaderText
                data-aos="fade-left"
                color={"#fff"}
                variant="h2"
                sx={{ fontWeight: "400" }}
              >
                Delivery at your
              </HeaderText>
              <HeaderText
                data-aos="fade-right"
                variant="h2"
                component={"div"}
                color={"#fff"}
                sx={{ fontWeight: "400", display: "flex" }}
              >
                Doorstep
              </HeaderText>
              <HeaderSmallText variant="h6" color="#ccc">
                our job is filling your tummy with delicious pizza and with
                quality and fast delivery.
              </HeaderSmallText>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  className="mainButton1"
                  sx={{ transition: "0.5s" }}
                >
                  <NavLink
                    to={`/menu`}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                    className="mainButtonLink1"
                  >
                    Explore Menu
                  </NavLink>
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "50vh", sm: "60vh", md: "90vh" },
              }}
            >
              <HeaderImage
                src="https://res.cloudinary.com/dhina/image/upload/v1661316318/ProjectImage/header6_bqlyri.png"
                alt="header"
              />
            </Grid>
          </HeaderContent>
        </Container>
      </HeaderBox>
      <Box>
        <Container>
          <Box pt={5} pb={3}>
            <Box className="lineContainer" data-aos="fade-up">
              <Typography
                align="center"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#f4474a",
                  fontFamily: "Dancing Script, cursive",
                }}
                className="line"
              >
                Available
              </Typography>
            </Box>
            <Typography
              data-aos="fade-down"
              variant="h4"
              align="center"
              mt={1}
              sx={{ fontWeight: "600" }}
            >
              What We Provide
            </Typography>
            <Grid container spacing={3} mt={1}>
              {mainCard.map((item, index) => {
                return (
                  <Grid item sm={4} md={4} xs={12} key={index}>
                    <NavLink to={`/menu`} style={{ textDecoration: "none" }}>
                      <Card
                        className="mainCard"
                        sx={{ transition: "all 0.5s" }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="170"
                            image={item.img}
                            alt="main card image"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5">
                              {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Beatae optio consequuntur ut sit facilis ab
                              accusantium culpa.
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </NavLink>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <Stack pt={2} pb={5}>
            <Box className="lineContainer" data-aos="fade-up">
              <Typography
                align="center"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#f4474a",
                  fontFamily: "Dancing Script, cursive",
                }}
                className="line"
              >
                Features
              </Typography>
            </Box>
            <Typography
              data-aos="fade-down"
              variant="h4"
              align="center"
              sx={{ fontWeight: "600" }}
            >
              Our Awesome Service
            </Typography>
            <Grid container justifyContent={"center"} mt={2}>
              {service.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    lg={4}
                    align="center"
                    key={index}
                  >
                    <img src={item.img} alt="..." height={210} />
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.name}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
