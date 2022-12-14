import XPathSelector from "./xpathtest.js";
class testinganddebug{
    constructor(){
        this.testStudio=XPathSelector("//div[normalize-space()='Telerik Test Studio']")
        this.everywhere=XPathSelector("//div[normalize-space()='Fiddler Everywhere']")
        this.testStudioDevEdition=XPathSelector("//div[contains(@class,'icon-arrow u-fs22 u-fw5 u-wsn')]")
        this.jam=XPathSelector("//div[normalize-space()='Fiddler Jam']")
        this.justMock=XPathSelector("//div[normalize-space()='Telerik JustMock']")
        this.DevCraft=XPathSelector("//button[contains(@aria-label,'expand Testing & Debugging')]//div[contains(@class,'Box-content')]//div[contains(@class,'Box-bundle u-p2 u-pb1')]//div[contains(@class,'row')]//div[contains(@class,'col-4 u-m-col-12 u-m-mb2')]//div[contains(@class,'u-dib u-vam')]//div//a[contains(@class,'u-dib u-fs24 u-fw5 u-vam u-mr1')][normalize-space()='DevCraft']")
        
    }
}
export default new testinganddebug();