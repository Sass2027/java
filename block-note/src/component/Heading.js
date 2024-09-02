import { Outlet, Link, useNavigate } from "react-router-dom";
import './Heading.css';
import { useEffect, useState } from "react";


const Heading = (props) => {

    //const navigate = useNavigate();

        // const goAway = (path) => {
        //     navigate(path)
        // };

        const [isDarke, setIsDarke] = useState(false);

        useEffect(()=>{
            const toggleVariant = document.querySelector("header div.mode div.toggle label div#variant");
            if (isDarke===false) {
                if (toggleVariant.classList.contains("right")) {
                    toggleVariant.classList.remove("right");
                }
                toggleVariant.classList.add("left");
            } else {
                if (toggleVariant.classList.contains("left")) {
                    toggleVariant.classList.remove("left");
                }
                toggleVariant.classList.add("right");
            }
        })

        const toggleAction = (checking) => {
            
            setIsDarke(checking);
            if (isDarke) {
                props.onModeLight({tone1:"#43766C", tone11:"#F8FAE5", tone22:"#FFFFFF", isDark:false, usingClass:"onLightMode"});
            } else {
                props.onModeLight({tone1:"#F8FAE5", tone11:"#43766C", tone22:"#1f1f1f", isDark:true, usingClass:"onDarktMode"});
            }
            
        };


    return <>
        <header className="" style={{background:props.palette.tone11}}>
            <main>
                <Link to={"/"} id="logo" className="" style={{color:props.palette.tone1}}><div>Bloc<span>Note</span></div></Link>
            </main>
            <div className={"onglets "+props.palette.usingClass}>
                <Link to={"/new"}>Prendre note</Link>
                <Link to={"/list"}>Mes notes</Link>
            </div>
            <div className="mode">
                <input type="checkbox" style={{display:"none"}} id="modeCheck" onChange={(e)=>toggleAction(e.target.checked)}></input>
                <div className="toggle">
                    <span>Light</span>
                    <label htmlFor="modeCheck" id="modeChecking">
                        <div id="variant" className="left toneOneBG" style={{background:props.palette.tone1}}>
                            {isDarke ? <i class="fa-regular fa-moon"></i> : <i class="fa-regular fa-lightbulb"></i>} 
                        </div>
                    </label>
                    <span>Dark</span>
                </div>
            </div>
        </header>

        <Outlet></Outlet>
    </>
}

export default Heading;