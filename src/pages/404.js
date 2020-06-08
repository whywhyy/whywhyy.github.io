import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { Game } from "../pages/projects/tictactoe/index"

export default function page404() {
    return (
      <div>
        <h1>    
            <span role="img" aria-label="Folded Hands" >🙏</span> 
                404 page not found 
        </h1>

        <Link 
            to="/"
            css = {css`
            display:block;
            margin-bottom:3rem;
            `}
        >Go Back </Link>
        
        <Game/>
   
       </div>
    )
  }