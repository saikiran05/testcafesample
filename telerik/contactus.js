import { Selector} from "testcafe";
import XPathSelector from "./xpathtest.js";
class contactus{
    constructor(){
this.whatcanihelpwithyou=Selector("#Dropdown-1")
this.productIntrest=Selector("#Dropdown-2")
this.FirstnName=Selector("#Textbox-1")
this.LastName=Selector("#Textbox-2")
this.bussinessEmail=Selector("#Email-1")
this.companyName=Selector("#Textbox-3")
this.country=Selector("#Country-1")
this.phoneNumber=Selector("#Textbox-4")
this.comments=Selector("#Textarea-1")
this.needSupports=Selector("body > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h3:nth-child(1) > a:nth-child(1)")
this.needQuote=Selector("body > div:nth-child(15) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > h3:nth-child(1) > a:nth-child(1)")
this.trainingServicAndConsulting=Selector("div:nth-child(4) h3:nth-child(1) a:nth-child(1)")
this.SitefinityQuestions=Selector("div:nth-child(5) h2:nth-child(1) a:nth-child(1)")
    }
}export default new contactus();
