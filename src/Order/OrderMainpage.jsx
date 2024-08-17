import { useState } from 'react';
import order from '../assets/shop/banner2.jpg'
import Cover from '../Menu/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../Hooks/UseMenu';
import OrderTabCategorey from './OrderTabCategorey';

const OrderMainpage = () => {
    const [tabindex,setTabIndex]=useState(0);
    const [menu]=UseMenu();
    const desert=menu.filter(desert=>desert.category==='dessert');
    const salad=menu.filter(desert=>desert.category==='salad');
    const drinkst=menu.filter(desert=>desert.category==='drinks');
    const pizza=menu.filter(desert=>desert.category==='pizza');
    const soup=menu.filter(desert=>desert.category==='soup');

    return (
        <div>
            <Cover img={order} tittle={"order now"} ></Cover>

               <div className=' mt-8'>
                
            <Tabs selectedIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="text-xl font-bold">
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Desert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
       <OrderTabCategorey items={salad}></OrderTabCategorey>

      </TabPanel>
      <TabPanel>
       <OrderTabCategorey items={pizza}></OrderTabCategorey>

      </TabPanel>
      <TabPanel>
       <OrderTabCategorey items={soup}></OrderTabCategorey>

      </TabPanel>
      <TabPanel>
       <OrderTabCategorey items={desert}></OrderTabCategorey>

      </TabPanel>
      <TabPanel>
       <OrderTabCategorey items={drinkst}></OrderTabCategorey>

      </TabPanel>
     
    </Tabs>
               </div>
        </div>
    );
};

export default OrderMainpage;