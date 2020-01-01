/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"
import { mixins } from "../styles/shared-styles"
import CustomSection from "./CustomSection"
import media from "../styles/media"
import theme from "../styles/theme"
import { generateSpace } from "../styles/shared-styles"

const Container = styled(CustomSection)`
  ${mixins.flexCenter};
  margin: 0 auto;
  ${generateSpace("padding")};
  max-width: 900px;
  ${media.tablet`padding: 10px 20px;`};
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  ${media.tablet`padding: 2.2rem;`};
`

const StyledCTAButton = styled.a`
  ${mixins.bigButton};
  align-self: center;
  margin-top: 50px;
  font-family: ${theme.fonts.Inconsolata}
`

const StyledIntro = styled.div`
  color: ${theme.colors.darkYellow};
  font-size: ${theme.fontSizes.xl};
  font-weight: normal;
  margin: 0 0 18px 0px;
`

const StyledTitle = styled.h2`
  font-size: 45px;
  color: ${theme.colors.titleWhite};
  line-height: 1.1;
  span {
    color: ${theme.colors.darkYellow};
  }

  ${media.tablet`font-size: 38px !important;`};
  ${media.mobile`font-size: 32px !important;`};
`

// const FancyRandomness = styled.p`
//   font-family: "La Belle Aurore", cursive;
//   color: #798694;
//   font-size: 17.5px;
//   margin-left: 15px;
// `

const StyledDescription = styled.div`
  margin-top: 18px;
  width: 100%;
  max-width: 650px;
  font-size: ${theme.fontSizes.s};
  font-family: ${theme.fonts.FuturaPT};
  font-weight: 400;
  color: #ADBBCA;
  ${media.mobile`${theme.fontSizes.xs}`};
`

// const fancy = ["<h2>", "<h2/>"]

const Hero = ({ data }) => {
  const { frontmatter, html } = data
  return (
    <Container>
      <StyledIntro>{frontmatter.title}</StyledIntro>
      <StyledTitle>
        {frontmatter.name}
        <span>.</span>
      </StyledTitle>
      <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
      <StyledCTAButton href={`mailto:notchera@gmail.com`}>
        {" "}
        {frontmatter.cta}
      </StyledCTAButton>
    </Container>
  )
}

export default Hero
