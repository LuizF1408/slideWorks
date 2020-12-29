import React from "react"
import '../css/form.css'

export default function form() {


    return (

        <div className="container">
            <div className="container_form">
                <h1>Nome</h1>
                <input type="text" placeholder="Digite seu nome " id="name" />
                <h1>Email</h1>
                <input type="email" placeholder="Digite seu email" name="email" id="email" />

                <input type="text" placeholder="Digite aqui sua mensagem" id="cxText" />


            </div>

            <div className="container_2">
                <div className="ck1">
                    <input type="checkbox" name="" id="check1" />
                    <h1>Opção 1</h1>

                </div>
                <div className="ck2">
                    <input type="checkbox" name="" id="check2" />
                    <h1>Opção 2</h1>

                </div>
                <div className="ck3">
                    <input type="checkbox" name="" id="check3" />
                    <h1>Opção 3</h1>

                </div>



            </div>
            <div className="container_3">
                <label >Escolha um Opção:</label>

                <select name="options" id="options">
                    <option value="1">Opção 1</option>
                    <option value="2">Opção 2</option>
                    <option value="3">Opção 3</option>
                    <option value="4">Opção 4</option>
                </select>


            </div>

            <div className="container_4">
                <div className="pill-container">
                    <input type="checkbox" id="web" name="selector" value="web" />
                    <label className="selector web" for="web"> web</label>

                    <input type="checkbox" id="illustration" name="selector" value="illustration" />
                    <label className="selector" for="illustration">illustration</label>

                    <input type="checkbox" id="graphics" name="selector" value="graphics" />
                    <label className="selector" for="graphics">graphics</label>

                    <input type="checkbox" id="ui" name="selector" value="ui" />
                    <label className="selector" for="ui">ui</label>

                    <input type="checkbox" id="design" name="selector" value="design" />
                    <label className="selector" for="design">desing</label>

                    <input type="checkbox" id="app" name="selector" value="app" />
                    <label className="selector" for="app">app</label>

                    <input type="checkbox" id="iphone" name="selector" value="iphone" />
                    <label className="selector" for="iphone">iphone</label>

                    <input type="checkbox" id="interface" name="selector" value="interface" />
                    <label className="selector" for="interface">interface</label>

                    <input type="checkbox" id="icon" name="selector" value="icon" />
                    <label className="selector" for="icon">icon</label>

                    <input type="checkbox" id="web_design" name="selector" value="web design" />
                    <label className="selector" for="web_design">web design</label>

                    <button>Enviar</button>
                </div>

                

            </div>

        </div>


        // {/* <div className="container_drop">

        //    


        // </div> */}



    )

}

