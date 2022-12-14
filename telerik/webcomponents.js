import { Selector} from "testcafe";
import XPathSelector from "./xpathtest.js";
class webcomponents{
    constructor(){
this.uiforblazor=XPathSelector("//div[@id='ContentPlaceholder1_C352_Col00']//div[@class='row u-mb2']//div[1]//ul[1]//li[1]")
this.uiforaspcore=XPathSelector("//div[normalize-space()='Telerik UI for ASP.NET Core']")
this.uiforaspMvc=XPathSelector("//div[normalize-space()='Telerik UI for ASP.NET MVC']")
this.uiforaspazax=XPathSelector("//div[normalize-space()='Telerik UI for ASP.NET AJAX']")
this.uiforilverlight=XPathSelector("//div[normalize-space()='Telerik UI for Silverlight']")
this.uiforjquery=XPathSelector("//div[normalize-space()='Kendo UI for jQuery']")
this.uiforanglure=XPathSelector("//div[normalize-space()='Kendo UI for Angular']")
this.uiforVue=XPathSelector("//div[normalize-space()='Kendo UI for Vue']")
this.react=XPathSelector("//div[normalize-space()='KendoReact']")
this.devCraft=Selector(".u-xl-mb1")
this.downlodeFreeTrail=XPathSelector("//div[@class='Box-bundle']//a[@class='Btn Btn--l Btn--prim2 u-db u-fs19 u-pl1 u-pr1 track--download-trial-devcraft'][normalize-space()='Download Free Trial']")
}

}
export default new webcomponents();