import React from 'react';

export default class Tabs extends React.Component {
    
    render() {
        const { activeTab, tabs } = this.props;
        return (
            <ul className="tabs">
                {
                    Object.keys(tabs).map((key) =>
                        <li key={key}>
                            <button className={`tab ${activeTab === key.toString() ? 'active' :''}`} data-tab={key} onClick={(e) => this.props.changeTab(e)}>{tabs[key].name}</button>
                        </li>
                    )
                }
            </ul>
        )
    }
}