import { SideBar } from 'antd-mobile'
function Todo() {
  const tabs = [
    { key: 1, title: 'sdf' }
  ]
  return (
    <div>
      <SideBar>
        {tabs.map(item => (
          <SideBar.Item key={item.key} title={item.title} />
        ))}
      </SideBar>
    </div>
  );
}

export default Todo;
