// Write your code here


import {Component} from 'react'

import './index.css'


const HEADS_IMG_URL = "https://assets.ccbp.in/frontend/react-js/heads-img.png"
const TAILS_IMG_URL = "https://assets.ccbp.in/frontend/react-js/tails-img.png"

class CoinToss extends Component{
    state = {
        tossResultImage : HEADS_IMG_URL,
        headsCount: 0,
        tailsCount: 0,
    }
    render(){
        const {tossResultImage, headsCount, tailsCount} = this.state 
        const totalCount = headsCount + tailsCount
        return (
            <div>
                <div>
                    <h1> Coin Toss Game </h1>
                    <p> Heads (or) Tails </p>
                    <img 
                        src={tossResultImage}
                        alt="toss result"
                    />
                    <button type="button">
                        Toss Coin 
                    </button>
                </div>
                <div>
                    <p> Total: {totalCount}</p>
                    <p> Heads: {headsCount}</p>
                    <p> Tails: {tailsCount}</p>
                </div>
            </div>
        )
    }
}

export default CoinToss