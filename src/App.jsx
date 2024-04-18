import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Hero } from 'components/Hero/Hero';
import { Featured } from 'components/Featured/Featured';
import { Classes } from 'components/Classes/Classes';
import { Webinar } from 'components/Webinar/Webinar';
import { Pricing } from 'components/Pricing/Pricing';
import { GetItOnApps } from 'components/GetItOnApps/GetItOnApps';
import { StyledApp } from './App.styled';

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Hero />
      <Featured />
      <Classes />
      <Webinar />
      <Pricing />
      <GetItOnApps />
      <Footer />
    </StyledApp>
  );
};
