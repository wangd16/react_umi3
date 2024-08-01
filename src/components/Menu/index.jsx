import { NavLink } from 'umi';

function Menu({}) {
  return (
    <div className={StyleSheet.menu_content}>
      <div>
        <NavLink
          to="/goods/1"
          activeStyle={{ color: '#1677ff', backgroundColor: '#e6f4ff' }}
        >
          商品分类1
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/goods/2"
          activeStyle={{ color: '#1677ff', backgroundColor: '#e6f4ff' }}
        >
          商品分类2
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/goods/3"
          activeStyle={{ color: '#1677ff', backgroundColor: '#e6f4ff' }}
        >
          商品分类3
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: '/goods/4', search: '?a=1' }}
          activeStyle={{ color: '#1677ff', backgroundColor: '#e6f4ff' }}
        >
          商品分类4
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: '/goods/5', query: { a: 2 } }}
          activeStyle={{ color: '#1677ff', backgroundColor: '#e6f4ff' }}
        >
          商品分类5
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
