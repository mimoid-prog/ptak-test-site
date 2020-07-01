import React from "react"
import SecondaryLayout from "layouts/SecondaryLayout"
import { Container, TertiaryTitle, PrimaryButton } from "styles/globalStyles"
import img1 from "images/photos/home-image-1.jpg"
import img2 from "images/photos/home-image-2.jpg"
import styled from "styled-components"

const S = {}
S.ForVisitorsBox = styled.div`
  img {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex-direction: ${({ reversed }) => (reversed ? "row-reverse" : "row")};
    margin-bottom: 40px;

    .text-box {
      width: 55%;
      margin-right: ${({ reversed }) => (reversed ? "0" : "40px")};
      margin-left: ${({ reversed }) => (reversed ? "40px" : "0")};

      p {
        margin: 0;
      }
    }

    .img-box {
      width: 45%;
    }

    img {
      width: 100%;
    }
  }
`

const GS = {}
GS.Container = Container
GS.TertiaryTitle = TertiaryTitle
GS.PrimaryButton = PrimaryButton

const ForVisitors = () => {
  return (
    <SecondaryLayout>
      <GS.Container>
        <S.ForVisitorsBox>
          <div className="text-box">
            <GS.TertiaryTitle>
              Największe targi rozwiązań dla branży cukierniczej, lodziarskiej,
              kawiarnianej i piekarniczej
            </GS.TertiaryTitle>
            <p>
              In commodo veniam dolore elit. Nisi ut sint nisi ex ea. Enim
              nostrud dolor consectetur sunt excepteur reprehenderit excepteur
              esse est. Ipsum eu est in Lorem amet pariatur velit commodo magna
              cupidatat in sit. Ad labore non ullamco adipisicing officia ea
              aliqua qui non Lorem. In commodo veniam dolore elit. Nisi ut sint
              nisi ex ea. Enim nostrud dolor consectetur sunt excepteur
              reprehenderit excepteur esse est. Ipsum eu est in Lorem amet
              pariatur velit commodo magna cupidatat in sit. Ad labore non
              ullamco adipisicing officia ea aliqua qui non Lorem.
            </p>
          </div>
          <div className="img-box">
            <img src={img1} alt="obrazek" />
          </div>
        </S.ForVisitorsBox>
        <S.ForVisitorsBox reversed>
          <div className="text-box">
            <p>
              In commodo veniam dolore elit. Nisi ut sint nisi ex ea. Enim
              nostrud dolor consectetur sunt excepteur reprehenderit excepteur
              esse est. Ipsum eu est in Lorem amet pariatur velit commodo magna
              cupidatat in sit. Ad labore non ullamco adipisicing officia ea
              aliqua qui non Lorem. In commodo veniam dolore elit. Nisi ut sint
              nisi ex ea. Enim nostrud dolor consectetur sunt excepteur
              reprehenderit excepteur esse est. Ipsum eu est in Lorem amet
              pariatur velit commodo magna cupidatat in sit. Ad labore non
              ullamco adipisicing officia ea aliqua qui non Lorem.
            </p>
            <PrimaryButton to="/">Eee</PrimaryButton>
          </div>
          <div className="img-box">
            <img src={img2} alt="obrazek" />
          </div>
        </S.ForVisitorsBox>
      </GS.Container>
    </SecondaryLayout>
  )
}

export default ForVisitors
