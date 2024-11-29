import './Sample.css';
import moon from '../image/watch.jpg'
function vishnu(){
    return(
       <table>
        <td>
            <tr style={{backgroundColor:"red",color:'blue'}}>s.no</tr>
            <tr style={{backgroundColor:"green",color:'black'}}>name</tr>
            <tr style={{backgroundColor:"blue",color:'white'}}>age</tr>
            <tr style={{backgroundColor:'black',color:'white'}}>mail_id</tr>
            <tr style={{color:'black'}}>phone.no</tr>
            <tr>image</tr>
        </td>
        <td>
            <tr>1</tr>
            <tr>vishnu</tr>
            <tr>22</tr>
            <tr>vishnu@gmail.com</tr>
            <tr>13456789</tr>
            <tr>
                <img src= {moon} alt='image' height={'50vh'} width={'50vh'}/>
            </tr>
        </td>
        <td>
            <tr>2</tr>
            <tr>GVVR</tr>
            <tr>22</tr>
            <tr>GVVR@gmail.com</tr>
            <tr>02136789</tr>
            <tr>
            <img src= {moon} alt='image' height={'50vh'} width={'50vh'}/>
            </tr>
        </td>
        <td>
            <tr>3</tr>
            <tr>vishnu vardhan</tr>
            <tr>22</tr>
            <tr>vishnuvardhan@gmail.com</tr>
            <tr>02134567</tr>
            <tr>
            <img src= {moon} alt='image' height={'50vh'} width={'50vh'}/>
            </tr>
        </td>
        <td>
            <tr>4</tr>
            <tr>vardhan</tr>
            <tr>22</tr>
            <tr>vardhan@gmail.com</tr>
            <tr>021345</tr>
            <tr>
            <img src= {moon} alt='image' height={'50vh'} width={'50vh'}/>
            </tr>
        </td>
       </table>
    )
}

export default vishnu;