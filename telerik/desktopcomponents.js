// import { Selector} from "testcafe";

import XPathSelector from "./xpathtest.js";
class desktopcomponents{
    constructor(){
    this.uiFordotNet=XPathSelector("//div[@class='icon-arrow u-fs22 u-fw5 TK-New TK-Preview--maui u-ml0']")
this.uiForwpf=XPathSelector("//div[normalize-space()='Telerik UI for WPF']")
this.uiForWin=XPathSelector("//div[@class='icon-arrow u-fs22 u-fw5 TK-New TK-Preview--winui']")
this.uiForUwp=XPathSelector("//div[normalize-space()='Telerik UI for UWP']")
this.uiForWinForms=XPathSelector("//div[normalize-space()='Telerik UI for WinForms']")
this.devCraft=XPathSelector("//button[@aria-label='expand Desktop Components']//div[@class='Box-content']//div[@class='Box-bundle u-p2 u-pb1']//div[@class='row']//div[@class='col-4 u-m-col-12 u-m-mb2']//div[@class='u-dib u-vam']//div//a[@class='u-dib u-fs24 u-fw5 u-vam u-mr1'][normalize-space()='DevCraft']")
    
    
    }



}
export default new desktopcomponents();