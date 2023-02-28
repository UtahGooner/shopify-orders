import React, {useState} from "react";
import AlertList from "../ducks/alerts/AlertList";
import OrdersStatusBar from "../ducks/orders/OrdersStatusBar";
import OrdersList from "../ducks/orders/OrdersList";
import {Tab, TabList} from "chums-components";
import CurrentOrder from "../ducks/current-order/CurrentOrder";
import FulfillmentList from "../ducks/orders/FulfillmentList";

const tabs: Tab[] = [
    {id: 'orders', title: 'Current Order'},
    {id: 'fulfillments', title: 'Fulfillments'}
]
export default function App() {
    const [tab, setTab] = useState(tabs[0].id);
    const onChangeTab = (tab: Tab) => setTab(tab.id);

    return (
        <div>
            <AlertList/>
            <div className="row g-3">
                <div className="col-lg-9 col-md-8 col-6">
                    <OrdersStatusBar/>
                    <OrdersList/>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <TabList tabs={tabs} currentTabId={tab} onSelectTab={onChangeTab} className="mb-1"/>
                    {tab === 'orders' && (<CurrentOrder/>)}
                    {tab === 'fulfillments' && (<FulfillmentList/>)}
                </div>
            </div>
        </div>
    )
}
