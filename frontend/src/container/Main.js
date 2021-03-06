import React, { Component } from 'react'
import Header from '../components/Header';
import {
  TitleBanner,
  DescriptionBanner,
  Banner,
  InfoBanner,
  InfoBannerContainer,
  ButtonContainerBanner,
  ButtonContactBanner,
  ItemInfoProduct,
  ItemInfoProductContainer,
  ItemInfoProductHeader,
  ItemInfoContent
} from '../resources/styles/home';
import { ButtonPrimaryBig, ButtonSecondaryBigOutline, ImageIconButton } from '../resources/styles/buttons';
import { textColor } from '../resources/styles/variables';

const imageIcon = require('../resources/images/arrow.svg')

export default class Main extends Component {
  render() {
    return (
      <div>
        <Banner>
          <Header />

          <InfoBannerContainer>
            <InfoBanner>
              <TitleBanner>Manage, get in touch and get more clients.</TitleBanner>
              <DescriptionBanner>Konecty is a CRM Tool focused on offering users facility, flexibility and speed, allowing customization and development of new applications.</DescriptionBanner>

              <ButtonContainerBanner>
                <ButtonPrimaryBig>Watch Demo <ImageIconButton src={imageIcon} /></ButtonPrimaryBig>
                <ButtonContactBanner>
                  <ButtonSecondaryBigOutline>Contact Us</ButtonSecondaryBigOutline>
                </ButtonContactBanner>
              </ButtonContainerBanner>
            </InfoBanner>
          </InfoBannerContainer>
        </Banner>

        <main>
          <h1>Complete tool, from A to Z</h1>
          <p>Plan, execute and follow-up your marketing campaigns, generating demand for your products and services.</p>

          <ItemInfoProductContainer>
            <ItemInfoProduct>
              <ItemInfoProductHeader>
                <img src={require('../resources/images/Icon01.svg')} alt="Map of processess" />
              </ItemInfoProductHeader>
              <ItemInfoContent>
                <h4>Map of processes</h4>
                <p>Manage activities and processes organizing your project and finding the best way to optimize time and resources.</p>
              </ItemInfoContent>
            </ItemInfoProduct>

            <ItemInfoProduct>
              <ItemInfoProductHeader>
                <img src={require('../resources/images/Icon02.svg')} alt="Forecast & Reportss" />
              </ItemInfoProductHeader>
              <ItemInfoContent>
                <h4>Forecast & Reportss</h4>
                <p>Run your business with predictability based on the forecast coming from your sales pipeline and on the reports coming from your past sales experience.</p>
              </ItemInfoContent>
            </ItemInfoProduct>

            <ItemInfoProduct>
              <ItemInfoProductHeader>
                <img src={require('../resources/images/Icon03.svg')} alt="Real-time View" />
              </ItemInfoProductHeader>
              <ItemInfoContent>
                <h4>Real-time View</h4>
                <p>Don’t wait for tomorrow to make decisions! Get all this information in real-time, having the power to act fast and accurately at any time.</p>
              </ItemInfoContent>
            </ItemInfoProduct>
          </ItemInfoProductContainer>
        </main>
      </div>
    )
  }
}
