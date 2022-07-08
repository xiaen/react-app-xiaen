import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

function TabBarPage() {

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '我的消息',
      icon: <MessageOutline />,
    },
    {
      key: '/personalCenter',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]
  const navigate = useNavigate();
  const tabChange = (val) => {
    setActiveKey(val)
    navigate(val)
  }
  const [activeKey, setActiveKey] = useState('');
  let location = useLocation();
  useEffect(() => {
    setActiveKey(location.pathname)
  }, [location.pathname])
  return (
    <div>
      <TabBar onChange={tabChange} activeKey={activeKey}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}

export default TabBarPage