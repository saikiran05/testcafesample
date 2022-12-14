import XPathSelector from "./xpathtest.js";
class reportsanddashbord{
    constructor(){
        this.reporting=XPathSelector("//div[normalize-space()='Telerik Reporting']")
        this.reportServer=XPathSelector("//div[normalize-space()='Telerik Report Server']")
        this.devCraft=XPathSelector("//button[contains(@aria-label,'expand Reporting & Dashboards')]//div[contains(@class,'Box-content')]//div[contains(@class,'Box-bundle u-p2 u-pb1')]//div[contains(@class,'row')]//div[contains(@class,'col-4 u-m-col-12 u-m-mb2')]//div[contains(@class,'u-dib u-vam')]//div//a[contains(@class,'u-dib u-fs24 u-fw5 u-vam u-mr1')][normalize-space()='DevCraft']")
    
    }
}
export default new reportsanddashbord();