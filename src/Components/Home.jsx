import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Deposite from './Deposite';
import WithDraw from './WithDraw';
import Filter from './Filter';
import Verify from './Verify';
import useAllPayment from '../hooks/useAllPayment';
import axios from 'axios';
import addNotification from 'react-push-notification';

const Home = () => {
    
  






    return (
        <div className="mt-4 px-2 bg-gray-100">

  
              <Tabs>
    <TabList className="flex justify-around items-center w-full p-1 mx-auto text-white rounded  Membar-Menu-Box  ">
      <Tab className=" w-2/6  py-1 rounded text-center">Deposit</Tab>
      <Tab className=" w-2/6  py-1 rounded text-center ">Withdraw</Tab>
      <Tab className=" w-2/6  py-1 rounded text-center">Verify</Tab>
    </TabList>

    <TabPanel>
         <Deposite/>
    </TabPanel>
    <TabPanel>
         <WithDraw/>
    </TabPanel>
    <TabPanel>
         <Verify/>
    </TabPanel>
  </Tabs> 
        </div>
    );
};

export default Home;