import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

import Box from '../components/Box';
import CallToActionButton from '../components/CallToActionButton';
import Headline from '../components/Headline';

import NetworksIcon from '../../static/img/icons/icon-networks-gradient.png';
import StandardsIcon from '../../static/img/icons/icon-standards-gradient.png';
import ToolsIcon from '../../static/img/icons/icon-tools-gradient.png';
import GuidesIcon from '../../static/img/icons/icon-guides-gradient.png';
import FAQIcon from '../../static/img/icons/icon-faq-gradient.png';

function Index() {
  return (
    <Layout description="Network, Standards, Tools and Guides for development on LUKSO and related standards.">
      <div className={styles.container}>
        <Headline />
        <CallToActionButton
          bgColor="#6270A4"
          color="#ffffff"
          link="./learn/introduction"
          text="START BUILDING WITH LUKSO STANDARDS"
        />
        <br />
        <CallToActionButton
          bgColor="#FFCCCC"
          color="#383838"
          link="https://app.buidlbox.io/lukso/build-up-2"
          text="JOIN THE HACKATHON (30 Oct - 27 Nov)"
        />
        <br />
        <div className={styles.cardContainer}>
          <Box
            icon={NetworksIcon}
            link="./networks/mainnet/parameters/"
            title="NETWORKS"
            className="networks"
            content="Learn how to participate in LUKSO's test networks."
          />
          <Box
            icon={StandardsIcon}
            link="./standards/introduction"
            title="STANDARDS"
            className="standards"
            content="Learn about the new smart contract standards that will change the way we interact with Blockchain."
          />
          <Box
            icon={ToolsIcon}
            link="./tools/getting-started"
            title="TOOLS"
            className="tools"
            content="Discover tools that help you to interact with Universal Profiles and NFT2.0."
          />
        </div>
        <div className={styles.cardContainer}>
          <Box
            icon={GuidesIcon}
            link="./learn/introduction"
            title="LEARN"
            className="learn"
            content="Learn about the LUKSO ecosystem"
          />
          <Box
            icon={FAQIcon}
            link="./faq/lukso/general-information"
            title="FAQ"
            className="faq"
            content="Frequently Asked Questions."
          />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
