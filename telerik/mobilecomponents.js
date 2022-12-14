import XPathSelector from "./xpathtest.js";
class mobilecomponents{
    constructor(){
    
    this.uiFordotNetMAUI=XPathSelector("//div[contains(@class,'col-5')]//div[contains(@class,'TK-New')][normalize-space()='Telerik UI for .NET MAUI']")
    this.uiForXamarin=XPathSelector("//div[normalize-space()='Telerik UI for Xamarin']")
    this.devCraft=XPathSelector("//button[contains(@aria-label,'expand Mobile Components')]//div[contains(@class,'Box-content')]//div[contains(@class,'Box-bundle u-p2 u-pb1')]//div[contains(@class,'row')]//div[contains(@class,'col-4 u-m-col-12 u-m-mb2')]//div[contains(@class,'u-dib u-vam')]//div//a[contains(@class,'u-dib u-fs24 u-fw5 u-vam u-mr1')][normalize-space()='DevCraft']")
}
}
export default new mobilecomponents();