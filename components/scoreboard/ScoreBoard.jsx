import { useState } from "react";

export function ScoreBoard(){
    const style = {
    marginBottom: '10px',
  }

    const [countTeam1, setCount] = useState(0);

    function updateCount1(){        
        setCount(countTeam1 + 1);
    }

    function updateCount2(){        
        setCount(countTeam1 + 2);
    }

    function updateCount3(){        
        setCount(countTeam1 + 3);
    }

    const [countTeam2, setCount2] = useState(0);

    function updateCount1Team2(){        
        setCount2(countTeam2 + 1);
    }

    function updateCount2Team2(){        
        setCount2(countTeam2 + 2);
    }

    function updateCount3Team2(){        
        setCount2(countTeam2 + 3);
    }

    return (
        <>
            <div className="svieslente">
                <div className="team1">{countTeam1}</div>
                <div style={style}>:</div>
                <div className="team2">{countTeam2}</div>
            </div>
            <div className="buttons">
              <div className="team1Btn">
                  <button onClick={updateCount1}>+1</button>
                  <button onClick={updateCount2}>+2</button>
                  <button onClick={updateCount3}>+3</button>
              </div>
              <div className="team2Btn">
                  <button onClick={updateCount1Team2}>+1</button>
                  <button onClick={updateCount2Team2}>+2</button>
                  <button onClick={updateCount3Team2}>+3</button>
              </div>
            </div>
      </>
    );  
}