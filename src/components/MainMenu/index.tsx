import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom';
import { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('栏目 1', '/page1', <PieChartOutlined />),
  getItem('栏目 2', '/page2', <DesktopOutlined />),
  getItem('栏目 3', '/page3', <UserOutlined />, [
    getItem('栏目301', '/page3/page301'),
    getItem('栏目302', '/page3/page302'),
    getItem('栏目303', '/page3/page303'),
  ]),
  getItem('栏目 4', '/page4', <TeamOutlined />, [getItem('栏目401', '/page4/page401'), getItem('栏目402', '/page4/page402')]),
  getItem('栏目 5', '/page5'),
];

const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const currentRoute = useLocation();
    console.log(currentRoute);

    const menuClick = (e:{key:string}) =>{
      // console.log('点击了菜单', e.key);
      // 点击跳转到对应的路由
      navigateTo(e.key);
    }
  
    let firstOpenKey:string = "";
    function findKey(obj:{key:string}){
      return obj.key === currentRoute.pathname
    }

    for(let i=0;i<items.length;i++){
      if(items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)){
        firstOpenKey = items[i]!.key as string;
        break;
      }
    }


    const [openkeys, setOpenKeys] = useState([firstOpenKey]);
    //setOpenKeys([currentRoute.pathname]);
    const handleOpenChange = (keys:string[]) =>{
      //展开和回收某项菜单的时候执行这里的代码
      console.log(keys);
      setOpenKeys([keys[keys.length-1]]);
    }

    return (
        <Menu 
        theme="dark" 
        defaultSelectedKeys={[currentRoute.pathname]} 
        mode="inline" 
        items={items} 
        onClick={menuClick}
        onOpenChange={handleOpenChange}
        openKeys={openkeys}
        />
    )
}
export default Comp;