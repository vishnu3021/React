import vishnu1 from '../logo.svg'
import vishnu from '../vishnu.png';
function Gallary(){
    return(
        <div className="gallary" style={{
            display:"flex",
            // justifyContent:"space-around",
            // alignItems:"center",
            flexWrap:"wrap",

            
        }}>
            <img src={vishnu} height={"100px"} width={'100px'} />
            <img src={vishnu1}  height={"100px"} width={'100px'} />
            <img src={vishnu}  height={"100px"} width={'100px'}/>
            <img src={vishnu1} height={"100px"} width={'100px'} />
            <img src={vishnu}  height={"100px"} width={'100px'}/>
            <img src={vishnu1} height={"100px"} width={'100px'} />
            <img src={vishnu} height={"100px"} width={'100px'}/>
            <img src={vishnu1} height={"100px"} width={'100px'}/>
            <img src={vishnu} height={"100px"} width={'100px'}/>
            <img src={vishnu1} height={"100px"} width={'100px'}/> 
            <img src={vishnu} height={"100px"} width={'100px'}/>
            <img src={vishnu1} height={"100px"} width={'100px'} />
        </div>
    )
}

export default Gallary;