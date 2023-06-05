import { Route, Routes } from "react-router-dom"
import {Home} from "../Home/Home"
import { Menu } from "../Shared/Menu/Menu"
import { Footer } from "../Shared/Footer/Footer"
import { Page1 } from "../sections/Page1/Page1"
import { Page2 } from "../sections/Page2/Page2"
import { Page3 } from "../sections/Page3/Page3"
import {Page4} from "../sections/Page4/Page4"
import {Page5} from "../sections/Page5/Page5"
import {Page6} from "../sections/Page6/Page6"
import {Page7} from "../sections/Page7/Page7"
import {Page8} from "../sections/Page8/Page8"
import {Page9} from "../sections/Page9/Page9"
import {Page10} from "../sections/Page10/Page10"
import {Page11} from "../sections/Page11/Page11"
import {Page12} from "../sections/Page12/Page12"
import {Page13} from "../sections/Page13/Page13"
import {Page14} from "../sections/Page14/Page14"
import {Page15} from "../sections/Page15/Page15"
import {Page16} from "../sections/Page16/Page16"
import {Page17} from "../sections/Page17/Page17"
import {Page18} from "../sections/Page18/Page18"
import {Page19} from "../sections/Page19/Page19"
import {Page20} from "../sections/Page20/Page20"
import {Page21} from "../sections/Page21/Page21"
import {Page22} from "../sections/Page22/Page22"
import {Page23} from "../sections/Page23/Page23"
import {Page24} from "../sections/Page24/Page24"
import {Page25} from "../sections/Page25/Page25"
import {Page26} from "../sections/Page26/Page26"
import {Page27} from "../sections/Page27/Page27"
import {Page28} from "../sections/Page28/Page28"
import {Page29} from "../sections/Page29/Page29"
import {Page30} from "../sections/Page30/Page30"
import {Page31} from "../sections/Page31/Page31"
import {Page32} from "../sections/Page32/Page32"
import {Page33} from "../sections/Page33/Page33"

export function Rutas(){
    
    return(
    <>
    <Menu/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/page1" element={<Page1/>} />
    <Route path="/page2" element={<Page2/>} />
    <Route path="page3" element={<Page3/>}/>
    <Route path="page4" element={<Page4/>}/>
    <Route path="page5" element={<Page5/>}/>
    <Route path="page6" element={<Page6/>}/>
    <Route path="page7" element={<Page7/>}/>
    <Route path="page8" element={<Page8/>}/>
    <Route path="page9" element={<Page9/>}/>
    <Route path="page10" element={<Page10/>}/>
    <Route path="page11" element={<Page11/>}/>
    <Route path="page12" element={<Page12/>}/>
    <Route path="page13" element={<Page13/>}/>
    <Route path="page14" element={<Page14/>}/>
    <Route path="page15" element={<Page15/>}/>
    <Route path="page16" element={<Page16/>}/>
    <Route path="page17" element={<Page17/>}/>
    <Route path="page18" element={<Page18/>}/>
    <Route path="page19" element={<Page19/>}/>
    <Route path="page20" element={<Page20/>}/>
    <Route path="page21" element={<Page21/>}/>
    <Route path="page22" element={<Page22/>}/>
    <Route path="page23" element={<Page23/>}/>
    <Route path="page24" element={<Page24/>}/>
    <Route path="page25" element={<Page25/>}/>
    <Route path="page26" element={<Page26/>}/>
    <Route path="page27" element={<Page27/>}/>
    <Route path="page28" element={<Page28/>}/>
    <Route path="page29" element={<Page29/>}/>
    <Route path="page30" element={<Page30/>}/>
    <Route path="page31" element={<Page31/>}/>
    <Route path="page32" element={<Page32/>}/>
    <Route path="page33" element={<Page33/>}/>
    </Routes>
    </>
    )
}