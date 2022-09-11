import {
  Box,
  Stack,
  Typography,
  MenuList,
  MenuItem,
  Grid,
  Container,
} from "@mui/material";
import "../../style/CssStyle/index.css";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Aos from "aos";

const chef = [
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316264/ProjectImage/chef-1_q2fjme.png",
    name: "Dharani",
    body: "Senior Chef",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316292/ProjectImage/chef-2_azu1lh.png",
    name: "Dhanush",
    body: "Junior Chef",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316292/ProjectImage/chef-3_zp3yjk.png",
    name: "Priya",
    body: "Junior Chef",
  },
  {
    img: "https://res.cloudinary.com/dhina/image/upload/v1661316291/ProjectImage/chef-4_nujus4.png",
    name: "Vikram",
    body: "Junior Chef",
  },
];

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box sx={{ mt: "75px" }}>
      <Stack
        sx={{
          background: `url(${"https://res.cloudinary.com/dhina/image/upload/v1661316033/ProjectImage/bg-1_wo77vh.jpg"})center`,
          backgroundSize: "cover",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          data-aos="zoom-in"
          variant="h2"
          fontWeight={600}
          color="#fff"
          sx={{ zIndex: 1 }}
        >
          About us
        </Typography>
        <Box
          data-aos="fade-up"
          sx={{
            position: "absolute",
            bottom: { sm: "-6%", xs: "-10%", md: "-10%" },
            left: "20%",
            height: 150,
            width: 215,
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1661422458/ProjectImage/header-shape-4_tqtwrf.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            position: "absolute",
            top: { sm: "-5%", xs: "-10%", md: "-10%" },
            right: "25%",
            height: 120,
            width: 160,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1661422458/ProjectImage/header-shape-4_tqtwrf.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            top: "10%",
            left: "20%",
            height: 60,
            width: 90,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-2_hwtb5a.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            position: "absolute",
            top: "-4%",
            left: "6%",
            height: 60,
            width: 90,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662288600/ProjectImage/header-shape-5_rkq51z.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-down"
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            height: 60,
            width: 90,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-2_hwtb5a.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-right"
          sx={{
            position: "absolute",
            top: "10%",
            right: "4%",
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
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            bottom: "6%",
            right: "40%",
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
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            bottom: "70%",
            right: "6%",
            height: 30,
            width: 30,
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
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            top: "50%",
            left: "-1%",
            height: 100,
            width: 100,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-3_sjcmi8.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            position: "absolute",
            top: "30%",
            right: "37%",
            height: 100,
            width: 100,
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1662029915/ProjectImage/header-shape-3_sjcmi8.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <MenuList sx={{ display: "flex" }}>
          <MenuItem sx={{ padding: "0px", height: "0px" }}>
            <NavLink
              to={`/`}
              className="Menulist"
              style={{ paddingRight: "20px" }}
            >
              Home
            </NavLink>
            <Typography
              color={"#fff"}
              className="dot"
              sx={{ cursor: "default" }}
            >
              About us
            </Typography>
          </MenuItem>
        </MenuList>
      </Stack>
      <Box pt={5} pb={6}>
        <Box className="lineContainer">
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
            About us
          </Typography>
        </Box>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1900"
          variant="h4"
          align="center"
          mt={1}
          sx={{ fontWeight: "600" }}
        >
          Welcome to PizzaWorld
        </Typography>
        <Container>
          <Grid container mt={3}>
            <Grid
              item
              lg={5}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="h3" fontWeight={700}>
                  We Serve The Best Pizza Of The Country
                </Typography>
                <Typography mt={4}>
                  We are the country's no.1 Fast food retailer. Country's best
                  pizza are delivered by us. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Consequatur est fuga corrupti
                  saepe eius excepturi deleniti cum corporis magnam, tempora ad
                  harum accusantium cupiditate eum ullam tenetur similique vitae
                  minus. We gain the satisfaction of our customers with our
                  delicate service and extreme high food quality.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={7} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://res.cloudinary.com/dhina/image/upload/v1661316264/ProjectImage/aboutMain_nvpcpw.webp"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            className="lineContainer"
            data-aos="fade-up"
            data-aos-duration="2000"
            sx={{ mt: 3 }}
          >
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
              Chef
            </Typography>
          </Box>
          <Typography
            data-aos="fade-down"
            data-aos-duration="2000"
            variant="h4"
            align="center"
            mt={1}
            sx={{ fontWeight: "600" }}
          >
            Our chef
          </Typography>
          <Grid container align="center" sx={{ mt: 4 }}>
            {chef.map((item, index) => {
              return (
                <Grid item lg={3} xs={12} sm={6} sx={{ mt: 2 }} key={index}>
                  <Box sx={{ height: 260 }}>
                    <img src={item.img} alt="chef" height="100%" />
                  </Box>
                  <Typography
                    variant="h5"
                    color="#ffcf3f"
                    fontWeight={600}
                    sx={{ mt: 2 }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="h6">{item.body}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;
