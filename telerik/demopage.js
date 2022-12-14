import { Selector} from "testcafe";
import XPathSelector from "./xpathtest.js";
class demopage{
    constructor(){
        this.web=Selector("a[aria-label='Web content']")
        this.desktop=Selector("a[aria-label='Desktop content']")
        this.mobile=Selector("a[aria-label='Mobile content']")
        this.reportingQa=Selector("a[aria-label='Reporting & QA content']")
        this.conversationalUi=Selector("a[aria-label='Conversational UI content']")
        this.SitefinityCms=Selector("a[aria-label='Sitefinity CMS content']")
        this.seeplanandPricing=Selector(".Btn.Btn--l.u-small-full.u-fs19.u-mb2.Btn--sec.u-db.track--pricing")
        this.moreaboutDevCraft=Selector("a[aria-label='Link More about Telerik DevCraft']")

    }
}
export default new demopage();