import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='main'>
<img src='https://chatapp-13732.web.app/static/media/pakistanflag.3cabd6a02c20508e10a5d28e2fa8a859.svg' style={{height:"70px",width:"70px", backgroundColor:"#9CA3AF", borderRadius:"30px", marginTop:"60px", marginLeft:"55px"}}/>
<div className='side-bar'>
    <div className='dashboard'>
    <img src='https://chatapp-13732.web.app/static/media/dashboard-inactive.5a3f47e2fb4faa9102be0b457cdfdbf7.svg'/>

    <li><Link className="link"  to={"/"}>Dashboard</Link></li>
</div>

<div className='halka-Report' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/ic_local_library_24px.e08d9ff4fbb9247e3fa02d47d37ac07d.svg'/>
    <li><Link className='link' to={"/halka"}>Halka Report</Link></li>

</div>

<div className='Search' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/search.98f92ac166ab8caa6145f785bad4cf41.svg'/>
    <li><Link className='link' to={"/search"}>Search</Link></li>
    </div>


    <div className='team-management' style={{display:"flex"}}>
    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADT0lEQVRoge3a22ucRRjH8U+2jW3qoR4gKMEghVpBpYiKogUVjHio9MJbQQVFvCkVwQvBc1HxVv8AEUURRC1SFSoeS6xHrChKRbC1WoyaKqjFVNeLZ9bdVLPu+86sWWG/8PJk2Znf/J6Zed93ZjYMGdIXRvqk28C5OAercSx+x7eYxvP4pU9tF2EZbsXXaHa59mF9yYZLjsgqbMGp6fNOvIk9+Ap/YBJX4jzM4RE8jtcK+shiHLtFb78rplQ37jR/hJ7BEf002CtPCUNvYKyH8g2chBvEaDXxXN/c9cgqMW0OYE2N+pP4QSRzSUFfldmYTDyZoXFX0nisiKOabEkmrsnQWJs0Pi3iqCZvJxP/doN34zAcTNdoHYFGRuMtjktxf4bGb+KFuQRL6wiUSGQuxWaGRkMk0RSjUksgl5kUxzM0JkQiM9odU4kSiexL8YQMjdZje1ddgRKJ7ExxbYbGhSm+XlegRCIfpHhWhsZFKS5qIitSPFu9Reh4qssiL+3fE0+bm2vWX4oHDMCbfW8ysTpD4/yk8UpdgRJT66MUz8zQaO1hvsz0ksWNoje/UG963S0SaOLqgr4qMyo2Rk3t0emVEfwotgFPq7k8KckIZsVb+fAK9U4RHfBZroES9whhZofo0Q0V6l2V4nQhH0W4XiT0jt7eJ8u09/lX9NFXZcbEiUkTD/ZQ/tFU9n3lZkYx1gtz3/RQtnWCkrNG6xvHq55IEQZuSOsyTGQBTk/xGN13jBP/UGdg2IDvtOf+btyC03AkVoob+zZxD7XK7cHFi+B3HiOYwlZtYy9ge8fnha7teDX93VqiXPDf2o8D55vwSYexn3G7OERYIk7dn0hlfkrXx2LPcZmY1qO4F7926HwozoRX6CNH4x5xhtVqeAab5R0+TOB+86fm97gDR2Xo/o2GmO+zHQ3twLVYXrCdMVyXtDsT2qTAg2kltnUIb8O6XNEeWIeXO9p9ScboLMdbSWgvLi1gsCqXa/+UN63mDHg4CezCicWsVWcSnycvD1WtvEZslA4ajIXdGcLLHE6uUvE+0QNb+2CqLi8KT5sP/aLbk2AqxUX/ba+DZ1OcOvSLbju5WfHeGET2i/XcXyyUyJgB/88E4fHAYpsYMuT/wp/qo9N0S6ed7wAAAABJRU5ErkJggg=='/>
    <li><Link className='link' to={"/team"}>Team Management</Link></li>
</div>

<div className='call-records' style={{display:"flex"}}>
    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADT0lEQVRoge3a22ucRRjH8U+2jW3qoR4gKMEghVpBpYiKogUVjHio9MJbQQVFvCkVwQvBc1HxVv8AEUURRC1SFSoeS6xHrChKRbC1WoyaKqjFVNeLZ9bdVLPu+86sWWG/8PJk2Znf/J6Zed93ZjYMGdIXRvqk28C5OAercSx+x7eYxvP4pU9tF2EZbsXXaHa59mF9yYZLjsgqbMGp6fNOvIk9+Ap/YBJX4jzM4RE8jtcK+shiHLtFb78rplQ37jR/hJ7BEf002CtPCUNvYKyH8g2chBvEaDXxXN/c9cgqMW0OYE2N+pP4QSRzSUFfldmYTDyZoXFX0nisiKOabEkmrsnQWJs0Pi3iqCZvJxP/doN34zAcTNdoHYFGRuMtjktxf4bGb+KFuQRL6wiUSGQuxWaGRkMk0RSjUksgl5kUxzM0JkQiM9odU4kSiexL8YQMjdZje1ddgRKJ7ExxbYbGhSm+XlegRCIfpHhWhsZFKS5qIitSPFu9Reh4qssiL+3fE0+bm2vWX4oHDMCbfW8ysTpD4/yk8UpdgRJT66MUz8zQaO1hvsz0ksWNoje/UG963S0SaOLqgr4qMyo2Rk3t0emVEfwotgFPq7k8KckIZsVb+fAK9U4RHfBZroES9whhZofo0Q0V6l2V4nQhH0W4XiT0jt7eJ8u09/lX9NFXZcbEiUkTD/ZQ/tFU9n3lZkYx1gtz3/RQtnWCkrNG6xvHq55IEQZuSOsyTGQBTk/xGN13jBP/UGdg2IDvtOf+btyC03AkVoob+zZxD7XK7cHFi+B3HiOYwlZtYy9ge8fnha7teDX93VqiXPDf2o8D55vwSYexn3G7OERYIk7dn0hlfkrXx2LPcZmY1qO4F7926HwozoRX6CNH4x5xhtVqeAab5R0+TOB+86fm97gDR2Xo/o2GmO+zHQ3twLVYXrCdMVyXtDsT2qTAg2kltnUIb8O6XNEeWIeXO9p9ScboLMdbSWgvLi1gsCqXa/+UN63mDHg4CezCicWsVWcSnycvD1WtvEZslA4ajIXdGcLLHE6uUvE+0QNb+2CqLi8KT5sP/aLbk2AqxUX/ba+DZ1OcOvSLbju5WfHeGET2i/XcXyyUyJgB/88E4fHAYpsYMuT/wp/qo9N0S6ed7wAAAABJRU5ErkJggg=='/>
    <li><Link className='link' to={"/records"}>Call Records</Link></li>
</div>

<div className='ertm' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/polling_station.dab24b34ba2668a671662b126b856b6d.svg'/>
    <li><Link className='link' to={"/ertm"}>ERTM</Link></li>
</div>

<div className='reports' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/polling_station.dab24b34ba2668a671662b126b856b6d.svg'/>
    <li><Link className='link' to={"/reports"}>Reports</Link></li>
</div>


<div className='polling-station' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/polling_station.dab24b34ba2668a671662b126b856b6d.svg'/>
    <li><Link className='link' to={"/polling"}>Polling Station</Link></li>
</div>

<div className='polling-day-dashboard' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/polling_station.dab24b34ba2668a671662b126b856b6d.svg'/>
    <li><Link className='link' to={"/pollingday"}>Polling Day Dashboard</Link></li>
</div>

<div className='compaign-mangment' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/polling_station.dab24b34ba2668a671662b126b856b6d.svg'/>
    <li><Link className='link' to={"/mangment"}>Compaign Mangment</Link></li>
</div>

<div className='transport' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/polling_station.dab24b34ba2668a671662b126b856b6d.svg'/>
     <li><Link className='link' to={"/transport"}>Transport Assignment & Management</Link></li>
</div>

<div className='suspicious-votes' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/suspicious.d55c1071744d166d03587f7a3806ec3c.svg'/>
  <li><Link className='link' to={"/suspicious"}>Suspicious Votes</Link></li>
</div>

<div className='map' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/polling_station.dab24b34ba2668a671662b126b856b6d.svg'/>
    <li><Link className='link' to={"/map"}>Maps</Link></li>
</div>

<div className='log-out' style={{display:"flex"}}>
    <img src='https://chatapp-13732.web.app/static/media/ic_exit_to_app_24px.f60e12d2a941a2d5b738d64ca4136a95.svg'/>
  <li><Link className='link' to={"/logout"}>Logout</Link></li>
</div>

</div>

    </div>
  )
}

export default Sidebar