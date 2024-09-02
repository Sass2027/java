
import { useEffect, useState } from "react"
import "./New_note.css"
import { useParams, useLocation } from "react-router-dom";

const NewNote = ({palette}) => {
    const [noteContent, setNoteContent] = useState("");
    const [colChoose, setColChoose] = useState("ligthgray");
    const {actionURL}=useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    
    useEffect(()=>{
        //FONCTION DE MISE EN PLACE DES DONNEES POUR UN /updatenote
        window.addEventListener("load", function () {
            if (actionURL==="updatenote") {
                const q = queryParams.get("q");
                setNoteContent(q)
            }
        })

        //Buton d'envoie
        if (noteContent === "") {
            document.querySelector("#send_note").disabled=true;
            document.querySelector("#send_note").style.background="gray";
            document.querySelector("#send_note").style.cursor="no-drop";
        }else{
            document.querySelector("#send_note").disabled=false;
            document.querySelector("#send_note").style.background=palette.tone1;
            document.querySelector("#send_note").style.cursor="pointer";
        }

        //COLOR CHANGING PART
        document.querySelector("div.content_new").style.background = colChoose;
        document.querySelector("div.content_new aside button#chosenCol span").style.background = colChoose;
        //Param :action(newnote / updatenote)
        
    },[noteContent,colChoose])

    const noteContentVerify = (x) => {
        setNoteContent(x)
    }

    const choseColor = (x)=>{
        document.querySelector("#chosenCol").setAttribute("data-color", x)
        //Le set estfais ici et on assigne la variable dans le value
        setColChoose(x)
    }

    const sendNote = ()=>{
        alert("Envoie du contenu ci après àa la Base de donnée😏 "+colChoose+" : \n" + noteContent)
    }

    const updateNote = ()=>{
        alert("Misa à jour😏 "+colChoose+" : \n" + noteContent)
    }

    return <div className="content_new">
        <article>
            <En_tete palette={palette} noteContent={noteContent} colChoose={colChoose}></En_tete>
            <div className="obj_title" style={{background:palette.tone22}}>
                <label>Objet : </label>
                <input type="text" style={{background:palette.tone22}} ></input>
            </div>
            <div className="note_content" style={{background:palette.tone22}} id="note_content">
                <textarea placeholder="Votre note ici..." style={{background:"none"}} value={noteContent} onChange={(e)=>noteContentVerify(e.target.value)} ></textarea>
                <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
        </article>
        <aside>
            <button style={{background:palette.tone1, color:palette.tone11}}>C</button>
            <button id="chosenCol" style={{background:palette.tone1, color:palette.tone11}} data-color="lightgray" ><span> </span>
                <div className="appendCol">
                    <button style={{background:"red"}} onClick={()=>choseColor("#ca0a0ab3")}></button>
                    <button style={{background:"yellow"}} onClick={()=>choseColor("#cab00ab3")}></button>
                    <button style={{background:"green"}} onClick={()=>choseColor("#0aca34b3")}></button>
                    <button style={{background:"violet"}} onClick={()=>choseColor("#c00acab3")}></button>
                </div>
            </button>
            <button style={{background:palette.tone1, color:palette.tone11}}>oth</button>
            <span className="separators"></span>
            <button  id="send_note" style={{background:palette.tone1, color:palette.tone11}}  onClick={sendNote} ><i class="fa-solid fa-paper-plane"></i></button>
        </aside>
    </div>
}

function En_tete({palette, noteContent, colChoose}) {
    
    useEffect(()=>{
        let countChar = ""
        let countWord = ""
        if (noteContent<=0) {
            countChar = ""
            countWord=""
        } else {
            countChar = "<div class='countChar' ><span class='val' style='color: "+colChoose+";' >"+noteContent.length+"</span> <span>caractère(s)</span></div>"
            let nWordSpace = (noteContent.split(' '))
            let nWord = nWordSpace.filter(e => e !== "").length;
            countWord = "<div class='countChar' ><span class='val' style='color: "+colChoose+";' >"+nWord+"</span> <span>mots(s)</span></div>"
        }
        document.querySelector(".content").innerHTML=countChar+"<span class='separators'></span>"+countWord;
    },[noteContent, colChoose])

    
    
    return <>
        <h1 style={{background:palette.tone22, color:palette.tone1}} >Nouvelle note</h1>
        <div className="settings">
            <div className="content">
            </div>
        </div>
    </>
}

export default NewNote;