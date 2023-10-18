import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Deposite from './Deposite';
import WithDraw from './WithDraw';

const Home = () => {
    return (
        <div className="mt-4 px-2">
              <Tabs>
    <TabList>
      <Tab>Deposit</Tab>
      <Tab>Withdraw</Tab>
    </TabList>

    <TabPanel>
         <Deposite/>
    </TabPanel>
    <TabPanel>
         <WithDraw/>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Home;